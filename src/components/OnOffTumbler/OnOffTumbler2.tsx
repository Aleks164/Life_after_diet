import React from "react";
import { tumblerParamFunction } from "../../types/types";
import "./index.css";

type OnOffTumblerParam = {
    onDragStartFunction: tumblerParamFunction, onClickFunction: tumblerParamFunction,
    tumblerStatus: boolean
}

const tumblerStart = {
    "backgroundColor": "rgb(13, 141, 4)",
    "left": "2px"
}
const tumblerEnd = {
    "backgroundColor": "red",
    "left": "60%",
}
const tumblerOff = {
    "left": "1px",
}
const tumblerOn = {
    "right": "3px",
}
const tumblerHiden = {
    "visibility": "hidden",
}


export const OnOffTumbler = ({ onDragStartFunction, onClickFunction, tumblerStatus }: OnOffTumblerParam) => (<div
    onDragStart={(e) => onDragStartFunction(tumblerStatus, e)}
    className="tumblerCont"
    onClick={(e) => onClickFunction(tumblerStatus, e)}
>
    <p
        className={"tumblerCircle"}
        style={tumblerStatus ? { ...tumblerOff, ...tumblerHiden } : tumblerOff}
    >
        Off
    </p>
    <p
        className={"tumblerCircle"}
        style={!tumblerStatus ? { ...tumblerOn, ...tumblerHiden } : tumblerOn}

    >
        On
    </p>
    <div draggable="true" style={!tumblerStatus ? tumblerEnd : tumblerStart} className={"tumbler"}></div>
</div>
)