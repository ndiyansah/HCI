import React from "react";
import styled from "@emotion/styled";

const NavbarStyled = styled.div`
  padding: 1rem;
  margin: 1rem auto;
`;

const NavbarLogo = styled.span`
  /* margin: 0.5rem; */
  color: #fff;
  background: linear-gradient(to right, #ff6a00, #ee0979);
  padding: 1rem 2rem;
  border-radius: 10px 0;
`;

export default () => (
  <NavbarStyled>
    <NavbarLogo>Pokédex</NavbarLogo>
  </NavbarStyled>
);
