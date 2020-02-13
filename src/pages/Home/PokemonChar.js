import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import { getPokemon } from "../../modules/pokemon/action";

export const PokemonCard = styled.div`
  background: #fff;
  display: block;
  box-shadow: 0 5px 5px rgba(109, 213, 237, 0.2);
  min-width: 200px;
  margin: 0.5rem;
  border-radius: 10px 2px;
  border: 1px solid pink;
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export const PokemonImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

export const PokemonInfo = styled.div`
  background: linear-gradient(to bottom right, #ee0979, #ff6a00);
  color: #fff;
  padding: 0.2rem 1rem;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

export const PokemonName = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 18px;
`;

export const PokemonType = styled.div`
  padding: 0.2rem 1rem;
  border-bottom-right-radius: 10px;
  text-align: center;
  small {
    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: space-around;
    text-transform: uppercase;
  }
`;

export const PokemonDetail = styled.div`
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  div {
    text-align: center;
    span,
    small {
      display: block;
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`;

const DetailButton = styled(Link)`
  display: block;
  padding: 0.4rem;
  margin: 0.5rem;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, #f5af19, #f12711);
  border-radius: 10px 0;
  &:hover {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    background: linear-gradient(to bottom right, #f5af19, #f12711);
  }
`;

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
                <div>
                  {this.props.detail.types.map(item => (
                    <span>{item.type.name}</span>
                  ))}
                </div>
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
