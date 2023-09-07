import axios from "axios";

import { Company } from "../../Models/company";

import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { BaseAPIProps } from "../../Models/baseAPIProps";
import { baseAddress } from "../../App";
import { NewRFI, RFI } from "../Models/rfi";

export interface FilterGetRFIList {
  projectId?: string;
  docketId?: string;
}

interface GetRFIListQueryProp extends BaseAPIProps {
  filter: FilterGetRFIList;
}

const useGetRFIList = ({
  company,
  showNotification,
  accessToken,
  filter,
}: GetRFIListQueryProp) => {
  const qKey = formRFIQueryKey(company, filter);
  let rfiURL = `${baseAddress}/rfi/?page=1`;
  let filterParam: any = {};
  if (company) {
    filterParam.company = company.companyId;
  }
  if (filter.projectId) {
    filterParam.project = filter.projectId;
  }
  if (filter.docketId) {
    filterParam.docket = filter.docketId;
  }
  return useInfiniteQuery(
    qKey,
    ({ pageParam = rfiURL }) =>
      axios.get(pageParam, {
        headers: {
          Authorization: "Bearer " + accessToken,
          "User-Company": company!.companyId,
        },
        params: filterParam,
      }),
    {
      enabled: Boolean(company?.companyId && accessToken),
      retry: 1,
      staleTime: 1 * 60 * 1000,
      getNextPageParam: (prevData) => prevData.data?.next,
      onError: (err) => {
        if (showNotification)
          showNotification(
            "FAILED TO GET RFI LIST",
            "error",
            String(err ?? "Unknown Error")
          );
      },
    }
  );
};

interface AddRFIQueryProp extends BaseAPIProps {
  filter: FilterGetRFIList;
  onSuccessCb?: Function;
}
const useAddRFIList = ({
  filter,
  accessToken,
  company,
  showNotification,
  onSuccessCb,
}: AddRFIQueryProp) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (newRFI: NewRFI) => {
      return axios.post(`${baseAddress}/rfi/`, newRFI, {
        headers: {
          Authorization: "Bearer " + accessToken,
          "User-Company": company?.companyId || "",
        },
      });
    },
    onSuccess: (result, variables, context) => {
      console.log("SUCESS ADD:", result.data);
      if (showNotification)
        showNotification("Item Added", "success", "SUCCESSFULLY ADDED IMAGES");
      if (onSuccessCb) onSuccessCb((result.data as RFI).rfiPk);

      handleOverwriteRFIListQueryData({
        filter,
        appendPos: "start",
        action: "add",
        queryClient,
        company,
        addedRFI: result.data,
      });
    },
    onError: (error, variables, context) => {
      if (showNotification)
        showNotification("SOMETHING WRONG!", "error", "Fail To Add IMAGES");
    },
  });
  const mutate = (newRFI: NewRFI) => mutation.mutate(newRFI);
  return { ...mutation, mutate };
};

interface DeleteRFIQueryProps extends BaseAPIProps {
  filter: FilterGetRFIList;
  onSuccessCb?: Function;
}
const useDeleteRFIQuery = ({
  filter,
  accessToken,
  company,
  showNotification,
  onSuccessCb,
}: DeleteRFIQueryProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (rfiId: string) => {
      return axios.delete(`${baseAddress}/rfi/${rfiId}/`, {
        headers: {
          Authorization: "Bearer " + accessToken,
          "User-Company": company?.companyId || "",
        },
      });
    },
    onSuccess: (result, variables, context) => {
      console.log("SUCESS ADD:", result.data);
      if (showNotification)
        showNotification("Item Added", "success", "SUCCESSFULLY ADDED IMAGES");
      if (onSuccessCb) onSuccessCb();

      handleOverwriteRFIListQueryData({
        filter,

        action: "delete",
        queryClient,
        company,
        deletedRfiId: variables,
      });
    },
    onError: (error: any, variables, context) => {
      console.log("ERROR:", error);
      if (showNotification) {
        {
          if (error.response.status === 403)
            showNotification(
              "You are not authorised for this action!",
              "error",
              ""
            );
          else
            showNotification("SOMETHING WRONG!", "error", "Fail To Add IMAGES");
        }
      }
    },
  });
  const mutate = (rfiId: string) => mutation.mutate(rfiId);
  return { ...mutation, mutate };
};

