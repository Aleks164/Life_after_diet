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
      className={curMarkbook === "Main" ? "activeButton" : ""}
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Main", curInformation: "" })
      }
    >
      Diets...
    </button>
    <button
      disabled={curMarkbook === "Cuisines"}
      className={curMarkbook === "Cuisines" ? "activeButton" : ""}
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Cuisines", curInformation: "" })
      }
    >
      Cuisines...
    </button>
    <button
      disabled={curMarkbook === "Intolerances"}
      className={curMarkbook === "Intolerances" ? "activeButton" : ""}
      onClick={() =>
        setCurMarkbook({ curMarkbook: "Intolerances", curInformation: "" })
      }
    >
      Intolerances...
    </button>
  </div>
);
