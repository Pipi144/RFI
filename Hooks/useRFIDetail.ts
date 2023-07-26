import { useMemo, useState } from "react";
import { RFI } from "../Models/rfi";
import { Company } from "../../Models/company";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import { useRFIStore } from "../Store/useRFIStore";
import { shallow } from "zustand/shallow";
import RFIQueryAPI, { UpdateRFIQueryBody } from "../QueryAPI/rfiQueryAPI";
import { User } from "../../Models/user";
import { Contact } from "../../Models/addressBook";
import {
  checkChangesRFI,
  getRFIPartiesInformation,
} from "../Content/RFIDetail/RFIDetailHelperFunctions";
type Props = {
  rfiItem: RFI;
  handleCloseRFIDetailScreen?: () => void;
  setSelectedRFI?: React.Dispatch<React.SetStateAction<RFI | undefined>>;
  fullControl: boolean;
  companyDetail?: Company | undefined;
  extractedRfiLinkId?: string; //! FOR HANDLING RFI REQUEST PAGE
};

interface RFIDetail {
  edittedRFI: RFI;
  rfiChanges: UpdateRFIQueryBody | undefined;
  handleClickSaveRFIButton: () => void;
  handleClickDeleteButton: () => void;
  setEdittedRFI: React.Dispatch<React.SetStateAction<RFI>>;
  watcherList: Contact[];
  authorUser: User | undefined;
  toContact: Contact | undefined;
  ballInCourtUser: Contact | undefined;
  partyInfo: Contact[];
  showConfirmDelete: boolean;
  setShowConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deleteRFIMutateFunction: (rfiId: string) => void;
  isDeletingRFI: boolean;
}
export const useRFIDetail = ({
  rfiItem,
  handleCloseRFIDetailScreen,
  setSelectedRFI,
  fullControl,
  companyDetail,
  extractedRfiLinkId,
}: Props): RFIDetail => {
  const [edittedRFI, setEdittedRFI] = useState<RFI>({ ...rfiItem });
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const { accessToken } = useDoxleAuthStore((state) => ({
    accessToken: state.accessToken,
  }));
  const { company } = useDoxleCurrentContextStore((state) => ({
    company: state.currentCompany,
  }));
  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );
  const { filterRFIListQuery } = useRFIStore(
    (state) => ({
      filterRFIListQuery: state.filterRFIListQuery,
    }),
    shallow
  );

  const onSuccessDeleteCb = () => {
    if (handleCloseRFIDetailScreen) handleCloseRFIDetailScreen();
  };
  const deleteRfiQuery = RFIQueryAPI.useDeleteRFIQuery({
    showNotification,
    company,
    accessToken,
    filter: filterRFIListQuery,
    onSuccessCb: onSuccessDeleteCb,
  });

  const notifyBallInCourtQuery = RFIQueryAPI.useNotifyBallInCourtQuery({
    showNotification,
    company: fullControl ? company : companyDetail,
    accessToken,
  });
  const onUpdateSuccessCb = (updatedRFI: RFI) => {
    if (updatedRFI) {
      if (setSelectedRFI) setSelectedRFI({ ...updatedRFI });
      setEdittedRFI({ ...updatedRFI });
      if (extractedRfiLinkId) notifyBallInCourtQuery.mutate(updatedRFI.rfiPk);
    }
  };

  const updateRfiQuery = RFIQueryAPI.useUpdateRFIQuery({
    showNotification,
    company: fullControl ? company : companyDetail,
    accessToken,
    filter: fullControl ? filterRFIListQuery : {},
    onSuccessCb: onUpdateSuccessCb,
  });

  const authorUser: User | undefined = useMemo(
    () =>
      edittedRFI.creatorContact
        ? (edittedRFI.creatorContact as User)
        : undefined,
    [edittedRFI.creatorContact]
  );

  const toContact: Contact | undefined = useMemo(
    () => (edittedRFI.toContactJson ? edittedRFI.toContactJson : undefined),
    [edittedRFI.toContactJson]
  );
  const ballInCourtUser: Contact | undefined = useMemo(
    () => (edittedRFI.ballInCourtJson ? edittedRFI.ballInCourtJson : undefined),
    [edittedRFI.ballInCourtJson]
  );
  const watcherList: Contact[] = useMemo(
    () => edittedRFI.watchersJson || [],
    [edittedRFI.watchersJson]
  );

  const partyInfo: Contact[] = getRFIPartiesInformation(edittedRFI);
  const rfiChanges: UpdateRFIQueryBody | undefined = useMemo(
    () => checkChangesRFI({ originalRFI: rfiItem, edittedRFI: edittedRFI }),
    [edittedRFI, rfiItem]
  );
  const handleClickDeleteButton = () => {
    setShowConfirmDelete(true);
  };

  const handleClickSaveRFIButton = () => {
    if (rfiChanges)
      updateRfiQuery.mutate({
        rfiItem: edittedRFI,
        updateBody: rfiChanges,
        rfiLink: extractedRfiLinkId,
      });
  };

  return {
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
    deleteRFIMutateFunction: deleteRfiQuery.mutate,
    isDeletingRFI: deleteRfiQuery.isLoading,
  };
};
