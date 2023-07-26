import { motion } from "framer-motion";
import styled from "styled-components";

import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";

import { Mention, MentionsInput } from "react-mentions";
import {
  DoxleFont,
  DoxleThemeColor,
} from "../../../DoxleGeneralStore/useDoxleThemeStore";
import {
  TRgbaFormat,
  editRgbaAlpha,
} from "../../../Utilities/FunctionUtilities";

export const StyledRFIDetailContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  width: calc(100% - 28px);
  height: calc(100% - 28px);
  display: flex;
  flex-direction: column;
  padding: 14px;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.$themeColor.primaryBackgroundColor};
`;
export const StyledAssignWatcherIconButton = styled(IconButton)<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    border: 1px solid ${(p) => p.$themeColor.doxleColor};
    margin-left: 4px;
    position: relative;
    overflow: visible;
  }
`;

export const StyledRFIWatcherList = styled.div`
  overflow: scroll;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const StyledRFIWatcherTag = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.primaryFontColor};
  border-radius: 13px;
  background-color: ${(p) =>
    editRgbaAlpha({
      rgbaColor: p.$themeColor.primaryContainerColor as TRgbaFormat,
      alpha: "0.8",
    })};
  margin: 0px 4px;
  padding: 4px 14px;
  white-space: nowrap;
`;
export const StyledUserListItem = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  cursor: pointer;
  width: calc(100% - 16px);
  height: 40px;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  padding: 0px 8px;
  align-items: center;
  display: flex;

  border-bottom: 1px solid ${(p) => p.$themeColor.primaryDividerColor};
`;
export const StyledUserDropdownListContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  height: 300px;
  background-color: ${(p) => p.$themeColor.primaryContainerColor};
  box-shadow: 1px 4px 4px ${(p) => p.$themeColor.primaryBoxShadowColor};
  width: 200px;
  border-radius: 8px;
  position: absolute;
  left: calc(50% - 100px);
  bottom: -310px;
`;

export const StyledRFIDetailContentRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 14px 0px;
`;
export const StyledRFIDetailField = styled.div<{ $widthRatio: `${number}%` }>`
  width: ${(p) => p.$widthRatio};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80px;
`;
export const StyledRFIDetailView = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;

  color: ${(p) => p.$themeColor.primaryFontColor};
  width: calc(100% - 40px);
  height: 44px;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 0px 20px;
  background-color: ${(p) => p.$themeColor.primaryContainerColor};
  margin-top: 2px;
`;
export const StyledRFIQuestionContentView = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  width: calc(100% - 28px);
  background-color: ${(p) => p.$themeColor.primaryContainerColor};
  padding: 8px 14px;
  font-family: ${(p) => p.$doxleFont.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;

  color: ${(p) => p.$themeColor.primaryFontColor};
  min-height: 70px;
  text-transform: none;
`;
export const StyledRFICommentViewContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 200px;
`;
export const StyledRFIDetailTitleSection = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
  fullControl: boolean;
}>`
  width: calc(100%);

  display: flex;
  position: relative;
  justify-content: ${(p) => (p.fullControl ? "space-between" : "center")};
  align-items: flex-start;
  margin: 20px 0 40px 0px;
`;
export const StyledRFIBackBtn = styled(IconButton)`
  && {
    width: 50px;
    height: 50px;
  }
`;
export const StyledRFICommentInputSection = styled.div<{
  $themeColor: DoxleThemeColor;
}>`
  width: calc(100% - 16px);
  height: 52px;
  display: flex;
  flex-direction: row;
  padding: 4px 8px;
  background-color: ${(p) =>
    editRgbaAlpha({
      rgbaColor: p.$themeColor.doxleColor as TRgbaFormat,
      alpha: "0.3",
    })};
  border-radius: 4px;
  align-items: center;
`;

export const StyledFetchingDiscussionEventScreen = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.05em;

  color: ${(p) => p.$themeColor.primaryFontColor};
`;
export const StyledRFISendCommentBtn = styled(Button)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    height: 40px;
    min-width: 40px;
    border-radius: 14px;
    padding: 0px 14px !important;
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;

    color: ${(p) => p.$themeColor.primaryReverseFontColor};
    background-color: ${(p) => p.$themeColor.doxleColor};
    text-transform: capitalize;
  }
`;
export const StyledRFICommentTextfield = styled(MentionsInput)<{
  $themeColor: DoxleThemeColor;
}>`
  flex: 1;
  height: 100%;
  padding: 0 !important;
  border: none !important;
  color: ${(p) => p.$themeColor.primaryFontColor};
`;
export const StyledBallInCourtForm = styled(FormControl)`
  && {
    width: 40%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const StyledBallInCourtAutocomplete = styled(Autocomplete)`
  && {
    width: 100%;
    margin-top: 2px;
    padding: 0 !important;
  }
