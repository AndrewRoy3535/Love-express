import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../component/layout/Layout";
import "../styles/appbar.css";
import "../styles/busScheduleForm.css";
import "../styles/createUserForm.css";
import "../styles/formHeader.css";
import { BusScheduleProvider } from "../context/ScheduleContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
