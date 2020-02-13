import React from "react";
import styled from "@emotion/styled";
import { getPokemon } from "../../modules/actions";

import { connect } from "react-redux";

const PokemonCard = styled.div`
  background: #fff;
  display: block;
  box-shadow: 0 5px 5px rgba(109, 213, 237, 0.2);
  min-width: 200px;
  margin: 0.5rem;
  border-radius: 10px 2px;
  border: 1px solid pink;
`;

const ImageWrapper = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const PokemonImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

const PokemonInfo = styled.div`
  background: linear-gradient(to bottom right, #ee0979, #ff6a00);
  color: #fff;
  padding: 1rem;
  border-radius: 10px 0;
`;

const PokemonName = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 18px;
`;

class PokemonChar extends React.Component {
  componentDidMount() {
    this.props.getPokemon(this.props.id, this.props.name);
  }

  convertToNameCase = name => {
    return name.split("-").join(" ");
  };

  render() {
    return (
      <PokemonCard>
        <ImageWrapper>
          <PokemonImage
            src={`https://img.pokemondb.net/artwork/${this.props.name}.jpg`}
            alt={this.convertToNameCase(this.props.name)}
          />
        </ImageWrapper>
        <PokemonInfo>
          <PokemonName>{this.convertToNameCase(this.props.name)}</PokemonName>
        </PokemonInfo>
      </PokemonCard>
    );
  }
}

// const mapStateToProps
const mapDispatchToProps = { getPokemon };
export default connect(
  null,
  mapDispatchToProps
)(PokemonChar);
