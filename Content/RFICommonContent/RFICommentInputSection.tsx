import React, { useState } from "react";
import {
  DoxleFont,
  DoxleThemeColor,
  useDoxleThemeStore,
} from "../../../DoxleGeneralStore/useDoxleThemeStore";
import {
  AddedDiscussionFile,
  FilterGetDiscussionQuery,
} from "../../../Services/QueryHooks/discussionsAPI";
import { VirtuosoHandle } from "react-virtuoso";
import { Contact } from "../../../Models/addressBook";
import { Company } from "../../../Models/company";
import { RFI } from "../../Models/rfi";
import {
  StyledRFICommentInputSection,
  StyledRFICommentMention,
  StyledRFICommentTextfield,
  StyledRFISendCommentBtn,
} from "../RFIDetail/StyledComponentRFIDetail";
import { AnimatePresence } from "framer-motion";
import { useRFICommentInputSection } from "../../Hooks/useRFICommentInputSection";
import { Mention, OnChangeHandlerFunc } from "react-mentions";
import { CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
type Props = {};

const RFICommentInputSection = (props: {
  filterDiscussionRFI: FilterGetDiscussionQuery;
  commentListRef: React.RefObject<VirtuosoHandle>;
  fullControl: boolean;
  partyInfo: Contact[];
  companyDetail?: Company | undefined;
  rfiItem: RFI;
}) => {
  const {
    filterDiscussionRFI,
    commentListRef,
    partyInfo,
    fullControl,
    companyDetail,
    rfiItem,
  } = props;
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));

  const {
    commentText,
    setCommentText,
    handleClickSendButton,
    taggedUsers,
    setTaggedUsers,
    nameOptions,
    isAddingComment,
  } = useRFICommentInputSection({
    filterDiscussionRFI,
    commentListRef,
    partyInfo,
    fullControl,
    companyDetail,
    rfiItem,
  });
  //* Animation
  const mentionAnimatedVariants = {
    entering: {
      y: [10, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.2,
      },
    },
    exiting: {
      y: [0, 5],
      opacity: [1, 0],
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <StyledRFICommentInputSection $themeColor={doxleThemeColor}>
      <AnimatePresence>
        <StyledRFICommentTextfield
          $themeColor={doxleThemeColor}
          style={{
            ...mentionInputStyle(doxleThemeColor, doxleFont),
          }}
          value={commentText}
          forceSuggestionsAboveCursor={true}
          placeholder="Add Comment"
          onChange={(event: { target: { value: string } }) => {
            setCommentText(event.target.value);
          }}
          onKeyDown={(
            event:
              | React.KeyboardEvent<HTMLTextAreaElement>
              | React.KeyboardEvent<HTMLInputElement>
          ) => {
            if (event.nativeEvent.key === "Enter") {
              handleClickSendButton();
            }
            if (event.nativeEvent.key === "Escape") {
              setCommentText("");
            }
          }}
          singleLine
          customSuggestionsContainer={(children: React.ReactNode) => (
            <StyledRFICommentMention
              $themeColor={doxleThemeColor}
              variants={mentionAnimatedVariants}
              initial={false}
              animate="entering"
              exit="exiting"
            >
              {children}
            </StyledRFICommentMention>
          )}
          children={
            <Mention
              onAdd={(id, display) => {
                if (!taggedUsers.includes(id.toString()))
                  setTaggedUsers([...taggedUsers, id.toString()]);
              }}
              markup="@[__display__](__id__)"
              displayTransform={(id, display) => `@${display}`}
              data={nameOptions}
              trigger="@"
            />
          }
        />
      </AnimatePresence>
      {/* <Mention
            markup="@[__display__](__id__)"
            displayTransform={(id, display) => `@${display}`}
            data={nameOptions}
            trigger="@"
          /> */}
      {/* </StyledRFICommentTextfield> */}
      {isAddingComment && (
        <CircularProgress
          sx={{ color: doxleThemeColor.doxleColor, marginInline: 2 }}
          size={30}
        />
      )}

      <StyledRFISendCommentBtn
        startIcon={<SendIcon />}
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
        onClick={handleClickSendButton}
      >
        Send
      </StyledRFISendCommentBtn>
    </StyledRFICommentInputSection>
  );
};

export default RFICommentInputSection;

const mentionInputStyle = (
  themeColor: DoxleThemeColor,
  doxleFont: DoxleFont
) => ({
  flex: 1,
  display: "flex",
  height: "100%",
  justifyContent: "flex-start",
  alignItems: "center",

  "&singleLine": {
    highlighter: {
      border: "0px !important",
    },
    input: {
      fontFamily: doxleFont.primaryFont,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "20px",
      color: themeColor.primaryFontColor,
      border: "0px",
      outline: "none",
      height: "100%",
      width: "100%",
      caretColor: themeColor.primaryFontColor,
    },
  },
  "&multiLine": {
    highlighter: {
      border: "0px !important",
    },
    input: {
      fontFamily: doxleFont.primaryFont,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "20px",
      color: themeColor.primaryFontColor,
      border: "0px",
      outline: "none",
      height: "100%",
      width: "100%",
      caretColor: themeColor.primaryFontColor,
    },
  },
  suggestions: {
    list: {
      fontFamily: doxleFont.secondaryFont,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "18px",
      color: themeColor.primaryFontColor,
    },
    item: {
      height: 30,
      padding: "5px 14px",
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${themeColor.primaryDividerColor}`,
      color: themeColor.primaryFontColor,
      "&focused": {
        backgroundColor: themeColor.doxleColor,
        color: themeColor.primaryReverseFontColor,
        transition: "0.4s",
        transform: "scale(1.2)",
        justifyContent: "center",
      },
    },
  },
});
