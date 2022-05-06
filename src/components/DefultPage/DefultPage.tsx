import React from "react";
import { Image } from "../image";
import { Paragraph } from "../paragraph";
import { Title } from "../title";
import { Hr } from "../hr";
import { HSelector } from "../htags";

export const textP =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt tempora repellendus ea commodi repellat accusamus nostrum ipsam repudiandae odio? Dolore libero quisquam blanditiis officiis ipsa nobis ullam quod, accusamus quia.";

export const DefultPage = () => (
  <>
    <Title />
    <Hr />
    <HSelector value={"h1"} />
    <Hr />
    <Paragraph textP={textP} />
    <Hr />
    <Image floating={"left"} />
  </>
);
