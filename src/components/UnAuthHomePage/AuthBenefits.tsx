import React from "react";
import { getClassNameForCaruselItem } from "../../utils/getClassNameForCaruselItem";
import { authBenefits } from "../../utils/authBenefits";
import { AuthBenefitsParamType } from "../../types/types";

export const AuthBenefits = ({
  caruselItemsList,
  curItem,
}: AuthBenefitsParamType) => (
  <>
    {caruselItemsList.map((color, index) => (
      <div
        key={index}
        className={getClassNameForCaruselItem(color, index, curItem)}
      >
        <p>{authBenefits[index]}</p>
      </div>
    ))}
  </>
);
