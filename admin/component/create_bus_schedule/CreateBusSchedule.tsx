import React, { useState, useMemo, useCallback, useContext } from "react";
import { CreateBusType } from "../types/types";
import { Box, SelectChangeEvent, Button } from "@mui/material";
import dayjs from "dayjs";
import FirstHalfForm from "./FirstHalfForm";
import SecondHalfForm from "./SecondHalfForm";
import ScheduleContext from "../../context/ScheduleContext";
import { SetBusScheduleType } from "../types/interfaces";

const CreateBusSchedule = () => {
  const { busSchedule, setBusSchedule } =
    useContext<SetBusScheduleType>(ScheduleContext);
  const [schedules, setSchedules] = useState<CreateBusType[]>([]);

  const inputScheduleRef = useMemo(() => busSchedule, [busSchedule]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (busSchedule) {
        setBusSchedule({
          ...busSchedule,
          [event.target.name]: event.target.value,
        });
      }
    },
    [busSchedule]
  );

  const handleSelectChange = useCallback(
    (event: SelectChangeEvent) => {
      const { value, name } = event.target;
      setBusSchedule((prevState: any) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    },
    [busSchedule]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const schedule = {
      ...busSchedule,
      date: busSchedule.dateAndTime?.format("DD-MM-YYYY") as string,
      time: busSchedule.dateAndTime?.format("HH:mm") as string,
    };

    setSchedules([...schedules, schedule]);

    setBusSchedule({
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
  };

  console.log("Schedules", schedules);

  const handleDateChange = useCallback((date: Date | null) => {
    if (date) {
      setBusSchedule({ ...busSchedule, dateAndTime: dayjs(date) });
    } else {
      setBusSchedule({ ...busSchedule, dateAndTime: null });
    }
  }, []);

  return (
    <Box
      component='form'
      className='container_schedule'
      onSubmit={handleSubmit}>
      <FirstHalfForm
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleDateChange={handleDateChange}
        inputScheduleRef={inputScheduleRef}
      />
      <SecondHalfForm
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        inputScheduleRef={inputScheduleRef}
      />
    </Box>
  );
};
export default CreateBusSchedule;
