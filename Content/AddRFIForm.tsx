import { FormControl, Modal } from "@mui/material";
import React, { useRef } from "react";
import {
  StyledAddRFIFormContainer,
  StyledAddRFIFormTopTitle,
  StyledBackdropAddRFIForm,
  StyledErrorHelperText,
  StyledEventScreen,
  StyledRFIAuthorFieldView,
  StyledRFIButton,
  StyledRFIFormButtonSection,
  StyledRFIFormContentSection,
  StyledRFIFormFieldView,
  StyledAddRFITextField,
} from "./StyledComponentRFI";

import { AnimatePresence } from "framer-motion";

import dayjs from "dayjs";

import { shallow } from "zustand/shallow";
import { useDoxleThemeStore } from "../../DoxleGeneralStore/useDoxleThemeStore";
import { NewRFI } from "../Models/rfi";
import { formatTISODate } from "../../Utilities/FunctionUtilities";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useRFIStore } from "../Store/useRFIStore";
import { useAddRFIForm } from "../Hooks/useAddRFIForm";
import DoxleContactAutocomplete from "../../DoxleDesignPattern/DoxleAutoComplete/DoxleContactAutocomplete";
import AddItemLoadingScreen from "../../Utilities/Lottie/AddItemLoadingScreen";
import { Contact } from "../../Models/addressBook";
import DoxleContactAutocompleteMultiple from "../../DoxleDesignPattern/DoxleAutoComplete/DoxleContactAutocompleteMultiple";
import RFIDatePicker from "./RFICommonContent/RFIDatePicker";

type Props = {
  openForm: boolean;
  setOpenForm: (open: boolean) => void;
};