export interface UpdateRFIQueryBody {
  watchers?: string[];
  ballInCourt?: string;
}
interface EditRFIQueryProps extends BaseAPIProps {
  filter: FilterGetRFIList;
  onSuccessCb?: Function;
}
const useUpdateRFIQuery = ({
  filter,
  accessToken,
  company,
  showNotification,
  onSuccessCb,
}: EditRFIQueryProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (props: {
      rfiItem: RFI;
      updateBody: UpdateRFIQueryBody;
      rfiLink?: string;
    }) => {
      const { rfiItem, updateBody } = props;
      console.log("UPDATE BODY:", updateBody);
      return axios.patch(`${baseAddress}/rfi/${rfiItem.rfiPk}/`, updateBody, {
        headers: {
          Authorization: "Bearer " + accessToken,
          "User-Company": company?.companyId || "",
        },
      });
    },
    onSuccess: (result, variables, context) => {
      console.log("SUCESS EDIT:", result.data);
      handleOverwriteRFIListQueryData({
        filter,
        action: "edit",
        queryClient,
        company,
        edittedRFI: result.data,
      });
      console.log("VARIABLE RFI:", variables.rfiLink);
      if (variables.rfiLink)
        handleOverwriteRFILinkQueryData({
          edittedRFI: result.data,
          queryClient,
          rfiLinkId: variables.rfiLink,
        });
      if (showNotification)
        showNotification(
          "Item Updated",
          "success",
          "SUCCESSFULLY ADDED IMAGES"
        );
      if (onSuccessCb) onSuccessCb(result.data);
    },
    onError: (error, variables, context) => {
      if (showNotification)
        showNotification("SOMETHING WRONG!", "error", "Fail To Edit RFI");
    },
  });
  const mutate = (props: {
    rfiItem: RFI;
    updateBody: UpdateRFIQueryBody;
    rfiLink?: string;
  }) => mutation.mutate(props);
  return { ...mutation, mutate };
};

interface GetRFILinkDetailQueryProps {
  rfiLinkId: string;
  showNotification?: (
    message: string,
    messageType: "success" | "error",
    extraMessage?: string,
    duration?: number
  ) => void;
}

const useGetRFILinkDetailQuery = ({
  rfiLinkId,
  showNotification,
}: GetRFILinkDetailQueryProps) => {
  const qKey = formRFILinkQueryKey(rfiLinkId);
  let url = "" + baseAddress + "/rfi/link/" + rfiLinkId + "/";
  return useQuery(qKey, () => axios.get(url), {
    enabled: Boolean(rfiLinkId),
    retry: 1,
    onSuccess: (res) => {
      console.log(res.data);
    },
    onError: () => {
      if (showNotification)
        showNotification(
          "SOMETHING WRONG",
          "error",
          "Failed to get quote request list"
        );
    },
  });
};

interface SendRFIEmailQueryProps extends BaseAPIProps {}
const useSendRFIEmailQuery = ({
  showNotification,
  accessToken,
  company,
}: SendRFIEmailQueryProps) => {
  const mutation = useMutation({
    mutationFn: async (rfiId: string) => {
      return axios.post(
        `${baseAddress}/rfi/sendemail/`,
        { rfiId: rfiId },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            "User-Company": company?.companyId || "",
          },
        }
      );
    },
    onSuccess: (result, variables, context) => {
      console.log("SUCESS ADD:", result.data);
      // if (showNotification)
      //   showNotification("Item Added", "success", "SUCCESSFULLY ADDED IMAGES");
    },
    onError: (error, variables, context) => {
      if (showNotification)
        showNotification(
          "SOMETHING WRONG! FAILED TO SEND EMAIL",
          "error",
          "Fail To Add IMAGES"
        );
    },
  });
  const mutate = (rfiId: string) => mutation.mutate(rfiId);
  return { ...mutation, mutate };
};

interface NotifyBallInCourtQueryProps extends BaseAPIProps {}
const useNotifyBallInCourtQuery = ({
  showNotification,
  accessToken,
  company,
}: NotifyBallInCourtQueryProps) => {
  const mutation = useMutation({
    mutationFn: async (rfiId: string) => {
      return axios.post(
        `${baseAddress}/rfi/notify_ball_in_court/`,
        { rfiId: rfiId },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
            "User-Company": company?.companyId || "",
          },
        }
      );
    },
    onSuccess: (result, variables, context) => {
      // if (showNotification)
      //   showNotification("Item Added", "success", "SUCCESSFULLY ADDED IMAGES");
    },
    onError: (error, variables, context) => {
      if (showNotification)
        showNotification(
          "SOMETHING WRONG! FAILED TO SEND EMAIL",
          "error",
          "Fail To Add IMAGES"
        );
    },
  });
  const mutate = (rfiId: string) => mutation.mutate(rfiId);
  return { ...mutation, mutate };
};
//################# HELPER FUNCTIONS ##################
interface OverwriteRFIListQueryParams {
  queryClient: QueryClient;
  filter: FilterGetRFIList;
  company: Company | undefined;
  action: "edit" | "delete" | "add";
  addedRFI?: RFI;
  appendPos?: "start" | "end";
  deletedRfiId?: string;
  edittedRFI?: RFI;
}

