import React, { useState, useCallback, useMemo } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  Box,
  TextField,
  FormLabel,
} from "@mui/material";
import { CreateUser } from "../types/types";

const CreateUser = () => {
  const [user, setUser] = useState<CreateUser>({
    name: "",
    password: "",
    confirmpassword: "",
    admin: false,
  });
  const [isMatch, setIsMatch] = useState<boolean>(true);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const inputUserRef = useMemo(() => user, [user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.password !== user.confirmpassword) {
      setIsMatch(false);
      setIsSuccessful(false);
    } else {
      setIsMatch(true);
      console.log(user);
      setIsSuccessful(true);
      setUser({ name: "", password: "", confirmpassword: "", admin: false });
    }
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [event.target.name]: event.target.value });
    },
    [user]
  );
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, admin: event.target.value === "true" });
  };

  console.log("CreateUeser");

  return (
    <Box
      component='form'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        border: "1px solid black",
        padding: 1,
      }}
      onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        value={inputUserRef.name}
        required
        label='New user'
        name='name'
        autoComplete='name'
        autoFocus
        onChange={handleChange}
      />
      <TextField
        value={inputUserRef.password}
        margin='normal'
        type='password'
        required
        id='password'
        label='Password'
        name='password'
        autoFocus
        onChange={handleChange}
      />
      <TextField
        value={inputUserRef.confirmpassword}
        margin='normal'
        type='password'
        required
        id='confirmpassword'
        label='Confirm Password'
        name='confirmpassword'
        autoFocus
        onChange={handleChange}
      />
      <FormLabel id='demo-radio-buttons-group-label'>Admin</FormLabel>
      <FormControlLabel
        control={
          <Radio
            checked={inputUserRef.admin}
            onChange={handleRadioChange}
            value='true'
            name='isChecked'
          />
        }
        label='Yes'
      />
      <FormControlLabel
        control={
          <Radio
            checked={!inputUserRef.admin}
            onChange={handleRadioChange}
            value='false'
            name='isChecked'
          />
        }
        label='No'
      />
      <Button type='submit' variant='outlined' color='primary'>
        Create
      </Button>
      {isMatch ? (
        <></>
      ) : (
        <Box
          sx={{
            marginTop: "5px",
            color: "red",
            fontWeight: 300,
            fontSize: "14px",
          }}>
          <p>Password does not match!</p>
        </Box>
      )}
      {isSuccessful && (
        <Box
          sx={{
            marginTop: "5px",
            color: "green",
            fontWeight: 300,
            fontSize: "14px",
          }}>
          <p>A new user created Successfully!</p>
        </Box>
      )}
    </Box>
  );
};

export default CreateUser;
