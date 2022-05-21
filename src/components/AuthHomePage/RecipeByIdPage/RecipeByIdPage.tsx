import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { respons } from "../../../respons";
import { isLoadingType, RecipeInfoType, SettingType } from "../../../types/types";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { RecipePage } from "./RecipePage";


export async function spoon(id: string) {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
    // const fetchBody = `https://api.spoonacular.com/recipes/${id}/card?apiKey=${myKey}`;
    // const fetchBody = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${myKey}&stepBreakdown=true`;
    const fetchBody = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${myKey}`;

    try {

        const response = await window.fetch(
            fetchBody,
            options
        );
        const url = await response.json();
        return url;

    } catch (e) {
        console.log(e);
        return "https://spoonacular.com/url-to-generated-recipe-card.jpg";
    }
}

export const RecipeByIdPage = () => {
    const recipe = respons;
    // const [recipeUrl, setrecipeUrl] = useState("https://spoonacular.com/url-to-generated-recipe-card.jpg");
    const [isLoading, setIsLoading] = useState<isLoadingType>(false);
    // const { id } = useParams();
    // useEffect(() => {
    // if (id)
    //     spoon(id).then((response) => {
    //         console.log(response);
    // console.log("before", isLoading);
    // const response = { url: 'https://spoonacular.com/recipeCardImages/recipeCard-1652780524499.png' };
    // setrecipeUrl(response.url);
    // setTimeout(() => {
    //     setIsLoading(!isLoading);
    //     console.log("after", isLoading);
    // }, 1000)
    // });
    // }, [])


    return (<>{isLoading ? (<div className="loadingPage"><LoadingPage /></div>) : ""}<RecipePage recipe={recipe.results[0]} /></>)
};
// https://api.spoonacular.com/recipes/794349/card?apiKey=2adf7e0ce3d8428f953f022f9543bb6f