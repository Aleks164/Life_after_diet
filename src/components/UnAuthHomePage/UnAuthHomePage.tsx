import React from "react";
import "./UnAuthPageStyle.css";

export const UnAuthHomePage = () => {
  return (
    <div className="unAuthHomePage">
      <div className="carusel">
        <button className="caruselButton leftButton">{"<"}</button>
        <div className="slide"></div>
        <button className="caruselButton rightButton">{">"}</button>
        <div className="historyLine"></div>
      </div>
    </div>
  );
};
