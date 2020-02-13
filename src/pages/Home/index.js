import React from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import PokemonChar from "./PokemonChar";
import styled from "@emotion/styled";
import debounce from "lodash.debounce";

import { PropagateLoader } from "react-spinners";
import FilterDropdown from "./FilterDropdown";

import { getPokemonList } from "../../modules/pokemon/action";

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingWrapper = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);

    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (this.props.pokemons.pagination.hasNext) {
          this.props.getPokemonList(
            this.props.pokemons.pagination.currentPage + 1
          );
        }
      }
    }, 100);
  }

  componentDidMount() {
    this.props.getPokemonList(this.props.pokemons.pagination.currentPage);
  }

  render() {
    return (
      <React.Fragment>
        <FilterDropdown />
        <HomeWrapper>
          {this.props.pokemons.data.map((pokemon, index) => (
            <PokemonChar detail={pokemon} id={index} key={pokemon.name} />
          ))}
        </HomeWrapper>
        <LoadingWrapper>
          <PropagateLoader
            loading={this.props.pokemons.isLoading}
            color="#ff416c"
          />
        </LoadingWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemon
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPokemonList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
