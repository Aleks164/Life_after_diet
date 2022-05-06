import React from "react";

type PropsType = { title: string; image: string };

export const RecipeItem = ({ title, image }: PropsType) => (
  <div className="recipeItem">
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);
