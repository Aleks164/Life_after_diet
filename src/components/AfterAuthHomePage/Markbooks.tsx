import React from "react";

type markBookType = {
  curMarkbook: string;
  curInformation: string;
};

type SetCurMarkbookType = {
  setCurMarkbook: React.Dispatch<React.SetStateAction<markBookType>>;
  curMarkbook: string;
};

export const Markbooks = ({
  setCurMarkbook,
  curMarkbook
}: SetCurMarkbookType) => (
  <div className="markbooks">
    <button
      disabled={curMarkbook === "Main"}
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Main", curInformation: "" })
      }
    >
      Diets...
    </button>
    <button
      disabled={curMarkbook === "Cuisines"}
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Cuisines", curInformation: "" })
      }
    >
      Cuisines...
    </button>
    <button
      disabled={curMarkbook === "Intolerances"}
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Intolerances", curInformation: "" })
      }
    >
      Intolerances...
    </button>
  </div>
);
