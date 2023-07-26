import { Skeleton } from "@mui/material";
import React from "react";
import { Virtuoso } from "react-virtuoso";

type Props = {};

const RfiCommentListSkeleton = (props: Props) => {
  return (
    <Virtuoso
      style={{ width: "100%", flex: 1 }}
      data={Array(10).fill(1)}
      itemContent={(index, item) => <CommentListItemSkeleton key={index} />}
    />
  );
};

export default RfiCommentListSkeleton;

const CommentListItemSkeleton = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingBottom: 30,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Skeleton
        variant="rounded"
        width={"15%"}
        height={8}
        animation="wave"
        sx={{ mb: 2 }}
      />
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={14}
        animation="wave"
        sx={{ mb: 0.5 }}
      />
      <Skeleton
        variant="rounded"
        width={"80%"}
        height={8}
        animation="wave"
        sx={{ mb: 0.5 }}
      />
    </div>
  );
};
