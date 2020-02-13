import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { getPokemonDetailPage } from "../../modules/detail/action";
import { SyncLoader } from "react-spinners";
import {
  PokemonCard,
  ImageWrapper,
  PokemonImage,
  PokemonInfo,
  PokemonName,
  PokemonType,
  LoadingWrapper,
  PokemonDetail as PokeDetail
} from "../Home/PokemonChar";

const Wrapper = styled.div`
  margin: 0 3rem;
`;

class PokemonDetail extends React.Component {
  componentDidMount() {
    const name = this.props.match.params.name;
    this.props.getPokemonDetailPage(name);
  }

  convertToNameCase = (name = "") => {
    return name.split("-").join(" ");
  };

  render() {
    const detail = this.props.detail.data;

    return (
      <Wrapper>
        {this.props.detail.isLoading ||
        this.props.detail.data.name === undefined ? (
          <LoadingWrapper>
            <SyncLoader size={5} color="#ff416c" />
          </LoadingWrapper>
        ) : (
          <div className="row">
            <div className="col-md-3">
              <PokemonCard>
                <ImageWrapper>
                  <PokemonImage
                    src={`https://img.pokemondb.net/artwork/${detail.name}.jpg`}
                    alt={this.convertToNameCase(detail.name)}
                  />
                </ImageWrapper>
                <PokemonInfo>
                  <PokemonName>
                    {this.convertToNameCase(detail.name)}
                  </PokemonName>
                  #{detail.id}
                </PokemonInfo>
                <PokemonType>
                  <small>TYPE</small>
                  <div>
                    {detail.types.map(item => (
                      <span>{item.type.name}</span>
                    ))}
                  </div>
                </PokemonType>
                <PokeDetail>
                  <div>
                    <small>HEIGHT</small>
                    <span>{detail.height / 10}m</span>
                  </div>
                  <div>
                    <small>WEIGHT</small>
                    <span>{detail.weight / 10}kg</span>
                  </div>
                </PokeDetail>
              </PokemonCard>
            </div>
          </div>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.detail
});

const mapDispatchToProps = {
  getPokemonDetailPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);