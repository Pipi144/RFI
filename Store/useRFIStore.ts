import { create } from "zustand";
import { Contact } from "../../Models/addressBook";
import { BaseAPIProps } from "../../Models/baseAPIProps";
import { User } from "../../Models/user";
import { FilterGetRFIList } from "../QueryAPI/rfiQueryAPI";
import UserQueryAPI from "../../Services/QueryHooks/userQueryAPI";
import { useMemo } from "react";

interface RFIStore {
  contactList: Contact[];
  setContactList: (data: Contact[]) => void;
  filterRFIListQuery: FilterGetRFIList;
  setFilterRFIListQuery: (data: Partial<FilterGetRFIList>) => void;
  userList: User[];
  setUserList: (data: User[]) => void;
}

export const useRFIStore = create<RFIStore>((set) => ({
  contactList: [],
  setContactList: (data: Contact[]) => set({ contactList: data }),
  filterRFIListQuery: {},
  setFilterRFIListQuery: (data: Partial<FilterGetRFIList>) =>
    set((state) => ({
      filterRFIListQuery: { ...state.filterRFIListQuery, ...data },
    })),
  userList: [],
  setUserList: (data: User[]) => set({ userList: data }),
}));
