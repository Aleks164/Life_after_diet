import React from "react";

type SummaryTextType = {
  summary: string;
};

export const SummaryText = ({ summary }: SummaryTextType) => {
  const scrFilted = summary.replace(/<a.+?>/gi, "");
  const aTegfilted = scrFilted.replace(/<\/a>/gi, "");
  const innerHtml = { __html: aTegfilted };
  return <p className="recipeSummary" dangerouslySetInnerHTML={innerHtml}></p>;
};
