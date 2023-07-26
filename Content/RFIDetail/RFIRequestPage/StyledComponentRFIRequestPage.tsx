import { motion } from "framer-motion";
import styled from "styled-components";
import {
  DoxleFont,
  DoxleThemeColor,
} from "../../../../DoxleGeneralStore/useDoxleThemeStore";
import { Button } from "@mui/material";

export const StyledRFIRequestPageContainer = styled(motion.div)<{
  $themeColor: DoxleThemeColor;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(p) => p.$themeColor.primaryBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledRFIRequestPageContentBody = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: row;
  max-width: 1800px;
  min-width: 1200px;
`;
export const StyledRFIRequestDetailSection = styled.div<{
  $themeColor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  font-family: ${(p) => p.$doxleFont.primaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 45px;
  letter-spacing: 0.05em;
  color: ${(p) => p.$themeColor.primaryFontColor};
`;
export const StyledRFIRequestPageHeaderContainer = styled.div<{
  $heightInPixel: number;
  $themecolor: DoxleThemeColor;
}>`
  width: calc(100% - 8px);
  min-height: ${(p) => p.$heightInPixel}px;
  padding: 0 4px 0 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.$themecolor.primaryContainerColor};
`;
export const StyledRFIRequestPageDocketIdDisplayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;
export const StyledDocketHeaderIdNumberContainer = styled.div<{
  $themecolor: DoxleThemeColor;
  $doxleFont: DoxleFont;
}>`
  font-family: ${(p) => p.$doxleFont.secondaryFont};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: ${(p) => p.$themecolor.primaryFontColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const StyledDocketStatus = styled.div<{
  $statusColor: string;
}>`
  width: 14px;
  height: 23px;
  background-color: ${(p) => p.$statusColor};
  border-radius: 8px;
  margin: 0 4px 0 4px;
`;
export const StyledDocketMenuContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  padding-left: 50px;
`;
export const StyledDocketMenuItemBtn = styled(motion(Button))<{
  $themecolor: DoxleThemeColor;
  $selected: boolean;
  $doxleFont: DoxleFont;
}>`
  && {
    font-family: ${(p) => p.$doxleFont.primaryTitleFont};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.05em;
    min-width: 0 !important;
    padding: 4px 14px !important;
    margin: 0 4px;
    border-radius: 20px !important;
    color: ${(p) => p.$themecolor.primaryFontColor};

    text-transform: capitalize;
  }
`;
