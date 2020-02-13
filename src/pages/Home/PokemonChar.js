import React from "react";
import { connect } from "react-redux";
import { SyncLoader } from "react-spinners";
import { getPokemon } from "../../modules/pokemon/action";

import {
  PokemonCard,
  PokemonImage,
  ImageWrapper,
  PokemonInfo,
  PokemonName,
  LoadingWrapper,
  PokemonType,
  PokemonTypeStyled,
  PokemonDetail,
  DetailButton
} from "./styled";

class PokemonChar extends React.Component {
  componentDidMount() {
    if (!this.props.detail.id) {
      this.props.getPokemon(this.props.id, this.props.detail.name);
    }
  }

  convertToNameCase = name => {
    return name.split("-").join(" ");
  };

  render() {
    return (
      <PokemonCard>
        <ImageWrapper>
          <PokemonImage
            src={`https://img.pokemondb.net/artwork/${
              this.props.detail.name
            }.jpg`}
            alt={this.convertToNameCase(this.props.detail.name)}
          />
        </ImageWrapper>
        <PokemonInfo>
          <PokemonName>
            {this.convertToNameCase(this.props.detail.name)}
          </PokemonName>
          #{this.props.detail.id}
        </PokemonInfo>
        {this.props.detail.isLoading ? (
          <LoadingWrapper>
            <SyncLoader size={5} color="#ff416c" />
          </LoadingWrapper>
        ) : (
          <React.Fragment>
            {this.props.detail.types && (
              <PokemonType>
                <small>TYPE</small>
                <PokemonTypeStyled>
                  {this.props.detail.types.map(item => (
                    <span className={`${item.type.name}`}>
                      {item.type.name}
                    </span>
                  ))}
                </PokemonTypeStyled>
              </PokemonType>
            )}
            {this.props.detail.height && this.props.detail.weight && (
              <PokemonDetail>
                <div>
                  <small>HEIGHT</small>
                  <span>{this.props.detail.height / 10}m</span>
                </div>
                <div>
                  <small>WEIGHT</small>
                  <span>{this.props.detail.weight / 10}kg</span>
                </div>
              </PokemonDetail>
            )}

            {this.props.detail.types && (
              <DetailButton to={`/${this.props.detail.name}`}>
                Detail
              </DetailButton>
            )}
          </React.Fragment>
        )}
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