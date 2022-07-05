import { HistoryFavouriteTypes } from "../types/types";

export function deleteOldestItem(newList: HistoryFavouriteTypes) {
  const keysOfNewHistoryItem = Object.keys(newList);
  if (keysOfNewHistoryItem.length > 10) {
    const sortedHistory = Object.values(newList).sort(
      (a, b) => (a.date || 0) - (b.date || 0)
    );
    const oldestItem = sortedHistory[0].id;
    delete newList[oldestItem];
  }
}
