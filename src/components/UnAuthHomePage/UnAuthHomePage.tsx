import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { caruselItemsList } from "@/utils/backgraundClasses";
import { LeftRightSliderButton } from "./LeftRightSliderButton";
import { HistoryLine } from "./HistoryLine";
import { AuthBenefits } from "./AuthBenefits";
import { nextItem } from "./nextItem";
import { LOGIN_ROUTE } from "@/utils/routes";
import "./UnAuthPageStyle.css";

export const UnAuthHomePage = () => {
  const [curItem, setCurItem] = useState(0);
  const [isPresed, setIsPresed] = useState(false);
  const togleAnimation = useRef(null);

  const nextItemParam = {
    curItem,
    setCurItem,
    setIsPresed,
    togleAnimation,
    caruselItemsList,
  };

  useEffect(() => {
    const caruselLoop = setInterval(() => {
      nextItem(1, nextItemParam);
    }, 10000);
    return () => {
      clearInterval(caruselLoop);
    };
  }, [curItem]);

  return (
    <div className="unAuthHomePage">
      <h2>
        <Link to={LOGIN_ROUTE}>Log in</Link> and you will be able to
      </h2>
      <div ref={togleAnimation} className="carusel">
        <LeftRightSliderButton
          isPresed={isPresed}
          nextItemParam={nextItemParam}
          nextItem={nextItem}
          direction={-1}
          buttonType={"leftButton"}
        >
          {"<"}
        </LeftRightSliderButton>
        <AuthBenefits
          caruselItemsList={caruselItemsList}
          curItem={curItem}
        ></AuthBenefits>
        <LeftRightSliderButton
          isPresed={isPresed}
          nextItemParam={nextItemParam}
          nextItem={nextItem}
          direction={1}
          buttonType={"rightButton"}
        >
          {">"}
        </LeftRightSliderButton>
      </div>
      <HistoryLine
        caruselItemsList={caruselItemsList}
        isPresed={isPresed}
        curItem={curItem}
        nextItem={nextItem}
        nextItemParam={nextItemParam}
      ></HistoryLine>
    </div>
  );
};
