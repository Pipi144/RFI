import React from "react";
import { RFI } from "../Models/rfi";
import {
  StyledRFIGridItem,
  StyledRFIGridItemTitleSection,
  StyledRFIGridItemToContactDisplay,
} from "./StyledComponentRFI";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
import DoxleStatus from "../../DoxleDesignPattern/DoxleStatus/DoxleStatus";
import { TRgbaFormat, editRgbaAlpha } from "../../Utilities/FunctionUtilities";

type Props = {
  rfiItem: RFI;
  handleClickRFIItem: (rfiItem: RFI) => void;
};

const RFIGridItem = ({ rfiItem, handleClickRFIItem }: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  return (
    <StyledRFIGridItem
      $themeColor={doxleThemeColor}
      initial={false}
      whileHover={{
        backgroundColor: editRgbaAlpha({
          rgbaColor: doxleThemeColor.doxleColor as TRgbaFormat,
          alpha: "0.6",
        }),
        transition: { duration: 0.4 },
      }}
      onClick={() => handleClickRFIItem(rfiItem)}
    >
      <StyledRFIGridItemTitleSection
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
      >
        <DoxleStatus
          statusColor={doxleThemeColor.doxleColor}
          size={14}
          style={{ marginRight: 4, marginTop: 4 }}
        />
        <span>{rfiItem.issueTitle}</span>
      </StyledRFIGridItemTitleSection>

      <StyledRFIGridItemToContactDisplay
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
      >
        to{" "}
        {rfiItem.toContactJson
          ? `${rfiItem.toContactJson.firstName} ${rfiItem.toContactJson.lastName}`
          : "Unknow User"}
      </StyledRFIGridItemToContactDisplay>
    </StyledRFIGridItem>
  );
};

export default RFIGridItem;
