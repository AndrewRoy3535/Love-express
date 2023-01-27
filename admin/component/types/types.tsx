import dayjs from "dayjs";

export type CreateUser = {
  name: string;
  password: string;
  confirmpassword: string;
  admin: boolean;
};

export type CreateBusType = {
  dateAndTime: dayjs.Dayjs | null;
  date: string;
  time: string;
  coachType: string;
  coachNo: string;
  startingCounter: string;
  endCounter: string;
  registrationNumber: string;
  coachClass: string;
  fare: number;
  sold: number;
  booked: number;
  avaiable: number;
};
