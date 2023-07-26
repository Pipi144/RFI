import React, { useCallback, useMemo, useRef, useState } from "react";

import { User } from "../../../Models/user";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {
  StyledAssignWatcherIconButton,
  StyledRFIWacherSectionContainer,
  StyledRFIWatcherList,
  StyledRFIWatcherTag,
  StyledUserDropdownListContainer,
  StyledUserListItem,
} from "./StyledComponentRFIDetail";

import { AnimatePresence, LayoutGroup } from "framer-motion";
import { ClickAwayListener, Popover } from "@mui/material";
import { Virtuoso } from "react-virtuoso";
import { RFI } from "../../Models/rfi";
import { Contact } from "../../../Models/addressBook";
import { useRFIStore } from "../../Store/useRFIStore";
import { StyledRFIDetailLabelText } from "../StyledComponentRFI";
import RFIWatcherTag from "../RFICommonContent/RFIWatcherTag";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import {
  TRgbaFormat,
  editRgbaAlpha,
} from "../../../Utilities/FunctionUtilities";
import { useRFIWatcherSection } from "../../Hooks/useRFIWatcherSection";
import { shallow } from "zustand/shallow";

type Props = {
  edittedRFI: RFI;
  setEdittedRFI: React.Dispatch<React.SetStateAction<RFI>>;
  fullControl: boolean;
  watcherList: Contact[];
};

const RFIWatcherSection = ({
  edittedRFI,
  setEdittedRFI,
  fullControl,
  watcherList,
}: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));

  const {
    handleClickAssignWatcherBtn,
    showUserListDropdown,
    handleCloseUserList,
    isUserSelected,
    handleClickUserItem,
  } = useRFIWatcherSection({
    edittedRFI,
    setEdittedRFI,
    fullControl,
    watcherList,
  });
  const { contactList } = useRFIStore(
    (state) => ({
      contactList: state.contactList,
    }),
    shallow
  );
  //*Animation
  const userListItemVariants = {
    initial: {
      backgroundColor: doxleThemeColor.primaryContainerColor,
      color: doxleThemeColor.primaryFontColor,
    },
    selected: {
      color: doxleThemeColor.doxleColor,
    },
    hovering: {
      backgroundColor: editRgbaAlpha({
        rgbaColor: doxleThemeColor.doxleColor as TRgbaFormat,
        alpha: "0.4",
      }),
      color: doxleThemeColor.primaryReverseFontColor,
    },
  };
  const userListVariants = {
    entering: {
      y: [-10, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.2,
      },
    },
    exiting: {
      y: [0, -10],
      opacity: [1, 0],
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <StyledRFIWacherSectionContainer>
      <StyledRFIDetailLabelText
        $paddingLeft={"0px"}
        $paddingRight={"22px"}
        $fontSize={"16px"}
        $lineHeight={"19px"}
        $themeColor={doxleThemeColor}
        $doxleFont={doxleFont}
      >
        Watchers
      </StyledRFIDetailLabelText>

      <StyledRFIWatcherList>
        <AnimatePresence mode="popLayout">
          <LayoutGroup id={`rfiWatcherLayout#${edittedRFI.rfiPk}`}>
            {watcherList.length > 0 &&
              watcherList.map((watcher, index) => (
                <RFIWatcherTag
                  watcher={watcher}
                  key={`watcher#${watcher.contactId}`}
                />
              ))}
          </LayoutGroup>
        </AnimatePresence>
      </StyledRFIWatcherList>

      {fullControl && (
        <StyledAssignWatcherIconButton
          $themeColor={doxleThemeColor}
          size="small"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation();
            handleClickAssignWatcherBtn();
          }}
        >
          <AssignmentIndIcon htmlColor={doxleThemeColor.doxleColor} />

          <AnimatePresence>
            {showUserListDropdown && (
              <ClickAwayListener
                onClickAway={(event) => {
                  event.stopPropagation();
                  handleCloseUserList();
                }}
              >
                <StyledUserDropdownListContainer
                  $themeColor={doxleThemeColor}
                  variants={userListVariants}
                  initial={false}
                  animate="entering"
                  exit="exiting"
                >
                  <Virtuoso
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 8,
                    }}
                    data={contactList}
                    itemContent={(index, item) => (
                      <StyledUserListItem
                        $themeColor={doxleThemeColor}
                        $doxleFont={doxleFont}
                        key={`userItem#${item.contactId}`}
                        variants={userListItemVariants}
                        initial="initial"
                        animate={isUserSelected(item) ? "selected" : "initial"}
                        whileHover="hovering"
                        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                          event.stopPropagation();
                          handleClickUserItem(item);
                        }}
                      >
                        {item.firstName} {item.lastName}
                      </StyledUserListItem>
                    )}
                  />
                </StyledUserDropdownListContainer>
              </ClickAwayListener>
            )}
          </AnimatePresence>
        </StyledAssignWatcherIconButton>
      )}
    </StyledRFIWacherSectionContainer>
  );
};

export default RFIWatcherSection;
