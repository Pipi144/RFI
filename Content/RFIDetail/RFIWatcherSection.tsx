import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { User } from "../../../Models/user";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {
  StyledAssignWatcherIconButton,
  StyledContactListScroller,
  StyledRFIWacherSectionContainer,
  StyledRFIWatcherList,
  StyledRFIWatcherTag,
  StyledSearchContactTextField,
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
import DoxleEmptyPlaceHolder from "../../../DoxleDesignPattern/DoxleEmptyPlaceHolder/DoxleEmptyPlaceHolder";
import DoxleTextField from "../../../DoxleDesignPattern/DoxleTextField/DoxleTextField";
import ListLoadingMore from "../../../Utilities/Lottie/ListLoadingMore";
import DoxleListSkeleton from "../../../DoxleDesignPattern/DoxleSkeleton/DoxleListSkeleton";

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
    contactList,
    isFetchingContactList,
    isSuccessFetchingContactList,
    isErrorFetchingContactList,
    handleSearchAssigneeTextChange,
    hasNextPageContact,
    handleFetchNextPage,
    assigneeSearchText,
    isFetchingNextPage,
  } = useRFIWatcherSection({
    edittedRFI,
    setEdittedRFI,
    fullControl,
    watcherList,
  });
  const searchAssignTextfieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchAssignTextfieldRef.current)
      searchAssignTextfieldRef.current.focus();
  }, [showUserListDropdown]);

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
                  <StyledSearchContactTextField
                    $themeColor={doxleThemeColor}
                    $doxleFont={doxleFont}
                    variant="standard"
                    placeholder="Search Contact..."
                    value={assigneeSearchText}
                    onChange={handleSearchAssigneeTextChange}
                    inputRef={searchAssignTextfieldRef}
                  />
                  {isSuccessFetchingContactList && (
                    <Virtuoso
                      style={{
                        flex: 1,
                        width: "100%",
                        paddingBottom: 20,
                      }}
                      data={contactList}
                      components={{
                        EmptyPlaceholder: React.forwardRef((props, ref) => (
                          <DoxleEmptyPlaceHolder
                            {...props}
                            headTitleText="No Contacts"
                            subTitleText=""
                            containerHeightRatio="100%"
                            containerWidthRatio="100%"
                            headTitleTextStyle={{ fontSize: "2.8rem" }}
                          />
                        )),
                        Scroller: React.forwardRef((props, ref) => (
                          <StyledContactListScroller
                            style={{
                              ...props.style,
                              overflow: "visible",
                            }}
                            ref={ref}
                            {...props}
                          />
                        )),
                      }}
                      itemContent={(index, item) => (
                        <StyledUserListItem
                          $themeColor={doxleThemeColor}
                          $doxleFont={doxleFont}
                          key={`userItem#${item.contactId}`}
                          variants={userListItemVariants}
                          initial="initial"
                          animate={
                            isUserSelected(item) ? "selected" : "initial"
                          }
                          whileHover="hovering"
                          onClick={(
                            event: React.MouseEvent<HTMLDivElement>
                          ) => {
                            event.stopPropagation();
                            handleClickUserItem(item);
                          }}
                        >
                          {item.firstName} {item.lastName}
                        </StyledUserListItem>
                      )}
                      endReached={() => {
                        if (hasNextPageContact) {
                          handleFetchNextPage();
                        }
                      }}
                      atBottomThreshold={0.01}
                    />
                  )}
                  {isErrorFetchingContactList && (
                    <DoxleEmptyPlaceHolder
                      containerStyle={{ flex: 1 }}
                      headTitleText="Something Wrong!"
                      headTitleTextStyle={{ fontSize: "2.8rem" }}
                    />
                  )}

                  {isFetchingNextPage && (
                    <ListLoadingMore
                      containerStyle={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 5,
                      }}
                      animationSize={60}
                    />
                  )}

                  {isFetchingContactList && (
                    <DoxleListSkeleton
                      skeletonType="comment"
                      containerStyle={{
                        flex: 1,
                        width: "calc(100% - 16px)",
                        padding: "4px 8px",
                      }}
                    />
                  )}
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
