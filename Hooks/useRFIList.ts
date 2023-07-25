import { useCallback, useMemo, useState } from "react";
import { RFI } from "../Models/rfi";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import { useRFIStore } from "../Store/useRFIStore";
import { shallow } from "zustand/shallow";
import RFIQueryAPI from "../QueryAPI/rfiQueryAPI";

interface RFIList {
  isFetchingRFIList: boolean;
  isErrorFetchingRFIList: boolean;
  isSuccessFetchingRFIList: boolean;
  rfiList: RFI[];
  setShowAddRFIForm: React.Dispatch<React.SetStateAction<boolean>>;
  showAddRFIForm: boolean;
  handleClickAddRFIBtn: () => void;
  handleClickRFIItem: (rfiItem: RFI) => void;
  selectedRFI: RFI | undefined;
  handleCloseRFIDetailScreen: () => void;
  setSelectedRFI: React.Dispatch<React.SetStateAction<RFI | undefined>>;
}
export const useRFIList = (): RFIList => {
  const [showAddRFIForm, setShowAddRFIForm] = useState<boolean>(false);
  const [selectedRFI, setSelectedRFI] = useState<RFI | undefined>(undefined);
  const { accessToken } = useDoxleAuthStore((state) => ({
    accessToken: state.accessToken,
  }));
  const { company } = useDoxleCurrentContextStore((state) => ({
    company: state.currentCompany,
  }));
  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );
  const { filterRFIListQuery } = useRFIStore(
    (state) => ({
      filterRFIListQuery: state.filterRFIListQuery,
    }),
    shallow
  );

  //################### FETCHING RFIS ######################

  const getRFIListQuery = RFIQueryAPI.useGetRFIList({
    accessToken,
    company,
    showNotification,
    filter: filterRFIListQuery,
  });
  const rfiList: RFI[] = useMemo(
    () =>
      (getRFIListQuery.data?.pages.flatMap(
        (page) => page?.data?.results ?? []
      ) as RFI[]) ?? [],
    [getRFIListQuery.data?.pages]
  );

  //############### END OF FETCHING RFIS ###################

  const handleClickAddRFIBtn = () => {
    setShowAddRFIForm(true);
  };

  const handleClickRFIItem = useCallback((rfiItem: RFI) => {
    setSelectedRFI(rfiItem);
  }, []);

  const handleCloseRFIDetailScreen = useCallback(() => {
    setSelectedRFI(undefined);
  }, []);

  return {
    isFetchingRFIList: getRFIListQuery.isLoading,
    isErrorFetchingRFIList: getRFIListQuery.isError,
    isSuccessFetchingRFIList: getRFIListQuery.isSuccess,
    rfiList,
    setShowAddRFIForm,
    showAddRFIForm,
    handleClickAddRFIBtn,
    handleClickRFIItem,
    selectedRFI,
    handleCloseRFIDetailScreen,
    setSelectedRFI,
  };
};
