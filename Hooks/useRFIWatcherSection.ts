import { useCallback, useState } from "react";
import { useRFIStore } from "../Store/useRFIStore";
import { shallow } from "zustand/shallow";
import { Contact } from "../../Models/addressBook";
import { RFI } from "../Models/rfi";
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
}
export const useRFIWatcherSection = ({
  edittedRFI,
  setEdittedRFI,
  fullControl,
  watcherList,
}: Props): RFIWatcherSection => {
  const [showUserListDropdown, setShowUserListDropdown] =
    useState<boolean>(false);

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
      }));
    } else
      setEdittedRFI((prev) => ({
        ...prev,
        watchers: [...edittedRFI.watchers, contactItem.contactId],
      }));
  };

  return {
    handleClickAssignWatcherBtn,
    showUserListDropdown,
    handleCloseUserList,
    isUserSelected,
    handleClickUserItem,
  };
};
