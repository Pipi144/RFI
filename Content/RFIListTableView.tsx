import React from "react";
import { Virtuoso } from "react-virtuoso";
import { RFI } from "../Models/rfi";
import { StyledRFIListScroller } from "./StyledComponentRFI";
import { AnimatePresence } from "framer-motion";
import RFIListItem from "./RFIListItem";

type Props = { rfiList: RFI[]; handleClickRFIItem: (rfiItem: RFI) => void };

const RFIListTableView = ({ rfiList, handleClickRFIItem }: Props) => {
  return (
    <Virtuoso
      style={{
        width: "100%",
        flex: 1,
        marginTop: 20,
      }}
      data={rfiList}
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
        <AnimatePresence key={`${item.rfiPk}`}>
          <RFIListItem rfiItem={item} handleClickRFIItem={handleClickRFIItem} />
        </AnimatePresence>
      )}
    />
  );
};

export default RFIListTableView;
