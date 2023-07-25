import { shallow } from "zustand/shallow";
import { RFI } from "../Models/rfi";
import { useRFIStore } from "../Store/useRFIStore";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import DiscussionQueryAPI, {
  FilterGetDiscussionQuery,
} from "../../Services/QueryHooks/discussionsAPI";
import { useMemo } from "react";
import { Discussion } from "../../Models/discussion";
import { User } from "../../Models/user";

interface Props {
  rfiItem: RFI;
}
interface RFIListItem {
  latestDiscussion: Discussion | undefined;
}
export const useRFIListItem = ({ rfiItem }: Props): RFIListItem => {
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
  const filterDiscussionRFI: FilterGetDiscussionQuery = useMemo(
    () => ({
      projectId: rfiItem.project || undefined,
      rfiPk: rfiItem.rfiPk,
      docketId: rfiItem.docket,
    }),
    [rfiItem]
  );
  const getDiscussionList = DiscussionQueryAPI.useGetDiscussionListQuery({
    showNotification,
    accessToken,
    company,
    filter: filterDiscussionRFI,
  });

  const discussionList = useMemo(
    () =>
      getDiscussionList.data?.pages.flatMap(
        (page) => page.data.results ?? []
      ) ?? [],
    [getDiscussionList.data]
  );

  const latestDiscussion: Discussion | undefined =
    discussionList.length > 0
      ? discussionList.sort((a, b) => {
          if (
            new Date((a as Discussion).timeStamp as string).getTime() >
            new Date((b as Discussion).timeStamp as string).getTime()
          )
            return -1;
          else return 1;
        })[0]
      : undefined;
  return {
    latestDiscussion,
  };
};
