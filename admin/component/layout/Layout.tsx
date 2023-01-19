import React from "react";
import Appbar from "../appbar/Appbar";
import { LayoutProps } from "../types/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

export default Layout;
