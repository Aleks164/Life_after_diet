import React from "react";

type SetCurMarkbookType = { setCurMarkbook: React.Dispatch<React.SetStateAction<string>> }

export const Markbooks = ({ setCurMarkbook }: SetCurMarkbookType) => (
    <div className="markbooks">
        <button onClick={() => setCurMarkbook("Main")}>Diets...</button>
        <button onClick={() => setCurMarkbook("Cuisines")}>
            Cuisines...
        </button>
        <button onClick={() => setCurMarkbook("Intolerances")}>
            Intolerances...
        </button>
    </div>
);

