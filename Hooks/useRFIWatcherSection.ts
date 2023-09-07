import { useCallback, useMemo, useState } from "react";
import { Contact } from "../../Models/addressBook";
import { RFI } from "../Models/rfi";
import ContactsAPI, {
  FilterRetrieveContactQuery,
} from "../../Services/QueryHooks/contactsAPI";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
type Props = {
  edittedRFI: RFI;
  setEdittedRFI: React.Dispatch<React.SetStateAction<RFI>>;
  fullControl: boolean;
  watcherList: Contact[];
};

interface RFIWatcherSection {
  handleClickAssignWatcherBtn: () => void;
  showUserListDropdown: boolean;
  handleCloseUserList: () => void;
  isUserSelected: (item: Contact) => boolean;
  handleClickUserItem: (contactItem: Contact) => void;
  contactList: Contact[];
  isFetchingContactList: boolean;
  isSuccessFetchingContactList: boolean;
  isErrorFetchingContactList: boolean;
  handleSearchAssigneeTextChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  hasNextPageContact: boolean;
  handleFetchNextPage: () => void;
  assigneeSearchText: string;
  isFetchingNextPage: boolean;
}
export const useRFIWatcherSection = ({
  edittedRFI,
  setEdittedRFI,
  fullControl,
  watcherList,
}: Props): RFIWatcherSection => {
  const [assigneeSearchText, setAssigneeSearchText] = useState<string>("");
  const [showUserListDropdown, setShowUserListDropdown] =
    useState<boolean>(false);
  const { accessToken } = useDoxleAuthStore();
  const { company } = useDoxleCurrentContextStore((state) => ({
    company: state.currentCompany,
  }));
  const handleCloseUserList = () => {
    setShowUserListDropdown(false);
  };
  const handleClickAssignWatcherBtn = () => {
    setShowUserListDropdown(true);
  };
  const isUserSelected = useCallback(
    (item: Contact) => {
      return Boolean(
        watcherList.find((watcher) => watcher.contactId === item.contactId) !==
          undefined
      );
    },
    [watcherList]
  );

  const handleClickUserItem = (contactItem: Contact) => {
    handleCloseUserList();
    if (isUserSelected(contactItem)) {
      setEdittedRFI((prev) => ({
        ...prev,
        watchers: [
          ...prev.watchers.filter(
            (watcherId) => watcherId !== contactItem.contactId
          ),
        ],
        watchersJson: prev.watchersJson
          ? prev.watchersJson.filter(
              (watcherItem) => watcherItem.contactId !== contactItem.contactId
            )
          : [],
      }));
    } else
      setEdittedRFI((prev) => ({
        ...prev,
        watchers: [...edittedRFI.watchers, contactItem.contactId],
        watchersJson: prev.watchersJson
          ? [...prev.watchersJson, contactItem]
          : [contactItem],
      }));
  };
  const handleSearchAssigneeTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAssigneeSearchText(event.target.value);
  };
  const filterRetrieveContactQuery: FilterRetrieveContactQuery = useMemo(
    () => ({
      searchInput: assigneeSearchText,
    }),
    [assigneeSearchText]
  );

  const retrievedContacts = ContactsAPI.useRetrieveContactsQuery({
    accessToken: accessToken,
    company,
    filter: filterRetrieveContactQuery,
    enable: fullControl,
  });
  const contactList: Contact[] = useMemo(
    () =>
      retrievedContacts.isSuccess
        ? retrievedContacts.data.pages.flatMap(
            (page) => page.data.results ?? []
          ) ?? []
        : [],
    [retrievedContacts.data]
  );
  const handleFetchNextPage = () => {
    retrievedContacts.fetchNextPage();
  };
  return {
    handleClickAssignWatcherBtn,
    showUserListDropdown,
    handleCloseUserList,
    isUserSelected,
    handleClickUserItem,
    contactList,
    isFetchingContactList: retrievedContacts.isLoading,
    isSuccessFetchingContactList: retrievedContacts.isSuccess,
    isErrorFetchingContactList: retrievedContacts.isError,
    handleSearchAssigneeTextChange,
    hasNextPageContact: retrievedContacts.hasNextPage || false,
    handleFetchNextPage,
    assigneeSearchText,
    isFetchingNextPage: retrievedContacts.isFetchingNextPage,
  };
};
