import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import PokemonChar from "../Home/PokemonChar";

const Wrapper = styled.div`
  margin: 0 3rem;
`;

class PokemonDetail extends React.Component {
  state = {
    id: "",
    selectedPokemon: {
      name: ""
    }
  };

  componentDidMount() {}

  render() {
    return <Wrapper />;
  }
}

const mapStateToProps = state => ({
  pokemons: state.list
});

export default connect(mapStateToProps)(PokemonDetail);