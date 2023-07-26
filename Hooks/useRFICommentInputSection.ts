import { VirtuosoHandle } from "react-virtuoso";
import DiscussionQueryAPI, {
  AddedDiscussionFile,
  FilterGetDiscussionQuery,
} from "../../Services/QueryHooks/discussionsAPI";
import { Contact } from "../../Models/addressBook";
import { Company } from "../../Models/company";
import { RFI } from "../Models/rfi";
import { useMemo, useState } from "react";
import { useRFIStore } from "../Store/useRFIStore";
import { shallow } from "zustand/shallow";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import { SuggestionDataItem } from "react-mentions";
import { User } from "../../Models/user";
import { Discussion, getNewTemplateDiscussion } from "../../Models/discussion";

interface RFICommentInputSection {
  commentText: string;
  setCommentText: React.Dispatch<React.SetStateAction<string>>;
  handleClickSendButton: () => void;
  taggedUsers: string[];
  setTaggedUsers: React.Dispatch<React.SetStateAction<string[]>>;
  nameOptions: SuggestionDataItem[];
  isAddingComment: boolean;
}
export const useRFICommentInputSection = (props: {
  filterDiscussionRFI: FilterGetDiscussionQuery;
  commentListRef: React.RefObject<VirtuosoHandle>;
  fullControl: boolean;
  partyInfo: Contact[];
  companyDetail?: Company | undefined;
  rfiItem: RFI;
}): RFICommentInputSection => {
  const {
    filterDiscussionRFI,
    commentListRef,
    partyInfo,
    fullControl,
    companyDetail,
    rfiItem,
  } = props;
  const [commentText, setCommentText] = useState<string>("");
  const [taggedUsers, setTaggedUsers] = useState<string[]>([]);
  const [addedFiles, setAddedFiles] = useState<AddedDiscussionFile[]>([]);

  const { contactList, userList } = useRFIStore(
    (state) => ({
      contactList: state.contactList,
      userList: state.userList,
    }),
    shallow
  );
  const { accessToken } = useDoxleAuthStore((state) => ({
    accessToken: state.accessToken,
  }));
  const { company } = useDoxleCurrentContextStore((state) => ({
    company: state.currentCompany,
  }));
  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );

  const onAddSuccessCb = () => {
    setCommentText("");
    setTaggedUsers([]);
    setAddedFiles([]);
    if (commentListRef.current) {
      commentListRef.current.scrollToIndex({
        index: "LAST",
        align: "end",
        behavior: "smooth",
        offset: 50,
      });
    }
  };
  const addDiscussionQuery = DiscussionQueryAPI.useAddDiscussionQuery({
    showNotification,
    accessToken,
    company: fullControl ? company : companyDetail,
    filter: props.filterDiscussionRFI,
    onSuccessCb: onAddSuccessCb,
  });
  const nameOptions: SuggestionDataItem[] = useMemo(
    () =>
      (fullControl
        ? contactList
        : rfiItem.creatorContact &&
          !partyInfo.filter(
            (party) => party.contactId === rfiItem.creatorContact?.contactId
          )
        ? [...partyInfo, rfiItem.creatorContact]
        : partyInfo
      ).map(
        (contact) =>
          ({
            id: (contact as Contact).user
              ? (contact as Contact).user
              : (contact as User).userId,
            display: `${contact.firstName} ${contact.lastName}`,
          } as SuggestionDataItem)
      ),
    [contactList]
  );

  const handleClickSendButton = () => {
    if (commentText) {
      let newComment: Discussion = getNewTemplateDiscussion({
        commentText,
        company,
        docket: "",
      });
      if (filterDiscussionRFI.docketId)
        newComment.docket = filterDiscussionRFI.docketId;
      if (filterDiscussionRFI.projectId)
        newComment.project = filterDiscussionRFI.projectId;
      if (filterDiscussionRFI.rfiPk) newComment.rfi = filterDiscussionRFI.rfiPk;
      if (taggedUsers.length > 0) newComment.taggedUsers = taggedUsers;

      addDiscussionQuery.mutate({
        newDiscussion: newComment,
        files: addedFiles,
      });
    }
  };

  return {
    commentText,
    setCommentText,
    handleClickSendButton,
    taggedUsers,
    setTaggedUsers,
    nameOptions,
    isAddingComment: addDiscussionQuery.isLoading,
  };
};
