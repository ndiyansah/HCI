import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "../layouts";

import Home from "../pages/Home";

export const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={Home} />
    </Layout>
  </BrowserRouter>
);
