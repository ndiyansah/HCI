import React from "react";
import { connect } from "react-redux";

import { getPokemonList } from "../modules/actions";
import { bindActionCreators } from "redux";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPokemonList();
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPokemonList }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
