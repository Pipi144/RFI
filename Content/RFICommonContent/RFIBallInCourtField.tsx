import React from "react";
import { Contact } from "../../../Models/addressBook";
import { RFI } from "../../Models/rfi";
import DoxleContactAutocomplete from "../../../DoxleDesignPattern/DoxleAutoComplete/DoxleContactAutocomplete";

type Props = {};

const RFIBallInCourtField = React.memo(
  (props: {
    ballInCourtUser: Contact | undefined;
    setEdittedRFI: React.Dispatch<React.SetStateAction<RFI>>;
    fullControl: boolean;
    partyInfo: Contact[];
  }) => {
    const { ballInCourtUser, setEdittedRFI, fullControl, partyInfo } = props;

    const handleChangeBallInCourt = (value: Contact) => {
      setEdittedRFI((prev) => ({ ...prev, ballInCourt: value.contactId }));
    };
    return (
      <DoxleContactAutocomplete
        overwrittenContactList={!fullControl ? partyInfo : undefined}
        currentValue={ballInCourtUser}
        setNewContact={handleChangeBallInCourt}
        labelText="Ball In Court"
        autocompleteWrapperStyle={{ width: "40%" }}
      />
    );
  }
);

export default RFIBallInCourtField;
