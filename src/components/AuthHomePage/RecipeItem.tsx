import React from "react";

type PropsType = { title: string; image: string; id: number };

export const RecipeItem = ({ title, image, id }: PropsType) => {
  function findById() {
    console.log(id);
  }
  return (
    <div className="recipeItem">
      <button onClick={findById}>Show this recip</button>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
