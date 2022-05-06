import React from "react";
import { DietList } from "../../utils/consts";

export const DietSelecror = () => (
  <form className="dietSelecror">

    <label>
      Сhoose a diet
      <select name="dietSelecror">
        {DietList.map((diet, index) => (
          <option
            key={index}
            value={diet.toLocaleLowerCase().replace(" ", "%20")}
          >
            {diet}
          </option>
        ))}
      </select>
    </label>
  </form>
);
