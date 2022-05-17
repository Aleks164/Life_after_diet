import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isLoadingType, RecipeInfoType, SettingType } from "../../types/types";
import { LoadingPage } from "./LoadingPage/LoadinfPage";



export async function spoon(id: string) {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
    const fetchBody = `https://api.spoonacular.com/recipes/${id}/card?apiKey=${myKey}`;

    try {
        if (typeof id === "string") {
            const response = await window.fetch(
                fetchBody,
                options
            );
            const url = await response.json();
            return url;
        }
        return "https://spoonacular.com/url-to-generated-recipe-card.jpg";
    } catch (e) {
        console.log(e);
        return "https://spoonacular.com/url-to-generated-recipe-card.jpg";
    }
}

export const RecipeByIdPage = () => {
    const [recipeUrl, setrecipeUrl] = useState("https://spoonacular.com/url-to-generated-recipe-card.jpg");
    const [isLoading, setIsLoading] = useState<isLoadingType>(true);
    const { id } = useParams();
    useEffect(() => {
        // if (id)
        // spoon(id).then((response) => {
        //     console.log(response);
        console.log("before", isLoading)
        const response = { url: 'https://spoonacular.com/recipeCardImages/recipeCard-1652780524499.png' };
        setrecipeUrl(response.url);
        setTimeout(() => {
            setIsLoading(!isLoading);
            console.log("after", isLoading)
        }, 1000)
        // });
    }, [])


    return (<>{isLoading ? (<div className="loadingPage"><LoadingPage /></div>) : ""}<img className="dietSelector" src={recipeUrl} /></>)
};
// https://api.spoonacular.com/recipes/794349/card?apiKey=2adf7e0ce3d8428f953f022f9543bb6f