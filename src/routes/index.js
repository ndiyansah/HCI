import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "../layouts";

import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";

export const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/:name" exact component={PokemonDetail} />
    </Layout>
  </BrowserRouter>
);
