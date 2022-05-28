import React from "react";

type IconPropsType = { diets: string[], veryHealthy: boolean };

export const Icons = ({ diets, veryHealthy }: IconPropsType) => <div className="iconCont">{veryHealthy ? <div title="very healthy" className="healthyIcon"></div> : ""}{diets.map((diet, index) => <div key={index} title={diet} className={diet.toLowerCase().replace(/ /gi, "")}></div>)}</div>