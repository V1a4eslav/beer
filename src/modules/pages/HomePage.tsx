import React, {useEffect, useMemo, useState} from 'react';
import {SContainer} from "../UIKit/SContainer";
import {useRecipesStore} from "../../app/repository/store";
import {links} from "../../app/links/Links";
import {Recipes} from "../entities/HomeEntities/Recipes";


export const HomePage = () => {
    const [page, setPage] = useState<null|number>(null);

    const recipes = useRecipesStore((state) => state.recipes);
    const fetchRecipes = useRecipesStore((state) => state.fetchRecipes);

    useEffect(() => {
        if (page) {
            fetchRecipes(links.beer, {
                params: {
                    page: page,
                },
            });
        }
    }, [page]);

    useEffect(() => {
        if (!recipes.length) setPage(Number(page) + 1)
    }, [recipes.length]);


    return (
        <SContainer>
            <Recipes/>
        </SContainer>);
};