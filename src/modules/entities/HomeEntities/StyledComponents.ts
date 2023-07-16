import styled from "styled-components";
import {Link} from "react-router-dom";

export const SRecipesList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 25px 0;
`;

export const SRecipeItem = styled.div<{ marked: string }>`
  cursor: pointer;
  display: flex;
  column-gap: 10px;
  padding: 10px;
  background-color: ${props => props.marked === 'true' ? 'pink' : ''};
  border:1px solid gray;
  border-radius: 20px;
`;
export const SRecipeImage = styled.div`
  flex: 0 0 200px;
  height: 160px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;

  img {
    max-width: 100%;
    height: 100%;
  }
`;

export const SRecipeInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const SRecipeTitle = styled.h2`
  color: gray;
  font-size: 30px;
  line-height: 1.2;
`;

export const SRecipeDesc = styled.p`
  margin-top: 5px;
  color: slategray;
  line-height: 1.4;
`;

export const SRecipeFooter = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
`

export const SRecipeAbv = styled.span`
  font-size: 20px;
  display: inline-flex;
  padding: 10px;
  border-radius: 20px;
  color: #000;
  background-color: slategray;
  width: fit-content;
`;

export const SButtonRecipeDel = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 10px;
  color: lightgray;
  background-color: rgba(255, 0, 0, 0.7);
  transition: box-shadow .3s linear;
  &:hover{
    box-shadow: 1px 0 10px rgba(255, 0, 0, 0.9);
  }
`