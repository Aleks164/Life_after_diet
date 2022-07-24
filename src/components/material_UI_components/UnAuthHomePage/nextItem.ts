import { NextItemSliderParamType, StepType } from "@/types/types";

export function nextItem(
  step: StepType,
  {
    curItem,
    setCurItem,
    setIsPresed,
    togleAnimation,
    caruselItemsList,
  }: NextItemSliderParamType
) {
  const allColor = (
    togleAnimation.current as unknown as HTMLDivElement
  ).querySelectorAll(".slide");
  let newIndex = 0;
  if (typeof step === "number") {
    if (curItem + step <= caruselItemsList.length - 1)
      newIndex = curItem + step;
    if (curItem + step < 0) newIndex = caruselItemsList.length - 1;
  } else {
    step = step.index;
    newIndex = step;
  }
  allColor[newIndex].classList.toggle("slideHiden");
  if (step < 0 || (newIndex === step && curItem - step >= 1))
    allColor[curItem].classList.toggle("slideInLeftMove");
  else allColor[curItem].classList.toggle("slideInRightMove");
  allColor[newIndex].classList.toggle("moveToStart");
  setIsPresed(true);
  setTimeout(() => {
    allColor[newIndex].classList.toggle("moveToStart");
    allColor[curItem].classList.toggle("slideHiden");
    if (step < 0 || (newIndex === step && curItem - step >= 1))
      allColor[curItem].classList.remove("slideInLeftMove");
    else allColor[curItem].classList.remove("slideInRightMove");
    allColor[curItem].classList.remove("moveToStart");
    setIsPresed(false);
    setCurItem(newIndex);
  }, 1000);
}
