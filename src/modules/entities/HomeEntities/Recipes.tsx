import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useRecipesStore} from "../../../app/repository/store";
import {RecipeItem} from './Recipe';
import {SRecipesList} from "./StyledComponents";

export const Recipes = () => {
    const refList = useRef<HTMLDivElement>(null);
    const recipes = useRecipesStore((state) => state.recipes);

    const [isBottom, setIsBottom] = useState(false);
    const [isTop, setIsTop] = useState(true);

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(15);

    const renderRecipes = useMemo(() => recipes.slice(start, end), [recipes, start, end]);

    const handleScroll = useCallback(() => {
        const element = refList.current;
        if (!element) return;

        const elementRect = element.getBoundingClientRect();
        const clientHeight = window.innerHeight;

        if (elementRect.bottom <= clientHeight) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }

        if (elementRect.top >= 0) {
            setIsTop(true)
        } else {
            setIsTop(false)
        }

    }, []);

    useEffect(() => {
        if (isTop && start > 0) {
            setStart(start => start - 5);
            setEnd(end => end - 5)
        }
    }, [isTop, end]);


    useEffect(() => {
        if (isBottom && end < recipes.length) {
            setStart(start => start + 5);
            setEnd(end => end + 5)
        } else if (isBottom && (end === recipes.length)) {
            return;
        }
    }, [isBottom]);


    useEffect(() => {
        const element = refList.current;
        if (!element) return;

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <SRecipesList ref={refList}>
                {renderRecipes.length > 0 && renderRecipes.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe}/>
                ))}
            </SRecipesList>
        </>
    );
};
