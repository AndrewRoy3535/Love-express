import React from "react";
import Appbar from "../appbar/Appbar";
import { LayoutProps } from "../types/interfaces";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BusScheduleProvider } from "../../context/ScheduleContext";
import { SetBusScheduleType } from "../types/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BusScheduleProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Appbar />
        {children}
      </LocalizationProvider>
    </BusScheduleProvider>
  );
};

export default Layout;
