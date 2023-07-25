import { useState } from "react";
import {
  StyledAddRFIButton,
  StyledRFIEmptyScreenContainer,
  StyledRFILottiesView,
} from "./StyledComponentRFI";
import animationData from "../../Utilities/Lottie/lotties/rfiScreenInitial.json";
import { useLottie } from "lottie-react";

import { AnimatePresence } from "framer-motion";
import AddRFIForm from "./AddRFIForm";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
type Props = {};

const RFIEmptyScreen = (props: Props) => {
  const [showAddRFIForm, setShowAddRFIForm] = useState<boolean>(false);
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(lottieOptions, {
    width: "100% !important",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  });

  const onClickAskQuestionBtn = () => {
    setShowAddRFIForm(true);
  };

  return (
    <StyledRFIEmptyScreenContainer>
      <StyledRFILottiesView>{View}</StyledRFILottiesView>

      <StyledAddRFIButton
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
        onClick={onClickAskQuestionBtn}
      >
        Ask Questions
      </StyledAddRFIButton>

      <AnimatePresence>
        <AddRFIForm openForm={showAddRFIForm} setOpenForm={setShowAddRFIForm} />
      </AnimatePresence>
    </StyledRFIEmptyScreenContainer>
  );
};

export default RFIEmptyScreen;
