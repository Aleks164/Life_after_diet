import React from "react";

type SetCurMarkbookType = {
  setCurMarkbook: React.Dispatch<React.SetStateAction<string>>;
};

export const Markbooks = ({ setCurMarkbook }: SetCurMarkbookType) => (
  <div className="markbooks">
    <button
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Main", curInformation: null })
      }
    >
      Diets...
    </button>
    <button
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Cuisines", curInformation: null })
      }
    >
      Cuisines...
    </button>
    <button
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Intolerances", curInformation: null })
      }
    >
      Intolerances...
    </button>
  </div>
);
