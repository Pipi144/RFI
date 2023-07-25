import React, { useCallback, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { RFI } from "../Models/rfi";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
import { useRFIStore } from "../Store/useRFIStore";
import { FilterGetDiscussionQuery } from "../../Services/QueryHooks/discussionsAPI";
import {
  TRgbaFormat,
  editRgbaAlpha,
  formatDate,
} from "../../Utilities/FunctionUtilities";
import {
  StyledBallInCourtUser,
  StyledParticipantInfoText,
  StyledParticipantsInfoSection,
  StyledRFIItemDescriptionSection,
  StyledRFIItemTitleSetion,
  StyledRFIListItemContainer,
  StyledRFITimestampAndCommentSection,
  StyledRFITimestampText,
} from "./StyledComponentRFI";
import RFILatestCommentItem from "./RFICommonContent/RFILatestCommentItem";
import { useRFIListItem } from "../Hooks/useRFIListItem";

type Props = {
  rfiItem: RFI;
  handleClickRFIItem: (rfiItem: RFI) => void;
};

const RFIListItem = ({ rfiItem, handleClickRFIItem }: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const { latestDiscussion } = useRFIListItem({ rfiItem });
  //* Animation
  const rfiContainerAnimatedVariants = {
    initial: {
      scale: 1,
      x: -10,
      backgroundColor: doxleThemeColor.primaryContainerColor,
      opacity: 0,
      boxShadow: `0px 0px 0px ${doxleThemeColor.primaryBoxShadowColor} `,
    },
    entering: {
      x: 0,
      opacity: 1,
      scale: 1,
      backgroundColor: doxleThemeColor.primaryContainerColor,
      boxShadow: `0px 0px 0px ${doxleThemeColor.primaryBoxShadowColor} `,
      transition: {
        duration: 0.4,
      },
    },
    hovering: {
      scale: 0.95,
      backgroundColor: editRgbaAlpha({
        rgbaColor: doxleThemeColor.primaryContainerColor as TRgbaFormat,
        alpha: "0.4",
      }),
      boxShadow: `0px 0px 1px 4px ${doxleThemeColor.primaryBoxShadowColor} `,
      transition: {
        duration: 0.2,
      },
    },
    exiting: {
      x: 10,
      opacity: 0,
      scale: 1,
      backgroundColor: doxleThemeColor.primaryContainerColor,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <div style={{ paddingBottom: 30, width: "100%", display: "flex" }}>
      <StyledRFIListItemContainer
        $themeColor={doxleThemeColor}
        variants={rfiContainerAnimatedVariants}
        initial="initial"
        whileHover="hovering"
        animate="entering"
        exit={"exiting"}
        onClick={() => handleClickRFIItem(rfiItem)}
      >
        <StyledRFIItemTitleSetion
          $themeColor={doxleThemeColor}
          $doxleFont={doxleFont}
        >
          {rfiItem.rfiId}-{rfiItem.issueTitle}
        </StyledRFIItemTitleSetion>

        <StyledParticipantsInfoSection>
          <StyledParticipantInfoText
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
            style={{ opacity: 0.4 }}
          >
            From:
            {rfiItem.creatorContact
              ? ` ${rfiItem.creatorContact.firstName}  ${rfiItem.creatorContact.lastName}`
              : "Unknown"}
          </StyledParticipantInfoText>

          <StyledParticipantInfoText
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            To:{" "}
            {rfiItem.toContactJson
              ? `${rfiItem.toContactJson.firstName}  ${rfiItem.toContactJson.lastName}`
              : "Unknown"}
          </StyledParticipantInfoText>

          <StyledBallInCourtUser
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            {rfiItem.ballInCourtJson
              ? `${rfiItem.ballInCourtJson.firstName} ${rfiItem.ballInCourtJson.lastName}`
              : "Unknown"}
          </StyledBallInCourtUser>
        </StyledParticipantsInfoSection>

        <StyledRFIItemDescriptionSection
          $themeColor={doxleThemeColor}
          $doxleFont={doxleFont}
        >
          Description: {rfiItem.issueQuestion}
        </StyledRFIItemDescriptionSection>

        <StyledRFITimestampAndCommentSection>
          <RFILatestCommentItem discussionItem={latestDiscussion} />
          <StyledRFITimestampText
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            Issue On: {formatDate(rfiItem.createdOn as string, "dd-MM-yyyy")}
          </StyledRFITimestampText>
        </StyledRFITimestampAndCommentSection>
      </StyledRFIListItemContainer>
    </div>
  );
};

export default React.memo(RFIListItem);