const AddRFIForm = ({ openForm, setOpenForm }: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore(
    (state) => ({
      doxleThemeColor: state.doxleThemeColor,
      doxleFont: state.doxleFont,
    }),
    shallow
  );
  const {
    handleCloseForm,
    handleUpdateNewRFI,
    newRFI,
    handleToContactAutocompleteChange,
    handleRemoveToContactAutocomplete,
    ballInCourtUser,
    toContactUser,
    handleClickAddBtn,
    isAddingRFI,
    handleWatcherListChange,
  } = useAddRFIForm({
    setOpenForm,
  });
  const { user, accessToken } = useDoxleAuthStore((state) => ({
    user: state.user,
    accessToken: state.accessToken,
  }));
  const issueDescriptionInputRef = useRef<HTMLInputElement>(null);
  const issueTitleInputRef = useRef<HTMLInputElement>(null);
  //*** Animation ***
  const addRFIFormAnimatedVariants = {
    entering: {
      opacity: [0, 1],
      y: [20, 0],
      transition: {
        duration: 0.2,
      },
    },
    exiting: {
      opacity: [1, 0],
      y: [0, 20],
      transition: {
        duration: 0.2,
      },
    },
  };

  const errorHelperTextVariants = {
    entering: {
      x: [-5, 0],
      opacity: [0, 1],
      transition: {
        duration: 0.3,
      },
    },
    exiting: {
      x: [0, -5],
      opacity: [1, 0],
      transition: {
        duration: 0.3,
      },
    },
  };
  //************** */

  return (
    <Modal
      open={openForm}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "&&": {
          justifyContent: "center !important",
          alignItems: "center  !important",
          display: "flex",
        },
      }}
      hideBackdrop={true}
    >
      <>
        <StyledBackdropAddRFIForm
          $themeColor={doxleThemeColor}
          onClick={handleCloseForm}
        />

        <StyledAddRFIFormContainer
          $themeColor={doxleThemeColor}
          //   onClick={(event) => {
          //     event.preventDefault();
          //   }}
          variants={addRFIFormAnimatedVariants}
          initial={false}
          animate="entering"
          exit="exiting"
        >
          <StyledAddRFIFormTopTitle
            $themeColor={doxleThemeColor}
            $doxleFont={doxleFont}
          >
            Add RFI
          </StyledAddRFIFormTopTitle>

          <StyledRFIFormContentSection>
            <StyledRFIFormFieldView
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              <FormControl sx={{ width: "100%" }}>
                <StyledAddRFITextField
                  variant="standard"
                  $themeColor={doxleThemeColor}
                  $doxleFont={doxleFont}
                  label="Issue Title"
                  multiline
                  inputRef={issueTitleInputRef}
                  onChange={(
                    event: React.ChangeEvent<
                      HTMLInputElement | HTMLTextAreaElement
                    >
                  ) => {
                    if (issueTitleInputRef.current)
                      issueTitleInputRef.current.value = event.target.value;
                  }}
                  onBlur={() => {
                    if (issueTitleInputRef.current)
                      handleUpdateNewRFI({
                        key: "issueTitle",
                        value: issueTitleInputRef.current.value,
                      });
                  }}
                />
                <AnimatePresence>
                  {!newRFI.issueTitle && (
                    <StyledErrorHelperText
                      $themeColor={doxleThemeColor}
                      $doxleFont={doxleFont}
                      variants={errorHelperTextVariants}
                      initial={false}
                      animate="entering"
                      exit="exiting"
                    >
                      Please Fill up issue title
                    </StyledErrorHelperText>
                  )}
                </AnimatePresence>
              </FormControl>
            </StyledRFIFormFieldView>
            <StyledRFIFormFieldView
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              <FormControl sx={{ width: "100%" }}>
                <StyledAddRFITextField
                  variant="standard"
                  $themeColor={doxleThemeColor}
                  $doxleFont={doxleFont}
                  label="Issue Description"
                  multiline
                  inputRef={issueDescriptionInputRef}
                  onChange={(
                    event: React.ChangeEvent<
                      HTMLInputElement | HTMLTextAreaElement
                    >
                  ) => {
                    if (issueDescriptionInputRef.current)
                      issueDescriptionInputRef.current.value =
                        event.target.value;
                  }}
                  onBlur={() => {
                    if (issueDescriptionInputRef.current)
                      handleUpdateNewRFI({
                        key: "issueQuestion",
                        value: issueDescriptionInputRef.current.value,
                      });
                  }}
                />
                <AnimatePresence>
                  {!newRFI.issueQuestion && (
                    <StyledErrorHelperText
                      $themeColor={doxleThemeColor}
                      $doxleFont={doxleFont}
                      variants={errorHelperTextVariants}
                      initial={false}
                      animate="entering"
                      exit="exiting"
                    >
                      Please Fill up issue question
                    </StyledErrorHelperText>
                  )}
                </AnimatePresence>
              </FormControl>
            </StyledRFIFormFieldView>

            <StyledRFIFormFieldView
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              <StyledRFIAuthorFieldView>
                <StyledAddRFITextField
                  $themeColor={doxleThemeColor}
                  $doxleFont={doxleFont}
                  variant="standard"
                  label="From"
                  value={`${user?.firstName} ${user?.lastName}`}
                  contentEditable={false}
                />
              </StyledRFIAuthorFieldView>

              <DoxleContactAutocomplete
                autocompleteWrapperStyle={{
                  width: "40%",
                  height: "100%",
                  marginTop: "8px",
                }}
                currentValue={toContactUser}
                setNewContact={handleToContactAutocompleteChange}
                onRemoveValue={handleRemoveToContactAutocomplete}
                isError={Boolean(!toContactUser)}
                labelText="Assign To A User"
              />
            </StyledRFIFormFieldView>

            <StyledRFIFormFieldView
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              <RFIDatePicker
                value={dayjs(newRFI.issueDate)}
                onChange={(value: any) => {
                  handleUpdateNewRFI({
                    key: "issueDate",
                    value: formatTISODate((value as dayjs.Dayjs).toISOString()),
                  });
                }}
              />

              <FormControl style={{ width: "40%" }}>
                <StyledAddRFITextField
                  $themeColor={doxleThemeColor}
                  $doxleFont={doxleFont}
                  sx={{ color: doxleThemeColor.doxleColor }}
                  variant="standard"
                  label="Ball In Court"
                  value={
                    ballInCourtUser
                      ? `${ballInCourtUser.firstName} ${ballInCourtUser.lastName}`
                      : ""
                  }
                  contentEditable={false}
                />
              </FormControl>
            </StyledRFIFormFieldView>

            <StyledRFIFormFieldView
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              <RFIWatcherAssignView
                handleWatcherListChange={handleWatcherListChange}
                newRFI={newRFI}
              />
            </StyledRFIFormFieldView>
          </StyledRFIFormContentSection>
          <StyledRFIFormButtonSection>
            <StyledRFIButton
              $textColor={doxleThemeColor.primaryFontColor}
              $bgColor={doxleThemeColor.doxleColor}
              $doxleFont={doxleFont}
              onClick={handleClickAddBtn}
            >
              Add
            </StyledRFIButton>
            <StyledRFIButton
              $textColor={doxleThemeColor.primaryFontColor}
              $bgColor={doxleThemeColor.primaryContainerColor}
              $doxleFont={doxleFont}
              onClick={handleCloseForm}
            >
              Cancel
            </StyledRFIButton>
          </StyledRFIFormButtonSection>
          {isAddingRFI && (
            <StyledEventScreen $themeColor={doxleThemeColor}>
              <AddItemLoadingScreen loadingMessage="Adding Item! Please Wait..." />
            </StyledEventScreen>
          )}
        </StyledAddRFIFormContainer>
      </>
    </Modal>
  );
};

export default AddRFIForm;

const RFIWatcherAssignView = (props: {
  handleWatcherListChange: (value: Contact[]) => void;
  newRFI: NewRFI;
}) => {
  const { handleWatcherListChange, newRFI } = props;
  const { contactList } = useRFIStore(
    (state) => ({
      filterRFIListQuery: state.filterRFIListQuery,
      contactList: state.contactList,
    }),
    shallow
  );
  const watcherList: Contact[] = [];
  newRFI.watchers.forEach((id) => {
    const matchWatcher = contactList.find(
      (contact) => contact.contactId === id
    );
    if (matchWatcher) watcherList.push(matchWatcher);
  });
  return (
    <DoxleContactAutocompleteMultiple
      valueList={watcherList}
      setNewContact={handleWatcherListChange}
      autocompleteWrapperStyle={{ width: "100%" }}
      labelText="Assign Watchers"
    />
  );
};
