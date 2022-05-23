/* eslint-disable arrow-body-style */
import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { RecipeItemType } from "../../../types/types"
import { RecipeList } from "./RecipeList"

interface Location {
    state: { recipeInfo: { results: RecipeItemType[] } }
}

export const RecipesListPage = () => {
    const location = useLocation();
    const recipeInfo = (location as Location).state?.recipeInfo.results;
    console.log("recipeInfo", recipeInfo);
    if (!recipeInfo) return <Navigate to="/" />
    return (<><h3 className="markbooks">Recipe book</h3>
        <RecipeList recipeInfo={recipeInfo} /></>)
}