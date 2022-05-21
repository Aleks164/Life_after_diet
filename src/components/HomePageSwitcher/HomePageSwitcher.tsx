import React from "react";
import { IsAuthType } from "../../types/types";
import { AuthHomePage } from "../AuthHomePage/AuthHomePage";
import { RecipeByIdPage } from "../AuthHomePage/RecipeByIdPage/RecipeByIdPage";
import { UnAuthHomePage } from "../UnAuthHomePage/UnAuthHomePage";

export const HomePageSwitcher = ({ isAuth }: IsAuthType) => (
    <>{!isAuth ? (
        <RecipeByIdPage />) : (<AuthHomePage />)}</>

);
