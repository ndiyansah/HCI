import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";

const NavbarStyled = styled.div`
  padding: 1rem;
  margin: auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogo = styled(Link)`
  color: #fff;
  background: linear-gradient(to right, #ff6a00, #ee0979);
  padding: 1rem 2rem;
  border-radius: 10px 0;
  box-shadow: 0 1px 5px rgba(238, 9, 121, 0.75);
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    color: #fff;
    text-decoration: none;
    box-shadow: 0 5px 8px rgba(238, 9, 121, 1);
  }
`;

export default () => (
  <NavbarStyled>
    <NavbarLogo to="/">HCI-POKEMON</NavbarLogo>
    <div>
      <FilterDropdown />
    </div>
  </NavbarStyled>
);