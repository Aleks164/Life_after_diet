import React from "react";
import { IsAuthType } from "../../types/types";
import { AuthHomePage } from "../AuthHomePage/AuthHomePage";
import { UnAuthHomePage } from "../UnAuthHomePage/UnAuthHomePage";

export const HomePageSwitcher = ({ isAuth }: IsAuthType) => (
    <>{!isAuth ? (
        <UnAuthHomePage />) : (<AuthHomePage />)}</>

);
