import React from "react";
import styled from "@emotion/styled";

import { connect } from "react-redux";

import { getPokemonTypes, getPokemonByType } from "../modules/actions";

const SelectStyled = styled.button`
  padding: 5px 10px;
  font-size: small;
  border: none;
  color: #fff;
  background: linear-gradient(to right, #0083b0, #00b4db);
  width: 120px;
  border-radius: ${props => (props.isActive ? "6px 0" : "6px 0 0 0")};
  position: relative;
  &:focus {
    outline: none;
  }
  .caret {
    margin-left: 5px;
    img {
      height: 7.5px;
      &.is-active {
        transform: rotate(180deg);
      }
    }
  }
`;

const DropdownList = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #0083b0;
  padding: 10px;
  width: ${props => (!props.isActive ? "120px" : "300px")};
  right: 3rem;
  border-radius: 6px 0;
  display: flex;
  flex-wrap: wrap;
`;

const DropdownListItem = styled.button`
  display: block;
  width: 50%;
  margin-bottom: 5px;
  border: none;
  text-transform: capitalize;
  &:focus {
    outline: 0;
  }
  &:hover {
    font-weight: 800;
  }
`;

class FilterDropdown extends React.Component {
  state = {
    isDropdownOpen: false
  };

  componentDidMount() {
    this.props.getPokemonTypes();
  }

  onDropdownClicked = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onDropdownItemClicked = type => {
    this.props.getPokemonByType(type);
    this.onDropdownClicked();
  };

  render() {
    return (
      <React.Fragment>
        <SelectStyled
          isActive={!this.state.isDropdownOpen}
          onClick={this.onDropdownClicked}
        >
          Filter By Type{" "}
          <span className="caret">
            <img
              src={require("../assets/caret.svg")}
              alt="Caret"
              className={this.state.isDropdownOpen ? "is-active" : ""}
            />
          </span>
        </SelectStyled>

        {this.state.isDropdownOpen && (
          <DropdownList isActive={this.state.isDropdownOpen}>
            {this.props.types.data.map(item => (
              <DropdownListItem
                onClick={() => {
                  this.onDropdownItemClicked(item.name);
                }}
              >
                {item.name}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  types: state.types
});

const mapDispatchToProps = {
  getPokemonTypes,
  getPokemonByType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDropdown);
