import React from "react";

type SinglStringChooseItemParamType = {
  label: string;
  content: string;
};

export const SinglStringChooseItem = ({
  label,
  content,
}: SinglStringChooseItemParamType) => (
  <div>
    <p>
      {label} {content}
    </p>
    <hr />
  </div>
);
