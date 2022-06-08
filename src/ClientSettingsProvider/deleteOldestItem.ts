import { HistoryFavouriteTypes } from "../types/types";

export function deleteOldestItem(newList: HistoryFavouriteTypes) {
    const keysOfNewHistoryItem = Object.keys(newList);
    if (keysOfNewHistoryItem.length > 10) {
        const sortedHistory = Object.values(newList).sort((a, b) => a.data || 0 - (b.data || 0));
        const oldestItem = sortedHistory[0].id;
        delete newList[oldestItem];
    }
}