import React, { ChangeEvent, useState } from "react";
import { DietList, DietDefenition } from "../../utils/consts";

type DietDefenitionType = { [item: number]: string };

export const DietSelector = () => {
  const [dietDefenition, setDietDefenition] = useState(0);
  function chooseOption(e: ChangeEvent) {
    setDietDefenition((e.target as HTMLSelectElement).selectedIndex)
  }

  return (
    <div className="dietSelector">
      <form >
        <label>
          Сhoose a diet
          <select onChange={chooseOption} name="dietSelector">
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
        <button type="submit">Finde recipes</button>
      </form>
      {<><h3>{DietList[dietDefenition]}</h3><p>{(DietDefenition as DietDefenitionType)[dietDefenition + 1]}</p></>}
    </div>
  )
};
