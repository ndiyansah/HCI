import React from "react";

import styled from "@emotion/styled";

import {
  PokemonCard as PokemonCardStyled,
  ImageWrapper,
  PokemonImage,
  PokemonInfo,
  PokemonName
} from "../Home/PokemonChar";

const PokemonDesc = styled.div`
  padding: 1rem;
  /* text-align: justify; */
`;

class PokemonCard extends React.Component {
  convertToNameCase = (name = "") => {
    return name.split("-").join(" ");
  };

  render() {
    return (
      <PokemonCardStyled style={{ width: "100%" }}>
        <ImageWrapper>
          <PokemonImage
            src={`https://img.pokemondb.net/artwork/${this.props.name}.jpg`}
            alt={this.convertToNameCase(this.props.name)}
          />
        </ImageWrapper>
        <PokemonInfo>
          <PokemonName>{this.convertToNameCase(this.props.name)}</PokemonName>#
          {this.props.id}
        </PokemonInfo>
        <PokemonDesc>{this.props.description}</PokemonDesc>
      </PokemonCardStyled>
    );
  }
}

export default PokemonCard;