import React, { useEffect, useState } from "react";
import { DietDefenitionType, DietParamType } from "../../types/types";
import { DietList, DietDefenition } from "../../utils/consts";

export const DietSelector = ({ settings, setRequestSettings }: DietParamType) => {
  const [dietDefenition, setDietDefenition] = useState(0);
  function chooseOption(e: React.ChangeEvent<HTMLSelectElement>) {
    setDietDefenition((e.target as HTMLSelectElement).selectedIndex);
    const newDiet = { ...settings, dietSelector: { diet: (e.target).value } }
    setRequestSettings(newDiet);
  }
  useEffect(() => {
    setDietDefenition(DietList.indexOf(settings.dietSelector.diet))
  }, [settings.dietSelector.diet]);

  return (
    <div className="dietSelector">
      <form >
        <label>
          Сhoose a diet
          <select value={settings.dietSelector.diet} onChange={chooseOption} name="dietSelector">
            {DietList.map((dietName, index) => (
              <option
                key={index}
                value={dietName}
              >
                {dietName}
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
