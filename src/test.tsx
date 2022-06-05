import React from "react";
import { Crud } from "./firebase_init/FBInterface";

export const Test = () => {
  const newCrud = new Crud();
  async function test() {
    await newCrud.createData("test", { test: "test" });
  }

  return <button onClick={test}>button</button>;
};
