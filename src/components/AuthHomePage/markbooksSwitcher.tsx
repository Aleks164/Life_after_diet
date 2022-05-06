import React from "react";
import { CuisinesListBookmark } from "./CuisinesListBookmark";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark";
import { DietSelector } from "./DietSelector";

export function markbooksSwitcher(markbookName: string) {
    switch (markbookName) {
        case "Main":
            return <DietSelector />;
        case "Cuisines":
            return <CuisinesListBookmark />;
        case "Intolerances":
            return <IntolerancesListBookmark />;
        default:
            return <DietSelector />;
    }
}