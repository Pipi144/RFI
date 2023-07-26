import { Contact } from "../../../Models/addressBook";
import { RFI } from "../../Models/rfi";
import { UpdateRFIQueryBody } from "../../QueryAPI/rfiQueryAPI";

export const checkChangesRFI = (props: {
  originalRFI: RFI;
  edittedRFI: RFI;
}) => {
  const { originalRFI, edittedRFI } = props;
  let updateBody: UpdateRFIQueryBody = {};

  if (originalRFI.ballInCourt !== edittedRFI.ballInCourt)
    updateBody.ballInCourt = edittedRFI.ballInCourt;
  if (edittedRFI.watchers.length !== originalRFI.watchers.length)
    updateBody.watchers = edittedRFI.watchers;
  else {
    let isDifferent = false;
    for (const watcherId of edittedRFI.watchers) {
      if (
        !originalRFI.watchers.find((oriWatcherId) => watcherId === oriWatcherId)
      ) {
        isDifferent = true;
        break;
      }
    }
    if (isDifferent) updateBody.watchers = edittedRFI.watchers;
  }

  if (Object.keys(updateBody).length > 0) return updateBody;
  else return undefined;
};

export const getRFIPartiesInformation = (rfi: RFI): Contact[] => {
  const toContact: Contact | undefined = rfi.toContactJson ?? undefined;
  const ballInCourtUser: Contact | undefined = rfi.ballInCourtJson ?? undefined;
  const watcherList: Contact[] = rfi.watchersJson ?? [];
  let partyInfo: Contact[] = [];

  if (toContact) partyInfo.push(toContact);
  if (ballInCourtUser) {
    if (toContact && toContact.contactId !== ballInCourtUser.contactId)
      partyInfo.push(ballInCourtUser);
  }

  watcherList.map((watcher) => {
    if (!partyInfo.filter((party) => party.contactId === watcher.contactId)[0])
      partyInfo.push(watcher);
  });
  return partyInfo;
};
