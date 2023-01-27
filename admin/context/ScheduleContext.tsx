import React, { createContext, useState } from "react";
import dayjs from "dayjs";
import { CreateBusType } from "../component/types/types";
import { SetBusScheduleType } from "../component/types/interfaces";

const ScheduleContext = createContext<SetBusScheduleType>({
  busSchedule: {
    dateAndTime: dayjs().add(1, "day"),
    date: "",
    time: "",
    coachType: "",
    coachNo: "",
    startingCounter: "",
    endCounter: "",
    registrationNumber: "",
    coachClass: "",
    fare: 0,
    sold: 0,
    booked: 0,
    avaiable: 40,
  },
  setBusSchedule: () => {},
});

export default ScheduleContext;

export const BusScheduleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [busSchedule, setBusSchedule] = useState<CreateBusType>({
    dateAndTime: dayjs().add(1, "day"),
    date: "",
    time: "",
    coachType: "",
    coachNo: "",
    startingCounter: "",
    endCounter: "",
    registrationNumber: "",
    coachClass: "",
    fare: 0,
    sold: 0,
    booked: 0,
    avaiable: 40,
  });

  return (
    <ScheduleContext.Provider value={{ busSchedule, setBusSchedule }}>
      {children}
    </ScheduleContext.Provider>
  );
};
