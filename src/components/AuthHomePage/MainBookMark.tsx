import React, { ChangeEvent, useState } from "react";
import { RecipeItem } from "./RecipeItem";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";
import { DietSelecror } from "./DietSelector";

import { DietResponsType } from "../../types/types";

export const MainBookMark = () => {
  const [switch, setDietDefenition] = useState(0);


  return (
    <div className="recipeList">
      <DietSelecror />
      <div className="dietDefinitions"><h2>Diet Definitions</h2>

      </div>
      <div className="recipeConteiner">
        {tempData.map((el) => (
          <RecipeItem
            key={el.id.toString()}
            title={el.title}
            image={el.image}
          />
        ))}
      </div>
    </div>
  )
};
