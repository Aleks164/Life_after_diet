import React from "react";

type SummaryTextType = {
    summary: string
}

export const SummaryText = ({ summary }: SummaryTextType) => {
    const scrFilted = summary.replace(/<a.+?>/ig, "");
    const aTegfilted = scrFilted.replace(/<\/a>/ig, "");
    const innerHtml = { __html: aTegfilted }
    return <p className="recipeSummary" dangerouslySetInnerHTML={innerHtml}></p>
}