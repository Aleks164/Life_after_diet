import { useContext } from "react";
import { ClientSettingsContext } from "../ClientSettingsProvider/ClientSettingsProvider";

export function useClientSettings() {
  return useContext(ClientSettingsContext);
}
