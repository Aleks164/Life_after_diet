import React from "react";
import { SetCurMarkbookType } from "../../types/types";

export const Markbooks = ({
  setCurMarkbook,
  curMarkbook
}: SetCurMarkbookType) => (
  <div className="markbooks">
    <button
      disabled={curMarkbook === "Main"}
      className={curMarkbook === "Main" ? "activeButton" : ""}
      onClick={() => setCurMarkbook("Main")}
    >
      Configurator
    </button>
    <button
      disabled={curMarkbook === "Cuisines"}
      className={curMarkbook === "Cuisines" ? "activeButton" : ""}
      onClick={() => setCurMarkbook("Cuisines")}
    >
      Cuisines
    </button>
    <button
      disabled={curMarkbook === "Intolerances"}
      className={curMarkbook === "Intolerances" ? "activeButton" : ""}
      onClick={() => setCurMarkbook("Intolerances")}
    >
      Intolerances
    </button>
    <button
      disabled={curMarkbook === "Diet definitions"}
      className={curMarkbook === "Diet definitions" ? "activeButton" : ""}
      onClick={() => setCurMarkbook("Diet definitions")}
    >
      Diet definitions
    </button>
  </div>
);
