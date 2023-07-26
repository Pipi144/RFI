import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyledRFIRequestDetailSection,
  StyledRFIRequestPageContainer,
  StyledRFIRequestPageContentBody,
} from "./StyledComponentRFIRequestPage";

import RFIRequestPageHeader from "./RFIRequestPageHeader";

import { enqueueSnackbar } from "notistack";
import { User } from "../../../../Models/user";

import { Docket } from "../../../../Models/dockets";

import RFIDetail from "../RFIDetail";
import { RFILinkExpiredIcon } from "../RFIDetailIcon";
import { Company } from "../../../../Models/company";

import { shallow } from "zustand/shallow";
import { useDoxleThemeStore } from "../../../../DoxleGeneralStore/useDoxleThemeStore";
import { useRFIRequestPage } from "../../../Hooks/useRFIRequestPage";
import {
  StyledRFILogoSection,
  StyledRFIMainContentSection,
  StyledRFISubTitleText,
  StyledRFITitleText,
  StyledRFITopBanner,
} from "../../StyledComponentRFI";
import { RFILogo } from "../../RFIIcons";

type Props = {};

const RFIRequestPage = (props: Props) => {
  const [logoContainerWidth, setlogoContainerWidth] = useState<
    number | undefined
  >(undefined);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (logoContainerRef.current)
      setlogoContainerWidth(
        logoContainerRef.current.getBoundingClientRect().width
      );
  }, [logoContainerRef.current]);
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));

  const { docketDetail, rfiDetail, companyDetail, extractedRfiLinkId } =
    useRFIRequestPage();
  //$$$$$$$$$$$$$$$$$$$$ HANDLE ANIMATION $$$$$$$$$$$$$$$$$$$$
  const rootRFIAnimatedVariants = {
    entering: {
      opacity: [0, 1],
      scale: [0, 1],
      transition: {
        duration: 5,
      },
    },
  };

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  return (
    <StyledRFIRequestPageContainer
      $themeColor={doxleThemeColor}
      variants={rootRFIAnimatedVariants}
      initial={false}
      animate="entering"
    >
      <RFIRequestPageHeader docket={docketDetail} />
      <StyledRFIRequestPageContentBody>
        <StyledRFILogoSection ref={logoContainerRef}>
          <RFILogo />
        </StyledRFILogoSection>

        {logoContainerWidth && (
          <StyledRFIMainContentSection
            $paddingRight={`${logoContainerWidth}px`}
          >
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

            <StyledRFIRequestDetailSection
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              {rfiDetail && (
                <RFIDetail
                  rfiItem={rfiDetail}
                  fullControl={false}
                  companyDetail={companyDetail}
                  extractedRfiLinkId={extractedRfiLinkId}
                />
              )}

              {!rfiDetail && (
                <>
                  <RFILinkExpiredIcon themeColor={doxleThemeColor} />
                  Something Wrong! Link might be expired
                </>
              )}
            </StyledRFIRequestDetailSection>
          </StyledRFIMainContentSection>
        )}
      </StyledRFIRequestPageContentBody>
    </StyledRFIRequestPageContainer>
  );
};

export default RFIRequestPage;
