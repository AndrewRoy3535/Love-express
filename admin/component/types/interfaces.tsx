import { Dayjs } from "dayjs";
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { CreateBusType } from "./types";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface AppBarProps {
  toggleDrawer?: () => void;
}

export interface CreateBusProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange?: (e: SelectChangeEvent) => void;
  inputScheduleRef: CreateBusType;
  handleDateChange?: any;
}
export interface SetBusScheduleType {
  busSchedule: any;
  setBusSchedule: (bbusSchedule: any) => void;
}
