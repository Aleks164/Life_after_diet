import React, { useState } from "react";
import {
  BookmarkPropsType,
  IngridientsListType,
  InputParamType,
} from "@/types/types";
import { ingridientsList } from "@/utils/ingridientsList";
import { OnOffTumbler } from "@/components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";
import { addIngredientToList } from "./addIngredientToList";
import { deleteIngridientFromList } from "./deleteIngridientFromList";

export const IngridientsList = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const ingridients = Object.keys(ingridientsList);
  const ingridientStatus = settings.ingridientsSelector.status;
  const [ingridientInputValue, setIngridientInputValue] = useState("");

  const selectorParam = {
    isFieldAvailable: ingridientStatus,
    settings,
    option: "ingridientsSelector",
    optionType: "ingridients",
    optionTypeValue: [],
    fullListOfIngridients: ingridients,
    ingridientInputValue,
    setRequestSettings,
    setIngridientInputValue,
  } as InputParamType;

  return (
    <div className="ingridientsList">
      <label>
        Add ingridients
        <input
          disabled={!ingridientStatus}
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
          {ingridients.map((ingridient, index) => (
            <option key={index} value={ingridient} />
          ))}
        </>
      </datalist>
      <ol hidden={!ingridientStatus}>
        {settings.ingridientsSelector.ingridients.length !== 0 ? (
          <>
            {settings.ingridientsSelector.ingridients.map((ingridient) => (
              <div
                key={(ingridientsList as IngridientsListType)[ingridient].id}
              >
                <li>
                  {ingridient}
                  <button
                    className="deleteItemButton"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteIngridientFromList(ingridient, selectorParam);
                    }}
                  >
                    <p>x</p>
                  </button>
                </li>
              </div>
            ))}
          </>
        ) : (
          <p>
            {"Here will be a list of ingredients that should be in the recipe"}
          </p>
        )}
      </ol>
    </div>
  );
};
