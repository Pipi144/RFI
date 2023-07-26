import React from "react";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import {
  StyledRFIDetailField,
  StyledRFIDetailView,
} from "../RFIDetail/StyledComponentRFIDetail";
import { StyledRFIDetailLabelText } from "../StyledComponentRFI";

type Props = {};

const RFIDetailField = React.memo(
  (props: { labelText: string; value: string }) => {
    const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
      doxleThemeColor: state.doxleThemeColor,
      doxleFont: state.doxleFont,
    }));
    return (
      <StyledRFIDetailField $widthRatio="40%">
        <StyledRFIDetailLabelText
          $paddingLeft={"6px"}
          $paddingRight={"0px"}
          $fontSize={"16px"}
          $lineHeight={"19px"}
          $themeColor={doxleThemeColor}
          $doxleFont={doxleFont}
        >
          {props.labelText}
        </StyledRFIDetailLabelText>
        <StyledRFIDetailView
          $themeColor={doxleThemeColor}
          $doxleFont={doxleFont}
        >
          {props.value}
        </StyledRFIDetailView>
      </StyledRFIDetailField>
    );
  }
);

export default RFIDetailField;
