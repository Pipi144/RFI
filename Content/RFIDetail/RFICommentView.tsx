import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  StyledFetchingDiscussionEventScreen,
  StyledRFICommentInputSection,
  StyledRFICommentMention,
  StyledRFICommentTextfield,
  StyledRFICommentViewContainer,
  StyledRFISendCommentBtn,
} from "./StyledComponentRFIDetail";

import { useSnackbar } from "notistack";

import { DiscussionEmptyIcon, ErrorFetchingCommentIcon } from "./RFIDetailIcon";

import RfiCommentListSkeleton from "./RfiCommentListSkeleton";
import SendIcon from "@mui/icons-material/Send";
import {
  Mention,
  MentionsInputProps,
  SuggestionDataItem,
} from "react-mentions";

import { AnimatePresence } from "framer-motion";
import {
  Discussion,
  getNewTemplateDiscussion,
} from "../../../Models/discussion";
import { CircularProgress } from "@mui/material";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import RFICommentItem from "./RFICommentItem";
import { User } from "../../../Models/user";
import { Contact } from "../../../Models/addressBook";
import { Company } from "../../../Models/company";

import { shallow } from "zustand/shallow";
import { RFI } from "../../Models/rfi";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import { useDoxleAuthStore } from "../../../DoxleGeneralStore/useDoxleAuthStore";
import { useDoxleCurrentContextStore } from "../../../DoxleGeneralStore/useDoxleCurrentContext";
import useDoxleNotificationStore from "../../../DoxleGeneralStore/useDoxleNotificationStore";
import DiscussionQueryAPI, {
  FilterGetDiscussionQuery,
} from "../../../Services/QueryHooks/discussionsAPI";
import RFICommentInputSection from "../RFICommonContent/RFICommentInputSection";
import { StyledRFIListScroller } from "../StyledComponentRFI";

type Props = {
  rfiItem: RFI;
  fullControl: boolean;
  partyInfo: Contact[];
  companyDetail?: Company | undefined;
};

const RFICommentView = ({
  rfiItem,
  fullControl,
  partyInfo,
  companyDetail,
}: Props) => {
  const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
    doxleThemeColor: state.doxleThemeColor,
    doxleFont: state.doxleFont,
  }));
  const { accessToken } = useDoxleAuthStore((state) => ({
    accessToken: state.accessToken,
  }));
  const company = useDoxleCurrentContextStore((state) => state.currentCompany);
  const showNotification = useDoxleNotificationStore(
    (state) => state.showNotification
  );
  const filterDiscussionRFI: FilterGetDiscussionQuery = useMemo(
    () => ({
      projectId: rfiItem.project || undefined,
      rfiPk: rfiItem.rfiPk,
      docketId: rfiItem.docket,
    }),
    [rfiItem]
  );
  const getDiscussionListQuery = DiscussionQueryAPI.useGetDiscussionListQuery({
    showNotification,
    accessToken,
    company: fullControl ? company : companyDetail,
    filter: filterDiscussionRFI,
  });

  const discussionList = useMemo(
    () =>
      getDiscussionListQuery.data?.pages.flatMap(
        (page) => page.data.results ?? []
      ) ?? [],
    [getDiscussionListQuery.data]
  );

  const commentListRef = useRef<VirtuosoHandle>(null);
  return (
    <StyledRFICommentViewContainer>
      {getDiscussionListQuery.isError && (
        <StyledFetchingDiscussionEventScreen
          $themeColor={doxleThemeColor}
          $doxleFont={doxleFont}
        >
          <ErrorFetchingCommentIcon />
          Something Wrong! Please Reload Page...
        </StyledFetchingDiscussionEventScreen>
      )}

      {getDiscussionListQuery.isLoading && <RfiCommentListSkeleton />}

      {getDiscussionListQuery.isSuccess && (
        <>
          {discussionList.length === 0 ? (
            <StyledFetchingDiscussionEventScreen
              $themeColor={doxleThemeColor}
              $doxleFont={doxleFont}
            >
              <DiscussionEmptyIcon />
              Add Comments
            </StyledFetchingDiscussionEventScreen>
          ) : (
            <Virtuoso
              data={discussionList}
              style={{ flex: 1, width: "100%" }}
              components={{
                Scroller: React.forwardRef((props, ref) => (
                  <StyledRFIListScroller
                    style={{
                      ...props.style,
                      overflow: "visible",
                    }}
                    ref={ref}
                    {...props}
                  />
                )),
              }}
              itemContent={(index, item) => (
                <RFICommentItem commentItem={item} />
              )}
              ref={commentListRef}
            />
          )}
        </>
      )}
      <RFICommentInputSection
        filterDiscussionRFI={filterDiscussionRFI}
        commentListRef={commentListRef}
        fullControl={fullControl}
        partyInfo={partyInfo}
        companyDetail={companyDetail}
        rfiItem={rfiItem}
      />
    </StyledRFICommentViewContainer>
  );
};

export default RFICommentView;
