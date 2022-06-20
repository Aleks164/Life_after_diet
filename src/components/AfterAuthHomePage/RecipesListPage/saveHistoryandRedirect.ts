import { RedirectParamType } from "@/types/types";

export function saveHistoryandRedirect({
  title,
  image,
  id,
  сlientHistory,
  setClientHistory,
  navigate,
}: RedirectParamType) {
  const redirectTo = `/Life_after_diet/recipe/${id}`;
  const newHistory = {
    ...сlientHistory,
    [id]: { title, image, id, date: Date.now() },
  };

  if (setClientHistory) setClientHistory(newHistory);
  navigate(redirectTo);
}
