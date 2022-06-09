import React, { useEffect, useRef, useState } from "react";
import "./UnAuthPageStyle.css";

export const UnAuthHomePage = () => {
  const caruselItemsList = [
    "favourites",
    "сusines",
    "history",
    "configurator",
    "intolerance",
    "recipeList"
  ];

  const [curItem, setCurItem] = useState("favourites");
  const [animationDirection, setAnimationDirection] = useState("");
  const togleAnimation = useRef(null);
  function nextItem(step: number) {
    let newIndex = 0;
    const indexCurItem = caruselItemsList.indexOf(curItem);
    if (indexCurItem !== caruselItemsList.length - 1)
      newIndex = indexCurItem + step;
    if ((indexCurItem + step) < 0) newIndex = caruselItemsList.length - 1;
    if ((indexCurItem === caruselItemsList.length - 1) && step < 0) newIndex = indexCurItem + step;

    const direction = step < 0 ? "slideInRightMove" : "slideInLeftMove";
    // setAnimationDirection(direction);
    togleAnimation.current.classList.toggle(direction);
    setTimeout(() => {
      // setAnimationDirection("");
      togleAnimation.current.classList.toggle(direction);
      setCurItem(caruselItemsList[newIndex]);
    }, 500)
    console.log(caruselItemsList[newIndex]);
  }

  const slideAndItem = `${curItem} slide ${animationDirection}`;
  // useEffect(() => {
  //   setTimeout(() => {
  //     nextItem(1)
  //     console.log("ssss");
  //   }, 6000);
  // }, []);

  return (
    <div className="unAuthHomePage">
      <div className="carusel">
        <button onClick={() => { nextItem(-1) }} className="caruselButton leftButton">{"<"}</button>
        <div ref={togleAnimation} className={slideAndItem}></div>
        <button onClick={() => { nextItem(1) }} className="caruselButton rightButton">{">"}</button>
        <div className="historyLine">
          {caruselItemsList.map((_, index) => (
            <div
              key={index}
              className={
                caruselItemsList.indexOf(curItem) === index
                  ? "activeItem"
                  : "unActiveItem"
              }
              onClick={() => setCurItem(caruselItemsList[index])}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
