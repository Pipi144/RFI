import { useContext, useEffect, useRef, useState } from "react";

import {
  StyledRFILogoSection,
  StyledRFIMainContentSection,
  StyledRFIRootContainer,
  StyledRFISubTitleText,
  StyledRFITitleText,
  StyledRFITopBanner,
} from "./StyledComponentRFI";

import RFIList from "./RFIList";
import { useRFI } from "../Hooks/useRFI";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
import { shallow } from "zustand/shallow";
import { RFILogo } from "./RFIIcons";

type Props = {};

const RFIScreen = (props: Props) => {
  const [logoContainerWidth, setlogoContainerWidth] = useState<
    number | undefined
  >(undefined);
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore(
    (state) => ({
      doxleThemeColor: state.doxleThemeColor,
      doxleFont: state.doxleFont,
    }),
    shallow
  );
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoContainerRef.current)
      setlogoContainerWidth(
        logoContainerRef.current.getBoundingClientRect().width
      );
  }, [logoContainerRef.current]);

  const {} = useRFI();

  //$$$$$$$$$$$$$$$$$$$$ HANDLE ANIMATION $$$$$$$$$$$$$$$$$$$$
  const rootRFIAnimatedVariants = {
    entering: {
      opacity: [0, 1],
      y: [-10, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  return (
    <StyledRFIRootContainer
      $themeColor={doxleThemeColor}
      variants={rootRFIAnimatedVariants}
      initial={false}
      animate="entering"
    >
      <StyledRFILogoSection ref={logoContainerRef}>
        <RFILogo />
      </StyledRFILogoSection>
      {/* <RFIWholePageContainer> */}

      {logoContainerWidth && (
        <StyledRFIMainContentSection $paddingRight={`${logoContainerWidth}px`}>
          <StyledRFITopBanner>
            <StyledRFITitleText
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              RFI
            </StyledRFITitleText>
            <StyledRFISubTitleText
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              Communicate in a smart way not the hard way. Only one person can
              be accountable for one docket at a time using the RFI tool
            </StyledRFISubTitleText>
          </StyledRFITopBanner>
          <RFIList />
        </StyledRFIMainContentSection>
      )}

      {/* </RFIWholePageContainer> */}
    </StyledRFIRootContainer>
  );
};
export default RFIScreen;
