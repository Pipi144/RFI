import { shallow } from "zustand/shallow";
import { useEditDocketSideScreenStore } from "../../CoreContent/EditDocketSideScreen/EditDocketSideScreenStore/useEditDocketSideScreenStore";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import ContactsAPI from "../../Services/QueryHooks/contactsAPI";
import { useEffect, useMemo, useState } from "react";
import UserQueryAPI from "../../Services/QueryHooks/userQueryAPI";
import { User } from "../../Models/user";
import { useRFIStore } from "../Store/useRFIStore";
import { Contact } from "../../Models/addressBook";
import {ContactsFilters} from "../../Services/QueryHooks/contactsFilters";

interface RFI {}
export const useRFI = (): RFI => {
  const [searchAssigneeText, setSearchAssigneeText] = useState<string>("");

  const { accessToken } = useDoxleAuthStore((state) => ({
    accessToken: state.accessToken,
  }));
  const { company } = useDoxleCurrentContextStore((state) => ({
    company: state.currentCompany,
  }));
  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );
  const { edittedDocket } = useEditDocketSideScreenStore(
    (state) => ({
      edittedDocket: state.edittedDocket,
    }),
    shallow
  );
  const { setUserList, setFilterRFIListQuery, setContactList } = useRFIStore(
    (state) => ({
      setUserList: state.setUserList,
      setFilterRFIListQuery: state.setFilterRFIListQuery,
      setContactList: state.setContactList,
    }),
    shallow
  );

  useEffect(() => {
    if (edittedDocket) {
      setFilterRFIListQuery({
        docketId: edittedDocket.docketPk,
        projectId: edittedDocket.project ?? undefined,
      });
    }
  }, [edittedDocket]);

  //#FETCHING USERS
  const onSuccessGetUserCb = (userListServer: User[]) => {
    if (userListServer) setUserList(userListServer);
  };
  const getUserQueryList = UserQueryAPI.useGetUserList({
    accessToken,
    company,
    showNotification,
    onSuccessRetrieveCB: onSuccessGetUserCb,
  });

  //#FETCHING CONTACTS
  const filterRetrieveContactQuery: ContactsFilters = useMemo(
    () => ({
      search: searchAssigneeText,
    }),
    []
  );
  // useEffect(() => {
  //   setFilterRetrieveContactQuery(filterRetrieveContactQuery);
  // }, [filterRetrieveContactQuery]); //! SAVE THIS FILTER TO USE FOR MUTATION WHEN EDITING CONTACTS

  const retrievedContacts = ContactsAPI.useRetrieveContactsQuery({
    accessToken: accessToken,
    company,
    filter: filterRetrieveContactQuery,
    enable: true,
  });
  // useEffect(() => {

  // }, [retrievedContacts.hasNextPage]);

  const contactList: Contact[] = useMemo(
    () =>
      retrievedContacts.isSuccess
        ? retrievedContacts.data.pages.flatMap(
            (page) => page.data.results ?? []
          ) ?? []
        : [],
    [retrievedContacts.data]
  );
  useEffect(() => {
    if (retrievedContacts.hasNextPage) retrievedContacts.fetchNextPage();
  }, [retrievedContacts.hasNextPage]);

  useEffect(() => {
    setContactList(contactList);
  }, [contactList]);

  return {};
};
