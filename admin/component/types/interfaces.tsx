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
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => void;
  inputScheduleRef: CreateBusType;
  handleDateChange?: any;
}

export interface SetBusScheduleType {
  busSchedule: any;
  setBusSchedule: (busSchedule: any) => void;
  schedules: any;
  setSchedules: (schedules: any) => void;
  showSchedules: boolean;
  setShowSchedules: (modal: boolean) => void;
  handleOpenSchedules: () => void;
  handleCloseSchedules: () => void;
  isSuccSdl: boolean;
  setIsSuccSdl: (isSuccSdl: boolean) => void;
}

export interface CreateBusContextTypes {
  user: any;
  setUser: (user: any) => void;
  users: any;
  setUsers: (users: any) => void;
  showUser: any;
  setShowUsers: (showUser: any) => void;
  handleCloseUsers: () => void;
  handleOpenUsers: () => void;
}
