import { RedirectParamType } from "../../../types/types";

export function saveHistory({
  title,
  image,
  id,
  сlientHistory,
  setClientHistory,
}: RedirectParamType) {
  const newHistory = {
    ...сlientHistory,
    [id]: { title, image, id, date: Date.now() },
  };
  if (setClientHistory) setClientHistory(newHistory);
}
