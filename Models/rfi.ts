import { Contact } from "../../Models/addressBook";
import { TISODate, TISODateTime } from "../../Models/dateFormat";
import { User } from "../../Models/user";

export interface RFI {
  rfiPk: string;
  rfiId: string;
  issueDate: TISODate;
  issueQuestion: string;
  issueTitle: string;
  creator?: string | User;
  creatorContact?: Contact;
  createdOn?: TISODate;
  company: string;
  project: string | null;
  docket: string;
  ballInCourt: string;
  ballInCourtJson?: Contact;
  toContact: string;
  toContactJson?: Contact;
  watchers: string[];
  watchersJson?: Contact[];
}

export interface NewRFI {
  issueDate: TISODate;
  issueQuestion: string;
  issueTitle: string;
  company: string;
  project: string | null;
  docket: string;
  ballInCourt: string;
  toContact: string;
  watchers: string[];
}
