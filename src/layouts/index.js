import React from "react";
import Navbar from "./Navbar";

export default props => (
  <React.Fragment>
    <Navbar />
    {props.children}
  </React.Fragment>
);
