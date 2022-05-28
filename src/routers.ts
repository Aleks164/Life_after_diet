import { CostAcc } from "./components/CostAcc/CostAcc";
import { Login } from "./components/AuthPage/Login/Login";
import { LOGGED_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const publicRout = [{
    path: LOGIN_ROUTE,
    Component: Login
}];
export const privateRout = [{
    path: LOGGED_ROUTE,
    Component: CostAcc
}];
