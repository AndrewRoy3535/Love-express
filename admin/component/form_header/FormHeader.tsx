import React from "react";
import { Box, Typography } from "@mui/material";

interface FormHeaderProps {
  title: string;
  description?: string;
}

function FormHeader(props: FormHeaderProps) {
  const { title, description } = props;
  return (
    <>
      <Box component='div' className='header_container'>
        <Typography className='header_form_text'>{title}</Typography>
      </Box>
      <Typography className='header_form_description'>{description}</Typography>
    </>
  );
}

export default FormHeader;
