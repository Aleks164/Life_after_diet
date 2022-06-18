import React, { useState } from "react";
import {
  BookmarkPropsType,
  IngridientsListType,
  InputParamType,
} from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";
import { addIngredientToList } from "./addIngredientToList";
import { deleteExcludeFromList } from "./deleteExcludeFromList";

export const ExcludeIngridientList = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const excludeIngridients = Object.keys(ingridientsList);
  const excludeIngridientStatus = settings.excludeIngridientsSelector.status;
  const excludeIngridientList =
    settings.excludeIngridientsSelector.excludeIngridients;
  const [ingridientInputValue, setIngridientInputValue] = useState("");
  const selectorParam = {
    isFieldAvailable: excludeIngridientStatus,
    settings,
    option: "excludeIngridientsSelector",
    optionType: "excludeIngridients",
    optionTypeValue: [],
    fullListOfIngridients: excludeIngridients,
    ingridientInputValue,
    setRequestSettings,
    setIngridientInputValue,
  } as InputParamType;

  return (
    <div className="ingridientsList">
      <label>
        Exclude ingredients
        <input
          disabled={!excludeIngridientStatus}
          autoComplete="off"
          value={ingridientInputValue}
          onChange={(e) => setIngridientInputValue(e.target.value)}
          type="text"
          list="ingridientsFullList"
        />
        <div>
          <button
            className="plusButton"
            onClick={(e) => {
              addIngredientToList(e, selectorParam);
            }}
          >
            +
          </button>
          <OnOffTumbler
            tumblerSwitcher={tumblerSwitcher}
            selectorParam={selectorParam}
          />
        </div>
      </label>
      <datalist id="ingridientsFullList">
        <>
          {excludeIngridients.map((ingridient, index) => (
            <option key={index} value={ingridient} />
          ))}
        </>
      </datalist>
      <ol hidden={!excludeIngridientStatus}>
        {excludeIngridientList.length !== 0 ? (
          <>
            {excludeIngridientList.map((ingridient) => (
              <div
                key={(ingridientsList as IngridientsListType)[ingridient].id}
              >
                <li>
                  {ingridient}
                  <button
                    className="deleteItemButton"
                    onClick={() =>
                      deleteExcludeFromList(ingridient, selectorParam)
                    }
                  >
                    <p>x</p>
                  </button>
                </li>
              </div>
            ))}
          </>
        ) : (
          <p>
            {
              "Here will be a list of ingredients that should not be in the recipe"
            }
          </p>
        )}
      </ol>
    </div>
  );
};
