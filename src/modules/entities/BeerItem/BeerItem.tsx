import {SContainer} from 'modules/UIKit/SContainer';
import React from 'react';
import {useLocation} from "react-router";
import {INewRecipe} from "../../../app/repository/IRecipes";
import {
    SBeer,
    SBeerBody,
    SBeerDesc,
    SBeerImg,
    SBeerInfo,
    SBeerTitle,
    SIngredientsBody,
    SIngredientsTitle
} from "./StyledComponents";

interface ILocationParams {
    pathname: string;
    state: {
        recipe: INewRecipe
    };
    search: string;
    hash: string;
    key: string;
}

export const BeerItem = () => {
    const location = useLocation() as ILocationParams;
    const {recipe} = location.state;

    return (
        <SContainer>
            <SBeer>
                <SBeerTitle>{recipe.name}</SBeerTitle>
                <SBeerBody>
                    <SBeerImg>
                        <img src={recipe.image_url} alt={recipe.name}/>
                    </SBeerImg>
                    <SBeerInfo>
                        <SBeerDesc>DESCRIPTION: <br/> {recipe.description}</SBeerDesc>
                        <SIngredientsBody>
                            <SIngredientsTitle>INGREDIENTS:</SIngredientsTitle>
                            {recipe.ingredients.malt.map((malt,index) => (
                                <li key={index}>
                                    {malt.name}: {malt.amount.value} {malt.amount.unit}
                                </li>
                            ))}
                            {recipe.ingredients.hops.map((hop,index) => (
                                <li key={index}>
                                    {hop.name}: {hop.amount.value} {hop.amount.unit} - {hop.attribute}
                                </li>
                            ))}
                            <li>Yeast: {recipe.ingredients.yeast}</li>
                        </SIngredientsBody>
                    </SBeerInfo>
                </SBeerBody>
            </SBeer>
        </SContainer>
    );
};
