import { useDoxleThemeStore } from "../../../../DoxleGeneralStore/useDoxleThemeStore";
import { Docket } from "../../../../Models/dockets";
import { RFIDocketIcon } from "../RFIDetailIcon";
import {
  StyledDocketHeaderIdNumberContainer,
  StyledDocketMenuContainer,
  StyledDocketMenuItemBtn,
  StyledDocketStatus,
  StyledRFIRequestPageDocketIdDisplayer,
  StyledRFIRequestPageHeaderContainer,
} from "./StyledComponentRFIRequestPage";

type Props = {
  docket: Docket | undefined;
};

const RFIRequestPageHeader = ({ docket }: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));

  //$$$$$$$$$$$$$$$$$$$$ HANDLE ANIMATION $$$$$$$$$$$$$$$$$$
  const docketMenuItemAnimatedVariants = {
    initial: {
      y: 0,
      scale: 1,
      backgroundColor: "#00000000",
      color: doxleThemeColor.primaryFontColor,
    },
    selected: {
      y: 0,
      scale: 1,
      backgroundColor: doxleThemeColor.doxleColor,
      color: doxleThemeColor.primaryReverseFontColor,
    },
    hover: {
      scale: 1.1,
      y: -5,
      backgroundColor: doxleThemeColor.primaryBoxShadowColor,
    },
  };

  //$$$$$$$$$$$$$$$$$$END OF HANDLE ANIMATION $$$$$$$$$$$$$$$$$$
  return (
    <StyledRFIRequestPageHeaderContainer
      $heightInPixel={55}
      $themecolor={doxleThemeColor}
    >
      <StyledRFIRequestPageDocketIdDisplayer>
        <RFIDocketIcon themeColor={doxleThemeColor} />
        <StyledDocketHeaderIdNumberContainer
          $themecolor={doxleThemeColor}
          $doxleFont={doxleFont}
        >
          Docket# {docket ? docket.docketId : "#Unknown#"}
          <StyledDocketStatus
            $statusColor={docket ? docket.statusColor : "grey"}
          />
        </StyledDocketHeaderIdNumberContainer>
      </StyledRFIRequestPageDocketIdDisplayer>

      <StyledDocketMenuContainer>
        <StyledDocketMenuItemBtn
          $selected={true}
          $themecolor={doxleThemeColor}
          $doxleFont={doxleFont}
          variants={docketMenuItemAnimatedVariants}
          initial="initial"
          whileHover="hover"
          animate={"selected"}
          transition={{
            selected: {
              type: "spring",
              stiffness: 500,
              duration: 0.4,
            },
            hover: { type: "spring", stiffness: 500, duration: 0.4 },
          }}
        >
          RFI
        </StyledDocketMenuItemBtn>
      </StyledDocketMenuContainer>
    </StyledRFIRequestPageHeaderContainer>
  );
};

export default RFIRequestPageHeader;
