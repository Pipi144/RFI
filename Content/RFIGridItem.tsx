import React from "react";
import { RFI } from "../Models/rfi";
import { StyledRFIGridItem } from "./StyledComponentRFI";

type Props = {
  rfiItem: RFI;
};

const RFIGridItem = ({ rfiItem }: Props) => {
  return <StyledRFIGridItem>RFIGridItem</StyledRFIGridItem>;
};

export default RFIGridItem;
