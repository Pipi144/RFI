import React from "react";
import { Contact } from "../../../Models/addressBook";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import { StyledRFIWatcherTag } from "../RFIDetail/StyledComponentRFIDetail";

type Props = {};

const RFIWatcherTag = React.memo((props: { watcher: Contact }) => {
  const { watcher } = props;
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const watcherTagAnimatedVariants = {
    entering: {
      y: [5, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.2,
      },
    },
    exiting: {
      x: [0, 5],
      opacity: [1, 0],
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <StyledRFIWatcherTag
      $themeColor={doxleThemeColor}
      $doxleFont={doxleFont}
      variants={watcherTagAnimatedVariants}
      initial={false}
      animate="entering"
      layout
    >
      {watcher.firstName} {watcher.lastName}
    </StyledRFIWatcherTag>
  );
});

export default RFIWatcherTag;
