import React from "react";
import {
  StyledRFIBackBtn,
  StyledRFIDeleteEventScreen,
  StyledRFIDetailContainer,
  StyledRFIDetailContentRow,
  StyledRFIDetailTitleSection,
  StyledRFIEditButton,
  StyledRFIQuestionContentView,
  StyledStyledRFIScreenTitleText,
} from "./StyledComponentRFIDetail";

import RFIWatcherSection from "./RFIWatcherSection";

import RFICommentView from "./RFICommentView";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import { Company } from "../../../Models/company";

import { RFI } from "../../Models/rfi";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import { useRFIDetail } from "../../Hooks/useRFIDetail";
import { formatDate } from "../../../Utilities/FunctionUtilities";
import { StyledRFIDetailLabelText } from "../StyledComponentRFI";
import DeleteItemLoadingScreen from "../../../Utilities/Lottie/DeleteItemLoadingScreen";
import RFIDetailField from "../RFICommonContent/RFIDetailField";
import RFIBallInCourtField from "../RFICommonContent/RFIBallInCourtField";
import DoxleDialogHelper from "../../../DoxleDesignPattern/DoxleDialogHelper/DoxleDialogHelper";

type Props = {
  rfiItem: RFI;
  handleCloseRFIDetailScreen?: () => void;
  setSelectedRFI?: React.Dispatch<React.SetStateAction<RFI | undefined>>;
  fullControl: boolean;
  companyDetail?: Company | undefined;
  extractedRfiLinkId?: string; //! FOR HANDLING RFI REQUEST PAGE
};

const RFIDetail = ({
  rfiItem,
  handleCloseRFIDetailScreen,
  setSelectedRFI,
  fullControl,
  companyDetail,
  extractedRfiLinkId,
}: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const {
    edittedRFI,
    rfiChanges,
    handleClickSaveRFIButton,
    handleClickDeleteButton,
    setEdittedRFI,
    watcherList,
    authorUser,
    toContact,
    ballInCourtUser,
    partyInfo,
    showConfirmDelete,
    setShowConfirmDelete,
    deleteRFIMutateFunction,
    isDeletingRFI,
  } = useRFIDetail({
    rfiItem,
    handleCloseRFIDetailScreen,
    setSelectedRFI,
    fullControl,
    companyDetail,
    extractedRfiLinkId,
  });

  return (
    <>
      <StyledRFIDetailContainer $themeColor={doxleThemeColor}>
        <StyledRFIDetailTitleSection
          $themeColor={doxleThemeColor}
          $doxleFont={doxleFont}
          fullControl
        >
          {fullControl && (
            <StyledRFIBackBtn onClick={handleCloseRFIDetailScreen}>
              <KeyboardReturnIcon
                htmlColor={doxleThemeColor.doxleColor}
                fontSize="large"
              />
            </StyledRFIBackBtn>
          )}

          <StyledStyledRFIScreenTitleText
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            {edittedRFI.issueTitle}
          </StyledStyledRFIScreenTitleText>

          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <StyledRFIEditButton
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
              startIcon={<SaveIcon htmlColor={"white"} />}
              $bgColor={doxleThemeColor.doxleColor}
              disabled={!rfiChanges}
              onClick={handleClickSaveRFIButton}
            >
              Save
            </StyledRFIEditButton>

            {fullControl && (
              <StyledRFIEditButton
                $themeColor={doxleThemeColor}
                $doxleFont={doxleFont}
                startIcon={<DeleteIcon htmlColor={"white"} />}
                $bgColor={doxleThemeColor.errorColor}
                onClick={handleClickDeleteButton}
              >
                Delete
              </StyledRFIEditButton>
            )}
          </div>
        </StyledRFIDetailTitleSection>
        <RFIWatcherSection
          edittedRFI={edittedRFI}
          setEdittedRFI={setEdittedRFI}
          fullControl={fullControl}
          watcherList={watcherList}
        />

        <StyledRFIDetailContentRow>
          <RFIDetailField
            labelText="From"
            value={
              authorUser
                ? `${authorUser.firstName} ${authorUser.lastName}`
                : "Unknown User"
            }
          />

          <RFIDetailField
            labelText="To"
            value={
              toContact
                ? `${toContact.firstName} ${toContact.lastName}`
                : "Unknown Contact"
            }
          />
        </StyledRFIDetailContentRow>

        <StyledRFIDetailContentRow>
          <RFIDetailField
            labelText="Issue Date"
            value={formatDate(edittedRFI.issueDate as string, "dd.MM.yyyy")}
          />

          <RFIBallInCourtField
            ballInCourtUser={ballInCourtUser}
            setEdittedRFI={setEdittedRFI}
            fullControl={fullControl}
            partyInfo={partyInfo}
          />
        </StyledRFIDetailContentRow>

        <StyledRFIDetailContentRow
          style={{ flexDirection: "column", marginTop: 30 }}
        >
          <StyledRFIDetailLabelText
            $paddingLeft={"6px"}
            $paddingRight={"0px"}
            $fontSize={"16px"}
            $lineHeight={"19px"}
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            Question
          </StyledRFIDetailLabelText>
          <StyledRFIQuestionContentView
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            {edittedRFI.issueQuestion}
          </StyledRFIQuestionContentView>
        </StyledRFIDetailContentRow>

        <RFICommentView
          rfiItem={rfiItem}
          fullControl={fullControl}
          partyInfo={partyInfo}
          companyDetail={companyDetail}
        />
      </StyledRFIDetailContainer>

      <DoxleDialogHelper
        open={showConfirmDelete}
        onClose={() => setShowConfirmDelete(false)}
        title="Confirm Delete"
        description="All data belong to this RFI will be deleted permanently, do you want to proceed?"
        dialogButtons={[
          {
            buttonText: "Delete",
            buttonFunction: () => deleteRFIMutateFunction(rfiItem.rfiId),
          },
          {
            buttonText: "Cancel",
            buttonFunction: () => setShowConfirmDelete(false),
            buttonColor: doxleThemeColor.errorColor,
          },
        ]}
      />
      {isDeletingRFI && (
        <StyledRFIDeleteEventScreen $themeColor={doxleThemeColor}>
          <DeleteItemLoadingScreen loadingMessage="Deleting! Please Wait..." />
        </StyledRFIDeleteEventScreen>
      )}
    </>
  );
};

export default RFIDetail;
