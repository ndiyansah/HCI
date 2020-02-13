import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { store } from "./store";
import Layout from "./layouts";


export default () => (
  <Provider store={store}>
    <Routes />
     <Layout>
      <Routes />
    </Layout>
  </Provider>
);