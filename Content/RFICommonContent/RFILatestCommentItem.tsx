import React from "react";
import { Discussion } from "../../../Models/discussion";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import { User } from "../../../Models/user";
import { useRFIStore } from "../../Store/useRFIStore";
import { shallow } from "zustand/shallow";
import {
  StyledCommentAuthorTag,
  StyledCommentContentText,
  StyledLatestCommentItemContainer,
} from "../StyledComponentRFI";

type Props = {};

const RFILatestCommentItem = (props: {
  discussionItem: Discussion | undefined;
}) => {
  const { discussionItem } = props;
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const { contactList } = useRFIStore(
    (state) => ({
      contactList: state.contactList,
    }),
    shallow
  );
  console.log("DISCUSSION ITEM:", discussionItem);
  const matchUser: User | undefined = discussionItem
    ? discussionItem.authorJson ?? undefined
    : undefined;
  return (
    <StyledLatestCommentItemContainer
      $themeColor={doxleThemeColor}
      $doxleFont={doxleFont}
    >
      {discussionItem && (
        <>
          <StyledCommentAuthorTag
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            {matchUser
              ? `${matchUser.firstName[0]}${matchUser.lastName[0]}`
              : "Anonymous"}
          </StyledCommentAuthorTag>

          <StyledCommentContentText
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            {discussionItem.commentText}
          </StyledCommentContentText>
        </>
      )}
    </StyledLatestCommentItemContainer>
  );
};

export default RFILatestCommentItem;
