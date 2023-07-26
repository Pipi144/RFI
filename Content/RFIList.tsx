import React from "react";
import {
  StyledAddRFIIconButton,
  StyledRFIDetailSection,
  StyledRFIListContainer,
  StyledRFIListScroller,
  StyledRFIListTopMenuSection,
} from "./StyledComponentRFI";

import { Virtuoso } from "react-virtuoso";

import RFIListItem from "./RFIListItem";
import { AnimatePresence } from "framer-motion";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import AddRFIForm from "./AddRFIForm";

import { useRFIList } from "../Hooks/useRFIList";
import DoxleEmptyPlaceHolder from "../../DoxleDesignPattern/DoxleEmptyPlaceHolder/DoxleEmptyPlaceHolder";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
import DoxleListSkeleton from "../../DoxleDesignPattern/DoxleSkeleton/DoxleListSkeleton";
import RFIEmptyScreen from "./RFIEmptyScreen";
import RFIDetail from "./RFIDetail/RFIDetail";
import ViewQuiltSharpIcon from "@mui/icons-material/ViewQuiltSharp";
import DoxleIconButton from "../../DoxleDesignPattern/DoxleButtons/DoxleIconButton";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
import RFIListTableView from "./RFIListTableView";
import DoxleGridLayout from "../../DoxleDesignPattern/DoxleLayout/DoxleGridLayout/DoxleGridLayout";
import RFIGridItem from "./RFIGridItem";
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
    handleSelectRFIView,
    rfiListView,
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
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            marginTop: 14,
            marginBottom: 14,
          }}
        >
          <DoxleListSkeleton
            numOfRows={14}
            skeletonType="rfiRow"
            containerWidthInRatio="100%"
            containerHeightInRatio="100%"
          />
        </div>
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
                <DoxleIconButton
                  iconSource={
                    <TableRowsSharpIcon
                      htmlColor={doxleThemeColor.primaryFontColor}
                      sx={{ fontSize: 20 }}
                    />
                  }
                  buttonSize={30}
                  bgColor={doxleThemeColor.primaryContainerColor}
                  buttonWrapperStyle={{
                    marginRight: 4,
                    border: `1px solid ${doxleThemeColor.doxleColor}`,
                  }}
                  onClick={() => handleSelectRFIView("table")}
                />
                <DoxleIconButton
                  iconSource={
                    <ViewQuiltSharpIcon
                      htmlColor={doxleThemeColor.primaryFontColor}
                      sx={{ fontSize: 20 }}
                    />
                  }
                  buttonSize={30}
                  bgColor={doxleThemeColor.primaryContainerColor}
                  buttonWrapperStyle={{
                    border: `1px solid ${doxleThemeColor.doxleColor}`,
                    marginRight: 4,
                  }}
                  onClick={() => handleSelectRFIView("grid")}
                />

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

              {rfiListView === "table" ? (
                <RFIListTableView
                  rfiList={rfiList}
                  handleClickRFIItem={handleClickRFIItem}
                />
              ) : (
                <DoxleGridLayout
                  data={rfiList}
                  renderItem={(item, index) => <RFIGridItem rfiItem={item} />}
                />
              )}

              <AnimatePresence>
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
              </AnimatePresence>
            </StyledRFIListContainer>
          ) : (
            <RFIEmptyScreen />
          )}

          <AddRFIForm
            setOpenForm={setShowAddRFIForm}
            openForm={showAddRFIForm}
          />
        </>
      )}
    </>
  );
};

export default React.memo(RFIList);
