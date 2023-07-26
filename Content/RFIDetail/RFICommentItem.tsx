import React from "react";
import { Discussion } from "../../../Models/discussion";
import {
  StyledRFICommentItemContainer,
  StyledRFICommentItemContent,
} from "./StyledComponentRFIDetail";

import { User } from "../../../Models/user";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import { useDoxleAuthStore } from "../../../DoxleGeneralStore/useDoxleAuthStore";
import { StyledRFIDetailLabelText } from "../StyledComponentRFI";
import { formatDate } from "../../../Utilities/FunctionUtilities";

type Props = {
  commentItem: Discussion;
};

const RFICommentItem = ({ commentItem }: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const { user } = useDoxleAuthStore((state) => ({
    user: state.user,
  }));

  const isCommentAuthor = Boolean(
    commentItem.authorJson && user?.userId === commentItem.authorJson.userId
  );
  return (
    <StyledRFICommentItemContainer
      $horizontalAlign={isCommentAuthor ? "flex-end" : "flex-start"}
    >
      <StyledRFIDetailLabelText
        $paddingLeft={"6px"}
        $paddingRight={"6px"}
        $fontSize={"16px"}
        $lineHeight={"19px"}
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
      >
        {isCommentAuthor
          ? "You"
          : `${commentItem.authorJson?.firstName} ${commentItem.authorJson?.lastName}`}{" "}
        on {formatDate(commentItem.timeStamp as string, "dd.MM.yyyy")}
      </StyledRFIDetailLabelText>

      <StyledRFICommentItemContent
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
        $horizontalAlign={isCommentAuthor ? "flex-end" : "flex-start"}
        $bgColor={isCommentAuthor ? "#DCDEE6" : "rgba(112, 112, 239, 0.1)"}
      >
        {commentItem.commentText}
      </StyledRFICommentItemContent>
    </StyledRFICommentItemContainer>
  );
};

export default RFICommentItem;
