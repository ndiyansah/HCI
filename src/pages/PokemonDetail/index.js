import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { getPokemonDetailPage } from "../../modules/detail/action";
import { SyncLoader } from "react-spinners";
import { LoadingWrapper } from "../Home/PokemonChar";
import PokemonCard from "./PokemonCard";

const Wrapper = styled.div`
  margin: 0 3rem;
`;

const Detail = styled.div`
  border: 1px solid pink;
  padding: 1rem;
  border-radius: 10px 0;
  margin: 0.5rem;
  background: #fff;
`;

const DetailTitle = styled.div`
  font-weight: bold;
  font-size: large;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const DetailSubSmall = styled.div`
  font-size: small;
  color: #333;
  text-transform: uppercase;
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
    const specie = this.props.detail.specie;

    const englishDescription =
      specie.flavor_text_entries &&
      specie.flavor_text_entries.filter(item => item.language.name === "en")[0];

    return (
      <div className="container">
        {this.props.detail.isLoading ||
        this.props.detail.data.name === undefined ? (
          <LoadingWrapper>
            <SyncLoader size={5} color="#ff416c" />
          </LoadingWrapper>
        ) : (
          <div className="row">
            <div className="col-md-3">
              <PokemonCard
                name={detail.name}
                id={detail.id}
                description={englishDescription.flavor_text}
              />
            </div>
            <div className="col-md-9">
              <Detail>
                <DetailTitle>Details</DetailTitle>

                <div className="row">
                  <div className="col-md-6 p-4">
                    <DetailSubSmall>Height</DetailSubSmall>
                    <span>{detail.height / 10}m</span>
                    <DetailSubSmall>Weight</DetailSubSmall>
                    <span>{detail.weight / 10}kg</span>
                    <DetailSubSmall>Type</DetailSubSmall>
                    {detail.types.map(item => (
                      <span className="d-block text-capitalize">
                        {item.type.name}
                      </span>
                    ))}
                  </div>
                  <div className="col-md-6 p-4">
                    <DetailSubSmall>Category</DetailSubSmall>
                    <span>{specie.genera[2].genus}</span>
                    <DetailSubSmall>Abilities</DetailSubSmall>
                    {detail.abilities.map(item => (
                      <span className="d-block text-capitalize">
                        {item.ability.name}
                      </span>
                    ))}
                  </div>
                </div>

                <DetailTitle>Stats</DetailTitle>
                {detail.stats.map(item => (
                  <div className="m-2">
                    <DetailSubSmall>{item.stat.name}</DetailSubSmall>
                    <div class="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${item.base_stat}%`,
                          background: `linear-gradient(to left, #ff6a00, #ee0979)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Detail>
            </div>
          </div>
        )}
      </div>
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
