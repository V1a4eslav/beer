import {create} from 'zustand';
import {INewRecipe, IRecipe} from "./IRecipes";
import axios, {AxiosRequestConfig} from "axios";

interface IRecipesStore {
    recipes: INewRecipe[],
    isLoading: boolean,
    error: any,
    fetchRecipes: (string: string, options?: AxiosRequestConfig) => Promise<void>,
    toggleRecipeSelection: (recipeId: number) => void,
    removeRecipe: (recipeId: number) => void,
}

export const useRecipesStore = create<IRecipesStore>((set, get) => ({
    recipes: [],
    isLoading: false,
    error: null,
    fetchRecipes: async (string, options) => {
        set({isLoading: true});
        try {
            const response = await axios.get(string, options);
            const changedResponse = response.data.map((recipe: IRecipe) => ({
                ...recipe,
                selected: false
            }))
            set({recipes: changedResponse, error: null});
        } catch (error: any) {
            set({error: error?.message})
        } finally {
            set({isLoading: false})
        }
    },
    toggleRecipeSelection: (recipeId: number) => {
        set(state => {
            const updatedRecipes = state.recipes.map(recipe => {
                if (recipe.id === recipeId) {
                    return {
                        ...recipe,
                        selected: !recipe.selected,
                    };
                }
                return recipe;
            });
            return {
                recipes: updatedRecipes,
                isLoading: state.isLoading,
                error: state.error,
            };
        })
    },
    removeRecipe: (recipeId: number) => {
        set(state => {
            const updateRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
            return {
                ...state,
                recipes: updateRecipes
            }
        })
    }
}));
