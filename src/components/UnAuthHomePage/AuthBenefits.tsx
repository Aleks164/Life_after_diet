import React from "react";
import { colorCreator } from "@/utils/colorCreator";
import { authBenefits } from "@/utils/authBenefits";
import { AuthBenefitsParamType } from "@/types/types";

export const AuthBenefits = ({
  caruselItemsList,
  curItem,
}: AuthBenefitsParamType) => (
  <>
    {caruselItemsList.map((color, index) => (
      <div key={index} className={colorCreator(color, index, curItem)}>
        <p>{authBenefits[index]}</p>
      </div>
    ))}
  </>
);
