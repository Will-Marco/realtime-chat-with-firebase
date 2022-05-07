import Chat from "./components/Chat";
import Login from "./components/Login";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./util/const";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
];
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    component: Chat,
  },
];
