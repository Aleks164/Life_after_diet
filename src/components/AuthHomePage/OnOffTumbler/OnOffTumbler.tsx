import React from "react";
import { tumblerParamFunction } from "../../../types/types";
import "./index.css";

type OnOffTumblerParam = {
    onDragStartFunction: tumblerParamFunction, onClickFunction: tumblerParamFunction,
    checkParam: string
}

export const OnOffTumbler = ({ onDragStartFunction, onClickFunction, checkParam }: OnOffTumblerParam) => {
    const tumblerClass =
        !checkParam ? `tumbler tumblerEnd` : `tumbler tumblerStart`;
    return (<div
        onDragStart={(e) => onDragStartFunction(checkParam, e)}
        className="tumblerCont"
        onClick={(e) => onClickFunction(checkParam, e)}
    >
        <p
            className={
                checkParam !== "" ? "tumblerOff tumblerHiden" : "tumblerOff"
            }
        >
            Off
        </p>
        <p
            className={
                checkParam === "" ? "tumblerOn tumblerHiden" : "tumblerOn"
            }
        >
            On
        </p>
        <div draggable="true" className={tumblerClass}></div>
    </div>
    )
}