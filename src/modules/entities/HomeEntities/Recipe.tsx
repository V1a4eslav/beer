import React, {memo,  useCallback, useEffect, useRef} from 'react';
import {INewRecipe} from "../../../app/repository/IRecipes";
import {
    SButtonRecipeDel,
    SRecipeAbv,
    SRecipeDesc,
    SRecipeFooter,
    SRecipeImage,
    SRecipeInfo,
    SRecipeItem,
    SRecipeTitle
} from "./StyledComponents";
import {useRecipesStore} from "../../../app/repository/store";
import {useNavigate} from "react-router";

interface Recipe {
    recipe: INewRecipe
}

export const RecipeItem = memo(({recipe}: Recipe) => {
    const navigate = useNavigate();
    const refItem = useRef<HTMLDivElement>(null);

    const toggleRecipeSelection = useRecipesStore((state) => state.toggleRecipeSelection);
    const removeRecipe = useRecipesStore(state => state.removeRecipe);

    const removeHandler = useCallback((event: any) => {
            event.stopPropagation();
            removeRecipe(recipe.id);
        }, [recipe.id]
    );

    const handlerNavigate = useCallback(() => {
        navigate(`/beer?=${recipe.name}`, {
            state: {
                recipe
            }
        });
    }, [navigate]);


    useEffect(() => {
        refItem?.current?.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            toggleRecipeSelection(recipe.id);
        });
    }, []);

    return (
        <SRecipeItem ref={refItem}
                     onClick={handlerNavigate}
                     marked={String(recipe.selected)}>
            <SRecipeImage>
                <img src={recipe.image_url} alt={recipe.name}/>
            </SRecipeImage>
            <SRecipeInfo>
                <SRecipeTitle>{recipe.name}</SRecipeTitle>
                <SRecipeDesc>{recipe.tagline}</SRecipeDesc>
                <SRecipeFooter>
                    <SRecipeAbv>{recipe.abv}Q</SRecipeAbv>
                    {recipe.selected &&
                        <SButtonRecipeDel onClick={removeHandler}>Remove Item</SButtonRecipeDel>}
                </SRecipeFooter>
            </SRecipeInfo>
        </SRecipeItem>
    );
});
