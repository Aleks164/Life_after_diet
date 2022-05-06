import React from "react";
import { RecipeItem } from "./RecipeItem";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";
import { DietSelecror } from "./DietSelecror";
import { DietResponsType } from "../../types/types";

export const RecipeList = () => (
  <div className="recipeList">
    <DietSelecror />
    <div className="dietDefinitions"><h2>Diet Definitions</h2>

      <h3>Gluten Free</h3>
      <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p>

      <h3>Ketogenic</h3>
      <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>

      <h3>Vegetarian</h3>
      <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>

      <h3></h3>Lacto-Vegetarian
      <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>

      <h3></h3>Ovo-Vegetarian
      <p></p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.

      <h3></h3>Vegan
      <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>

      <h3></h3>Pescetarian
      <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>

      <h3>Paleo</h3>
      <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p></div>
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
);
