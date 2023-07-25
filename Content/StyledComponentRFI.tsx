import { motion } from "framer-motion";
import styled from "styled-components";

import {
  Autocomplete,
  Button,
  Chip,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import {
  DoxleFont,
  DoxleThemeColor,
} from "../../DoxleGeneralStore/useDoxleThemeStore";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Duplex } from "stream";
export const StyledRFIRootContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.$themeColor.primaryBackgroundColor};
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row;
`;

export const StyledRFILogoSection = styled.div``;

// export const RFIWholePageContainer = styled.div`
//   max-width: 1225px;
//   min-width: 800px;
//   margin: 230px 50px;
//   width: calc(100% - 100px);
//   height: calc(100% - 460px);
//   display: flex;
//   flex-direction: row;
// `;

export const StyledRFIMainContentSection = styled.div<{
  $paddingRight: `${number}px`;
}>`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: calc(100% - 64px);
  align-items: flex-start;
  padding-top: 50px;
  padding-right: ${(p) => p.$paddingRight};
  padding-bottom: 14px;
  position: relative;
`;
export const StyledRFITopBanner = styled.div`
  width: 100%;

  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledRFIContentView = styled.div`
  flex: 1;
  width: 100%;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const StyledRFIEmptyScreenContainer = styled.div`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const StyledRFILottiesView = styled(motion.div)`
  width: 50%;
  height: 50%;
  min-width: 400px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const StyledAddRFIButton = styled(Button)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    min-width: 30px;
    height: 40px;
    background-color: ${(p) => p.$themeColor.doxleColor};
    border-radius: 8px;
    padding: 2px 14px;
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: ${(p) => p.$themeColor.primaryReverseFontColor};
    text-transform: capitalize;
    margin-top: 14px;
  }
  &&:hover {
    background-color: ${(p) => p.$themeColor.doxleColor};
    opacity: 0.8;
    transition: 0.5s;
    transform: translateY(-10px) scale(1.2);
  }
`;

export const StyledBackdropAddRFIForm = styled.div<{
  $themeColor: DoxleThemeColor;
}>`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.$themeColor.primaryBackdropColor};
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;
export const StyledAddRFIFormTopTitle = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  width: 100%;
  padding: 8px 0px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: ${(p) => p.$themeColor.primaryFontColor};
  text-transform: capitalize;
  border-bottom: 1px solid ${(p) => p.$themeColor.primaryDividerColor};
`;
export const StyledRFIFormContentSection = styled.div`
  flex: 1;
  width: calc(100% - 28px);
  display: flex;
  flex-direction: column;
  padding: 14px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
export const StyledAddRFIFormContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  width: 80%;
  height: 80%;
  max-width: 700px;
  max-height: 850px;
  min-width: 600px;
  min-height: 750px;
  background-color: ${(p) => p.$themeColor.primaryContainerColor};
  box-shadow: 0px 0px 8px ${(p) => p.$themeColor.primaryBoxShadowColor};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
`;
export const StyledRFIFormFieldView = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  width: 100%;
  display: flex;
  min-height: 80px;
  margin-bottom: 35px;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.primaryFontColor};
  align-items: flex-start;
  justify-content: space-between;
`;
export const StyledAddRFITextField = styled(TextField)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    width: 100% !important;
    margin-top: 8px;
    flex-direction: row;
  }
  & .MuiInput-root {
    border-bottom: 1px solid ${(p) => p.$themeColor.primaryFontColor};
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${(p) => p.$themeColor.primaryFontColor} !important;
    caret-color: ${(p) => p.$themeColor.primaryFontColor} !important;
  }
  & .MuiInput-root:after {
    border-bottom: 1px solid ${(p) => p.$themeColor.doxleColor};
  }
  & .MuiInputLabel-root {
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${(p) => p.$themeColor.primaryReverseBackdropColor};
    opacity: 0.8;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: ${(p) => p.$themeColor.doxleColor};
  }
  & .MuiInputBase-root {
    width: 100% !important;
  }
`;
export const StyledUserList = styled(motion(Paper))<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    border-radius: 4px;
    max-height: 500px;

    background-color: ${(p) => p.$themeColor.primaryContainerColor} !important;
    box-shadow: 1px 1px 4px ${(p) => p.$themeColor.primaryBoxShadowColor};
  }
`;
export const StyledUserAutoComplete = styled(Autocomplete)`
  && {
    width: 100%;
    flex-direction: row;
  }
`;
export const StyledRFIFormDatePickerView = styled(DesktopDatePicker)<{
  $themeColor: DoxleThemeColor;
}>`
  && {
    width: 40% !important;
  }
`;
export const StyledRFIAuthorFieldView = styled.div`
  width: 40%;
  display: flex;
`;

export const StyledAssignWatcherTagContainer = styled(motion(Chip))<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    height: 35px;
    border-radius: 14px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${(p) => p.$themeColor.primaryReverseBackdropColor};
    margin: 2px;
    border-color: ${(p) => p.$themeColor.doxleColor} !important;
  }
`;

export const StyledRFIFormButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const StyledRFIButton = styled(Button)<{
  $doxleFont: DoxleFont;
  $bgColor: string;
  $textColor: string;
}>`
  && {
    min-width: 80px;
    border-radius: 4px;
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${(p) => p.$textColor};
    background-color: ${(p) => p.$bgColor};
    margin: 8px;
    elevation: 4;
    box-shadow: 0px 0px 4px grey;
  }
  &:hover {
    background-color: ${(p) => p.$bgColor} !important;
    opacity: 0.9;
    transform: translateY(-5px);
    transition: 0.4s;
  }