`;
export const StyledUserList = styled(motion(Paper))<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    border-radius: 4px;
    padding: 0 !important;
    max-height: 500px;
    background-color: ${(p) => p.$themeColor.primaryContainerColor};
    box-shadow: 1px 1px 4px ${(p) => p.$themeColor.primaryBoxShadowColor};
    margin-top: 4px;
  }
`;
export const StyledBallInCourtTextField = styled(TextField)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    width: calc(100%);
    height: 44px;

    background-color: ${(p) =>
      editRgbaAlpha({
        rgbaColor: p.$themeColor.doxleColor as TRgbaFormat,
        alpha: "0.4",
      })};
  }
  input {
    font-family: ${(p) => p.$doxleFont.secondaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: ${(p) => p.$themeColor.primaryContainerColor};
    padding: 0px 14px !important;
    margin: 0;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`;
export const StyledUserOptionContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  width: calc(100%);
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;
  padding: 0px 8px;
  text-transform: capitalize;
  cursor: pointer;
`;
export const StyledRFICommentMention = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  height: 204px;
  width: 200px;
  position: relative;
  z-index: 10;
  background-color: ${(p) => p.$themeColor.primaryContainerColor};
  top: 0px;
  overflow-y: scroll;
  border-radius: 4px 4px 0px 0px;
  box-shadow: 0px 0px 4px 4px ${(p) => p.$themeColor.primaryBoxShadowColor};
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(p) => p.$themeColor.primaryFontColor};
`;
export const StyledRFICommentItemContainer = styled(motion.div)<{
  $horizontalAlign: "flex-start" | "center" | "flex-end";
}>`
  width: 100%;
  padding: 14px 0px;
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.$horizontalAlign};
`;
export const StyledRFICommentItemContent = styled.div<{
  $horizontalAlign: "flex-start" | "center" | "flex-end";
  $bgColor: string;
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  width: calc(100% - 28px);
  margin-top: 2px;
  padding: 14px;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.$bgColor};
  justify-content: ${(p) => p.$horizontalAlign};
  font-family: ${(p) => p.$doxleFont.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${(p) => p.$themeColor.primaryFontColor};
`;

export const StyledRFIEditButton = styled(motion(Button))<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
  $bgColor: string;
}>`
  && {
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: ${(p) => p.$themeColor.primaryReverseFontColor};
    background-color: ${(p) => p.$bgColor};
    margin: 0px 4px;
    text-transform: capitalize;
    min-width: 90px;
  }
  &:hover {
    background-color: ${(p) => p.$bgColor} !important;
    opacity: 0.9;
    transform: translateY(-5px) scale(1.05);
    transition: 0.4s;
  }
  &.Mui-disabled {
    background-color: ${(p) => p.$themeColor.primaryBoxShadowColor} !important;
  }
`;
export const StyledStyledRFIScreenTitleText = styled.span<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 45px;
  letter-spacing: 0.05em;

  color: ${(p) => p.$themeColor.doxleColor};
  text-transform: uppercase;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  text-align: center;
`;
export const StyledRFIDeleteEventScreen = styled.div<{
  $themeColor: DoxleThemeColor;
}>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.$themeColor.primaryBackdropColor};
`;

export const StyledDeleteDialogTitle = styled(DialogTitle)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.05em;

    color: ${(p) => p.$themeColor.primaryFontColor};
    border-bottom: 1px solid ${(p) => p.$themeColor.primaryDividerColor};
    background-color: ${(p) => p.$themeColor.primaryContainerColor};
  }
`;
export const StyledDeleteDialogContainer = styled(Dialog)<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    background-color: ${(p) => p.$themeColor.primaryBackdropColor};
    box-shadow: 1px 1px 2px ${(p) => p.$themeColor.primaryBoxShadowColor};
  }
  & .MuiDialog-paper {
    background-color: ${(p) => p.$themeColor.primaryBackdropColor};
    box-shadow: 0px 0px 4px 4px ${(p) => p.$themeColor.primaryBoxShadowColor};
  }
`;
export const StyledDeleteDialogContentText = styled(DialogContentText)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.05em;

    color: ${(p) => p.$themeColor.primaryFontColor};
  }
`;
export const StyledDeleteDialogContent = styled(DialogContent)<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    background-color: ${(p) => p.$themeColor.primaryContainerColor};
    box-shadow: 1px 1px 2px ${(p) => p.$themeColor.primaryBoxShadowColor};
  }
`;
export const StyledDeleteDialogActions = styled(DialogActions)<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    background-color: ${(p) => p.$themeColor.primaryContainerColor};
    box-shadow: 1px 1px 2px ${(p) => p.$themeColor.primaryBoxShadowColor};
  }
`;
export const StyledRFIWacherSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 14px 0px;
  z-index: 4;
`;
