import { shallow } from "zustand/shallow";
import { useRFIStore } from "../Store/useRFIStore";
import { useDoxleAuthStore } from "../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../DoxleGeneralStore/useDoxleNotificationStore";
import { useEditDocketSideScreenStore } from "../../CoreContent/EditDocketSideScreen/EditDocketSideScreenStore/useEditDocketSideScreenStore";
import { NewRFI } from "../Models/rfi";
import { formatTISODate } from "../../Utilities/FunctionUtilities";
import { useMemo, useState } from "react";
import { Contact } from "../../Models/addressBook";
import { TISODate } from "../../Models/dateFormat";
import RFIQueryAPI from "../QueryAPI/rfiQueryAPI";
interface Props {
  setOpenForm: (open: boolean) => void;
}
interface AddRFIForm {
  handleCloseForm: () => void;
  handleUpdateNewRFI: (props: {
    key: keyof NewRFI;
    value: TISODate | string;
    watcherList?: string[];
  }) => void;
  newRFI: NewRFI;
  handleToContactAutocompleteChange: (value: Contact) => void;
  handleRemoveToContactAutocomplete: () => void;
  ballInCourtUser: Contact | undefined;
  toContactUser: Contact | undefined;
  handleClickAddBtn: () => void;
  isAddingRFI: boolean;
  handleWatcherListChange: (value: Contact[]) => void;
}
export const useAddRFIForm = ({ setOpenForm }: Props): AddRFIForm => {
  const { edittedDocket } = useEditDocketSideScreenStore(
    (state) => ({
      edittedDocket: state.edittedDocket,
    }),
    shallow
  );
  const company = useDoxleCurrentContextStore((state) => state.currentCompany);
  const initialRFI: NewRFI = useMemo(
    () => ({
      issueDate: formatTISODate(new Date()),
      issueQuestion: "",
      issueTitle: "",
      company: company?.companyId as string,
      project: edittedDocket?.project ?? null,
      docket: edittedDocket?.docketPk ?? "",
      ballInCourt: "",
      toContact: "",
      watchers: [],
    }),
    [edittedDocket, company]
  );
  const [newRFI, setNewRFI] = useState<NewRFI>({ ...initialRFI });
  const { filterRFIListQuery, contactList } = useRFIStore(
    (state) => ({
      filterRFIListQuery: state.filterRFIListQuery,
      contactList: state.contactList,
    }),
    shallow
  );
  const { user, accessToken } = useDoxleAuthStore((state) => ({
    user: state.user,
    accessToken: state.accessToken,
  }));

  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );

  //handle close form
  const handleCloseForm = () => {
    setOpenForm(false);
    setNewRFI({ ...initialRFI });
  };

  const ballInCourtUser: Contact | undefined = useMemo(() => {
    return contactList.length > 0
      ? contactList.filter(
          (contact) => newRFI.ballInCourt === contact.contactId
        )[0]
      : undefined;
  }, [contactList, newRFI]);
  const toContactUser: Contact | undefined = useMemo(() => {
    return contactList.length > 0
      ? contactList.filter(
          (contact) => newRFI.toContact === contact.contactId
        )[0]
      : undefined;
  }, [contactList, newRFI]);

  const handleUpdateNewRFI = (props: {
    key: keyof NewRFI;
    value: TISODate | string;
    watcherList?: string[];
  }) => {
    const { key, value, watcherList } = props;
    if (key === "issueTitle")
      setNewRFI((prev) => ({ ...prev, issueTitle: value }));
    if (key === "issueQuestion")
      setNewRFI((prev) => ({ ...prev, issueQuestion: value }));
    if (key === "ballInCourt")
      setNewRFI((prev) => ({ ...prev, ballInCourt: value }));
    if (key === "toContact")
      setNewRFI((prev) => ({ ...prev, toContact: value }));
    if (key === "issueDate")
      setNewRFI((prev) => ({ ...prev, issueDate: value as TISODate }));
    if (key === "watchers" && watcherList)
      setNewRFI((prev) => ({ ...prev, watchers: watcherList }));
  };
  const handleToContactAutocompleteChange = (value: Contact) => {
    handleUpdateNewRFI({
      value: (value as Contact).contactId as string,
      key: "toContact",
    });
    handleUpdateNewRFI({
      value: (value as Contact).contactId as string,
      key: "ballInCourt",
    });
  };
  const handleRemoveToContactAutocomplete = () => {
    handleUpdateNewRFI({
      value: "",
      key: "toContact",
    });

    handleUpdateNewRFI({
      value: "",
      key: "ballInCourt",
    });
  };

  const handleWatcherListChange = (value: Contact[]) => {
    const idList = (value as Contact[]).map((user) => user.contactId as string);
    handleUpdateNewRFI({
      key: "watchers",
      watcherList: idList,
      value: "",
    });
  };
  //*** SEND RFI EMAIL Query *** */
  const sendEmailRFIQuery = RFIQueryAPI.useSendRFIEmailQuery({
    company,
    accessToken,
    showNotification,
  });
  //*** END SEND RFI EMAIL *** */

  //*** ADD RFI Query *** */
  const onAddSuccessCb = (rfiId: string) => {
    handleCloseForm();
    if (rfiId) sendEmailRFIQuery.mutate(rfiId);
  };
  const addRFIQuery = RFIQueryAPI.useAddRFIList({
    company,
    accessToken,
    showNotification,
    filter: filterRFIListQuery,
    onSuccessCb: onAddSuccessCb,
  });
  //*** END ADD RFI *** */

  const handleClickAddBtn = () => {
    if (
      newRFI.issueDate &&
      newRFI.ballInCourt &&
      newRFI.toContact &&
      newRFI.issueQuestion &&
      newRFI.issueTitle
    )
      addRFIQuery.mutate(newRFI);
    else showNotification("Please Fill In All Value", "error");
  };
  return {
    handleCloseForm,
    handleUpdateNewRFI,
    newRFI,
    handleToContactAutocompleteChange,
    handleRemoveToContactAutocomplete,
    ballInCourtUser,
    toContactUser,
    handleClickAddBtn,
    isAddingRFI: addRFIQuery.isLoading,
    handleWatcherListChange,
  };
};