`;
export const StyledErrorHelperText = styled(motion(FormHelperText))<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${(p) => p.$themeColor.errorColor};
    margin: 4px;
  }
`;
export const StyledEventScreen = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.$themeColor.primaryBackdropColor};
`;
export const StyledRFIListSkeletonContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledRFIListItemContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  width: calc(100% - 28px);
  // background-color: ${(p) => p.$themeColor.primaryContainerColor};
  min-width: 444px;
  border-radius: 8px;
  padding: 8px 14px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: visible;
`;
export const StyledRFIItemTitleSetion = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  width: 100%;

  display: flex;
  height: 35px;
  justify-content: flex-start;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.doxleColor};
  border-bottom: 1px solid ${(p) => p.$themeColor.primaryDividerColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const StyledParticipantsInfoSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px;
`;
export const StyledParticipantInfoText = styled.span<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.primaryFontColor};
`;
export const StyledBallInCourtUser = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  padding: 0px 8px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.primaryReverseFontColor};
  border-radius: 20px;
  background-color: ${(p) => p.$themeColor.doxleColor};
`;
export const StyledRFIItemDescriptionSection = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.errorColor};
  max-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 4px 0px;
`;
export const StyledRFITimestampAndCommentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0px;
`;
export const StyledRFITimestampText = styled.span<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.primaryFontColor};
  opacity: 0.4;
`;
export const StyledLatestCommentItemContainer = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  flex: 1;
  display: flex;
  padding-right: 8px;

  overflow: visible;

  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const StyledCommentAuthorTag = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  display: flex;
  padding: 2px 8px;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${(p) => p.$themeColor.doxleColor};
  border-radius: 30px;
  border: 1px solid ${(p) => p.$themeColor.doxleColor};
  box-shadow: 1px 4px 4px ${(p) => p.$themeColor.primaryBoxShadowColor};
  margin-right: 4px;
`;
export const StyledCommentContentText = styled.span<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${(p) => p.$themeColor.primaryFontColor};
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(100% - 60px);
  overflow: hidden;
`;
export const StyledRFIListTopMenuSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;
export const StyledAddRFIIconButton = styled(Button)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  && {
    background-color: ${(p) => p.$themeColor.doxleColor};
    font-family: ${(p) => p.$doxleFont.primaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${(p) => p.$themeColor.primaryReverseFontColor};
    border-radius: 8px;
  }
  &:hover {
    background-color: ${(p) => p.$themeColor.doxleColor} !important;
    transform: translateY(-5px) scale(1.1);
    opacity: 0.9;
    transition: 0.4s;
  }
`;

export const StyledRFIListContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const StyledContactOptionContainer = styled(motion.div)<{
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
  border-bottom: 1px solid ${(p) => p.$themeColor.primaryDividerColor};
`;
export const StyledRFIDetailSection = styled(motion.div)`
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 10;
`;

export const RFIBottomHalfContainer = styled.div<{
  $marginTop: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${(p) => p.$marginTop};
`;

export const RFIBottomHalfBox = styled.div<{
  $textColor: string;
  $boxColor: string;
}>`
  display: flex;
  background: ${(p) => p.$boxColor};
  color: ${(p) => p.$textColor};
  border-radius: 0px;
  border: 0px !important;
  height: 100%;
  padding: 22px 54px 22px 17px;
`;
export const RFIAutoCompleteContainer = styled.div`
  min-width: 800px;
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RFIAutoCompleteIndividualBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const RFIAutoComplete = styled(motion(Autocomplete))<{
  $textColor: string;
  $boxColor: string;
}>`
  && {
    display: flex;
    background: ${(p) => p.$boxColor};
  }
  & .MuiOutlinedInput-root {
    border-radius: 0px;
    height: 44px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 0px !important;
  }
  & .MuiOutlinedInput-input {
    color: ${(p) => p.$textColor};
  }
  & .MuiAutocomplete-input {
    padding: 0px !important;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    margin-left: 5px;
  }
`;

export const RFIAutoCompleteDiv = styled(TextField)``;

export const RFILocalizationProvider = styled(LocalizationProvider)`
  && {
  }
`;

export const RFIDateDemoContainer = styled(DemoContainer)`
  && {
    padding-top: 0px;
  }
`;

export const RFIDatePicker = styled(MobileDatePicker)`
  & .MuiOutlinedInput-root {
    border-radius: 0px;
    width: 100%;
    height: 44px;
    background: white;
    padding-top: 0px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 0px !important;
  }
  & .MuiOutlinedInput-input {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
  }
`;
export const StyledRFITitleText = styled(Typography)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  &.MuiTypography-root {
    font-family: ${(p) => p.$doxleFont.secondaryFont};
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    line-height: 65px;
    letter-spacing: 0.05em;
    color: ${(p) => p.$themeColor.primaryFontColor};
  }
`;

export const StyledRFISubTitleText = styled(Typography)<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  &.MuiTypography-root {
    font-family: ${(p) => p.$doxleFont.secondaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: ${(p) => p.$themeColor.primaryFontColor};
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

export const StyledRFIDetailLabelText = styled(Typography)<{
  $fontSize: `${number}px`;
  $lineHeight: `${number}px`;
  $paddingLeft: `${number}px`;
  $paddingRight: `${number}px`;
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  &.MuiTypography-root {
    font-family: ${(p) => p.$doxleFont.secondaryFont};
    font-style: normal;
    font-weight: 400;
    font-size: ${(p) => p.$fontSize};
    line-height: ${(p) => p.$lineHeight};
    paddingright: ${(p) => p.$paddingRight};
    letter-spacing: 0.05em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${(p) => p.$themeColor.primaryFontColor};
  }
`;

export const RFIWatchersContentDiv = styled.div`
  width: 128px;
  height: 27px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
  margin-right: 22px;
`;
