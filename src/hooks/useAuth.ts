import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

export function useAuth() {
  return useContext(AuthContext);
}
