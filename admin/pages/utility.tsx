import React from "react";
import CreateBusSchedule from "../component/create_bus_schedule/CreateBusSchedule";
import CreateUser from "../component/create_user/CreateUser";
import FormHeader from "../component/form_header/FormHeader";

function utility() {
  return (
    <>
      <FormHeader
        title='1. Create User'
        description='Fill out this form bellow to create new user'
      />
      <CreateUser />
      <FormHeader
        title='2. Create Schedule'
        description='Fill out this form bellow to create new bus schedule'
      />
      <CreateBusSchedule />
    </>
  );
}
console.log("Utility");

export default utility;
