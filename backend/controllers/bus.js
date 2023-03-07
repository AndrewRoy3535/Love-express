import Schedule from "../models/Bus.js";

export const bus = (req, res, next) => {
  res.send("This is bus router");
};

export const createbusSchedule = async (req, res, next) => {
  const newBusSchedule = new Schedule(req.body);
  try {
    const saveSchedule = await newBusSchedule.save();
    res.status(200).json(saveSchedule);
  } catch (error) {
    next(error);
  }
};
