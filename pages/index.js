import Barber from "./Barber";
import Dashboard from "./Dashboard";
import Detail from "./Detail";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Reviews from "./Reviews";

export const authPages = [
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Register",
    component: Register,
  },
];

const pages = [
  {
    name: "Dashboard",
    component: Dashboard,
  },
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Detail",
    component: Detail,
  },
  {
    name: "Reviews",
    component: Reviews,
  },
  {
    name: "Barber",
    component: Barber,
  },
];

export default pages;
