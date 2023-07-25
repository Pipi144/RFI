import React from "react";
import {
  StyledAddRFIIconButton,
  StyledRFIListContainer,
  StyledRFIListTopMenuSection,
} from "./StyledComponentRFI";

import { Virtuoso } from "react-virtuoso";

import RFIListItem from "./RFIListItem";
import { AnimatePresence } from "framer-motion";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
// import AddRFIForm from "./AddRFIForm";

import { useRFIList } from "../Hooks/useRFIList";
import DoxleEmptyPlaceHolder from "../../DoxleDesignPattern/DoxleEmptyPlaceHolder/DoxleEmptyPlaceHolder";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
import DoxleListSkeleton from "../../DoxleDesignPattern/DoxleSkeleton/DoxleListSkeleton";
import RFIEmptyScreen from "./RFIEmptyScreen";

type Props = {};

const RFIList = ({}: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const {
    isFetchingRFIList,
    isErrorFetchingRFIList,
    isSuccessFetchingRFIList,
    rfiList,
    setShowAddRFIForm,
    showAddRFIForm,
    handleClickAddRFIBtn,
    handleClickRFIItem,
    selectedRFI,
    handleCloseRFIDetailScreen,
    setSelectedRFI,
  } = useRFIList();

  //*Animation
  const rfiDetailSectionVariants = {
    entering: {
      y: [10, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.4,
      },
    },
    exiting: {
      y: [0, 10],
      opacity: [1, 0],
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <>
      {isFetchingRFIList && (
        <DoxleListSkeleton numOfRows={14} skeletonType="rfiRow" />
      )}

      {isErrorFetchingRFIList && (
        <DoxleEmptyPlaceHolder
          containerBgColor="transparent"
          headTitleText="Something Wrong!"
          subTitleText="Your session might be expired, please reload page!"
        />
      )}

      {isSuccessFetchingRFIList && (
        <>
          {rfiList.length > 0 ? (
            <StyledRFIListContainer>
              <StyledRFIListTopMenuSection>
                <StyledAddRFIIconButton
                  $themeColor={doxleThemeColor}
                  $doxleFont={doxleFont}
                  onClick={handleClickAddRFIBtn}
                >
                  <NoteAddOutlinedIcon
                    htmlColor={doxleThemeColor.primaryReverseFontColor}
                  />
                  Add RFI
                </StyledAddRFIIconButton>
              </StyledRFIListTopMenuSection>
              <Virtuoso
                style={{
                  width: "100%",
                  flex: 1,
                  marginTop: 20,
                }}
                data={rfiList}
                itemContent={(index, item) => (
                  <AnimatePresence key={`${item.rfiPk}`}>
                    <RFIListItem
                      rfiItem={item}
                      handleClickRFIItem={handleClickRFIItem}
                    />
                  </AnimatePresence>
                )}
              />

              {/* <AnimatePresence>
                {selectedRFI && (
                  <StyledRFIDetailSection
                    variants={rfiDetailSectionVariants}
                    initial={false}
                    animate="entering"
                    exit="exiting"
                  >
                    <RFIDetail
                      rfiItem={selectedRFI}
                      handleCloseRFIDetailScreen={handleCloseRFIDetailScreen}
                      setSelectedRFI={setSelectedRFI}
                      fullControl={true}
                    />
                  </StyledRFIDetailSection>
                )}
              </AnimatePresence> */}
            </StyledRFIListContainer>
          ) : (
            <RFIEmptyScreen />
          )}

          {/* <AddRFIForm
            setOpenForm={setShowAddRFIForm}
            openForm={showAddRFIForm}
          /> */}
        </>
      )}
    </>
  );
};

export default React.memo(RFIList);
