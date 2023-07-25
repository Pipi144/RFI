import { DatePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { useDoxleThemeStore } from "../../../DoxleGeneralStore/useDoxleThemeStore";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  StyledAddRFITextField,
  StyledRFIFormDatePickerView,
} from "../StyledComponentRFI";

import EventIcon from "@mui/icons-material/Event";
import { TextFieldProps } from "@mui/material";
type Props = {};

const RFIDatePicker = React.forwardRef(
  (props: DatePickerProps<any> & React.RefAttributes<HTMLDivElement>) => {
    const { doxleThemeColor, doxleFont } = useDoxleThemeStore((state) => ({
      doxleThemeColor: state.doxleThemeColor,
      doxleFont: state.doxleFont,
    }));

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledRFIFormDatePickerView
          $themeColor={doxleThemeColor}
          {...props}
          label="Issue Date"
          format="DD/MM/YYYY"
          sx={{
            backgroundColor: doxleThemeColor.primaryContainerColor,
          }}
          slots={{
            textField: (params: TextFieldProps) => (
              <StyledAddRFITextField
                {...params}
                $themeColor={doxleThemeColor}
                $doxleFont={doxleFont}
                variant="standard"
                label="Issue Date"
              />
            ),
            // desktopPaper: (params) => (
            //   <Paper
            //     {...params}
            //     sx={{ bgcolor: THEME_COLOR.primaryContainerColor }}
            //   />
            // ),
            openPickerIcon: (params: any) => (
              <EventIcon
                htmlColor={doxleThemeColor.primaryFontColor}
                {...params}
              />
            ),
          }}
        />
      </LocalizationProvider>
    );
  }
);

export default RFIDatePicker;
