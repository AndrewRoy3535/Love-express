import React, { memo } from "react";
import {
  Box,
  FormLabel,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CreateBusProps } from "../types/interfaces";

function SecondHalfForm(props: CreateBusProps) {
  const { inputScheduleRef, handleChange, handleSelectChange } = props;
  console.log("second half");
  return (
    <Box component='div' className='container_schedule_form'>
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{ marginTop: "10px !important" }}>
        Registration Number
      </FormLabel>
      <TextField
        value={inputScheduleRef.registrationNumber}
        size='small'
        fullWidth
        label='Registration Number'
        name='registrationNumber'
        autoComplete='registrationNumber'
        autoFocus
        onChange={handleChange}
      />
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{ margin: "10px !important" }}>
        Select Coach Class
      </FormLabel>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id='CoachClass' size='small'>
          Coach Class
        </InputLabel>
        <Select
          size='small'
          labelId='CoachClass'
          fullWidth
          required
          id='select_1'
          label='Coach Class'
          name='coachClass'
          value={inputScheduleRef.coachClass}
          onChange={handleSelectChange}>
          <MenuItem value='E-Class'>E-Class</MenuItem>
          <MenuItem value='S-Class'>S-Class</MenuItem>
        </Select>
      </FormControl>
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{ marginTop: "10px !important" }}>
        Fare
      </FormLabel>
      <TextField
        value={inputScheduleRef.fare}
        size='small'
        fullWidth
        name='fare'
        autoComplete='fare'
        autoFocus
        onChange={handleChange}
      />
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{ marginTop: "10px !important" }}>
        Sold
      </FormLabel>
      <TextField
        value={inputScheduleRef.sold}
        size='small'
        fullWidth
        name='sold'
        autoComplete='sold'
        autoFocus
        onChange={handleChange}
      />
      <FormLabel
        id='demo-radio-buttons-group-label'
        sx={{ marginTop: "10px !important" }}>
        Booked
      </FormLabel>
      <TextField
        value={inputScheduleRef.booked}
        size='small'
        fullWidth
        name='booked'
        autoComplete='booked'
        autoFocus
        onChange={handleChange}
      />
      <Typography
        sx={{
          margin: 1,
          fontSize: "14px",
          fontWeight: "bold",
          color: "#66749c",
        }}>
        Avaiable Seats: {inputScheduleRef.avaiable - inputScheduleRef.sold}
      </Typography>
      <Button
        type='submit'
        variant='outlined'
        color='primary'
        sx={{ marginTop: 1 }}>
        Create
      </Button>
    </Box>
  );
}

export default SecondHalfForm;
