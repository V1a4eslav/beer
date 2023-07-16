import styled from "styled-components";

export const SBeer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SBeerTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  background-color: lightgray;
  color: #AA5B17;
  padding: 10px 0;
`;

export const SBeerBody = styled.div`
  display: flex;

`;

export const SBeerImg = styled.div`
  flex: 0 1 50%;
  text-align: center;
  background-color: #AA5B17;
  padding: 20px;

  img {
    max-width: 100%;
    max-height: 80vh;
  }
`;

export const SBeerInfo = styled.div`
  flex: 1 0 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const SBeerDesc = styled.p`
  font-size: 25px;
  line-height: 1.2;
  color: lightgray;
  margin-bottom: 30px;
`;

export const SIngredientsBody = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const SIngredientsTitle = styled.h4`
  font-size: 20px;
  color: #000;
`;

export const SIngredient = styled.p`

`