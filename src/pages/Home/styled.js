import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PokemonTypeStyled = styled.span`
  text-transform: uppercase;
  display: flex;
  justify-content: space-around;
  font-size: small;
  span {
    border-radius: 6px 0;
    padding: 5px;
    color: #fff;
  }
  .normal {
    background: #eee;
    color: #333;
  }
  .grass {
    background: linear-gradient(to bottom right, #56ab2f, #a8e063);
  }
  .poison {
    background: linear-gradient(to bottom right, #ad5389, #3c1053);
  }
  .fighting {
    background: linear-gradient(to bottom right, #ff8008, #ffc837);
  }
  .flying {
    background: linear-gradient(to bottom right, #5c258d, #4389a2);
  }
  .ground {
    background: linear-gradient(to right, #ba8b02, #181818);
  }
  .rock {
    background: linear-gradient(to right, #3c3b3f, #605c3c);
  }
  .bug {
    background: linear-gradient(to bottom right, #dce35b, #45b649);
  }
  .ghost {
    background: linear-gradient(to bottom right, #9d50bb, #6e48aa);
  }
  .steel {
    background: linear-gradient(to left, #8e9eab, #eef2f3);
    color: #333;
  }
  .fire {
    background: linear-gradient(to bottom left, #ff416c, #ff4b2b);
  }
  .water {
    background: linear-gradient(to left, #43c6ac, #191654);
  }
  .electric {
    background: linear-gradient(to top left, #42275a, #734b6d);
  }
  .psychic {
    background: linear-gradient(to left, #bc4e9c, #f80759);
  }
  .ice {
    background: linear-gradient(to top left, #7f7fd5, #86a8e7, #91eae4);
  }
  .dragon {
    background: linear-gradient(to left, #0f0c29, #302b63, #24243e);
  }
  .dark {
    background: linear-gradient(to left, #232526, #414345);
  }
  .fairy {
    background: linear-gradient(to left, #b24592, #f15f79);
  }
`;

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

export const DetailButton = styled(Link)`
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