const handleOverwriteRFIListQueryData = ({
  action,
  addedRFI,
  appendPos,
  company,
  filter,
  queryClient,
  deletedRfiId,
  edittedRFI,
}: OverwriteRFIListQueryParams) => {
  const qKey = formRFIQueryKey(company, filter);
  if (action === "add" && addedRFI) {
    queryClient.setQueryData(qKey, (old: any) => {
      return old
        ? {
            ...old,
            pages: [
              ...(old.pages as any).map((page: any, index: number) => {
                if (index === 0 && appendPos && appendPos === "start") {
                  let newPage = { ...page };
                  let pageData = {
                    ...page.data,
                    results: [addedRFI, ...page.data.results],
                  };
                  newPage = { ...page, data: pageData };
                  return newPage;
                } else if (
                  index === old.pages.length - 1 &&
                  (!appendPos || (appendPos && appendPos === "end"))
                ) {
                  let newPage = { ...page };
                  let pageData = {
                    ...page.data,
                    results: [...page.data.results, addedRFI],
                  };
                  newPage = { ...page, data: pageData };
                  return newPage;
                } else return page;
              }),
            ],
          }
        : old;
    });
  }

  if (action === "delete" && deletedRfiId) {
    queryClient.setQueryData(qKey, (old: any) => {
      return old
        ? {
            ...old,
            pages: [
              ...(old.pages as any).map((page: any, index: number) => {
                const isPageContainRFI = Boolean(
                  (page.data.results as RFI[]).filter(
                    (rfi) => rfi.rfiPk === deletedRfiId
                  )[0] !== undefined
                );

                if (!isPageContainRFI) return page;
                else {
                  let newPageData = {
                    ...page.data,
                    results: [
                      ...(page.data.results as RFI[]).filter(
                        (rfi) => rfi.rfiPk !== deletedRfiId
                      ),
                    ],
                  };

                  return { ...page, data: newPageData };
                }
              }),
            ],
          }
        : old;
    });
  }

  if (action === "edit" && edittedRFI) {
    queryClient.setQueryData(qKey, (old: any) => {
      return old
        ? {
            ...old,
            pages: [
              ...(old.pages as any).map((page: any, index: number) => {
                const isPageContainRFI = Boolean(
                  (page.data.results as RFI[]).filter(
                    (rfi) => rfi.rfiPk === edittedRFI.rfiPk
                  )[0] !== undefined
                );

                if (!isPageContainRFI) return page;
                else {
                  let newPageData = {
                    ...page.data,
                    results: [
                      ...(page.data.results as RFI[]).map((rfi) => {
                        if (rfi.rfiPk === edittedRFI.rfiPk) return edittedRFI;
                        else return rfi;
                      }),
                    ],
                  };

                  return { ...page, data: newPageData };
                }
              }),
            ],
          }
        : old;
    });
  }
};

const formRFIQueryKey = (
  company: Company | undefined,
  filter: FilterGetRFIList
) => {
  let baseQKey = ["rfi-list", company?.companyId];
  const { projectId, docketId } = filter;
  if (projectId) baseQKey.push(projectId);
  if (docketId) baseQKey.push(docketId);
  return baseQKey;
};

interface OverwriteRFILinkQueryParams {
  rfiLinkId: string;
  edittedRFI: RFI;
  queryClient: QueryClient;
}
const handleOverwriteRFILinkQueryData = ({
  rfiLinkId,
  queryClient,
  edittedRFI,
}: OverwriteRFILinkQueryParams) => {
  const qKey = formRFILinkQueryKey(rfiLinkId);

  queryClient.setQueryData(qKey, (old: any) => {
    return old
      ? { ...old, data: { ...old.data, result: { ...edittedRFI } } }
      : old;
  });
};
const formRFILinkQueryKey = (rfiLinkId: string) => {
  return ["rfi_link_detail", rfiLinkId];
};
//######################################################

const RFIQueryAPI = {
  useGetRFIList,
  useAddRFIList,
  useDeleteRFIQuery,
  useUpdateRFIQuery,
  useGetRFILinkDetailQuery,
  useSendRFIEmailQuery,
  useNotifyBallInCourtQuery,
};

export default RFIQueryAPI;
