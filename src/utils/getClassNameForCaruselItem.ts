export function getClassNameForCaruselItem(
  newcolor: string,
  index: number,
  curItem: number
) {
  if (curItem === index) return `slide ${newcolor}`;
  return `slide slideHiden ${newcolor}`;
}
