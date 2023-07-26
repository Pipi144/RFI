import { useEffect, useMemo, useState } from "react";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import RFIQueryAPI from "../QueryAPI/rfiQueryAPI";
import { User } from "../../Models/user";
import { RFI } from "../Models/rfi";
import { Docket } from "../../Models/dockets";
import { Company } from "../../Models/company";

interface RFIRequestPage {
  docketDetail: Docket | undefined;
  rfiDetail: RFI | undefined;
  companyDetail: Company | undefined;
  extractedRfiLinkId: string;
}

const getRFIAccessId = () => {
  const url = window.location.href;
  const urlArray = url.split("/");
  const urlArrayUpper = url.toUpperCase().split("/");
  const rfiIndex = urlArrayUpper.indexOf("RFI");
  if (rfiIndex >= 0) {
    const rfiPk = urlArray?.[rfiIndex + 1];
    return rfiPk ?? "";
  }
  return "";
};
export const useRFIRequestPage = (): RFIRequestPage => {
  const { accessToken, setAccessToken, setUser } = useDoxleAuthStore(
    (state) => ({
      accessToken: state.accessToken,
      setAccessToken: state.setAccessToken,
      setUser: state.setUser,
    })
  );

  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );

  const extractedRfiLinkId = useMemo(() => getRFIAccessId(), []);
  const getRFILinkDetailQuery = RFIQueryAPI.useGetRFILinkDetailQuery({
    rfiLinkId: extractedRfiLinkId,
    showNotification,
  });

  const newAccessToken: string | undefined = useMemo(
    () =>
      getRFILinkDetailQuery.isSuccess
        ? getRFILinkDetailQuery.data.data.accessToken
        : undefined,
    [getRFILinkDetailQuery.data]
  );
  useEffect(() => {
    if (newAccessToken) {
      console.log("SET ACCESS TOKEN:", newAccessToken);
      setAccessToken(newAccessToken);
    }
  }, [newAccessToken]);

  const userInfo: User | undefined = useMemo(
    () =>
      getRFILinkDetailQuery.isSuccess
        ? getRFILinkDetailQuery.data.data.user
        : undefined,
    [getRFILinkDetailQuery.data]
  );
  useEffect(() => {
    if (userInfo) {
      console.log("SET USER INFO:", userInfo);
      setUser(userInfo);
    }
  }, [userInfo]);

  const rfiDetail: RFI | undefined = useMemo(
    () =>
      getRFILinkDetailQuery.isSuccess
        ? getRFILinkDetailQuery.data.data.result
        : undefined,
    [getRFILinkDetailQuery.data]
  );

  const docketDetail: Docket | undefined = useMemo(
    () =>
      getRFILinkDetailQuery.isSuccess
        ? getRFILinkDetailQuery.data.data.docket
        : undefined,
    [getRFILinkDetailQuery.data]
  );
  const companyDetail: Company | undefined = useMemo(
    () =>
      getRFILinkDetailQuery.isSuccess
        ? getRFILinkDetailQuery.data.data.company
        : undefined,
    [getRFILinkDetailQuery.data]
  );

  return {
    docketDetail,
    rfiDetail,
    companyDetail,
    extractedRfiLinkId,
  };
};
