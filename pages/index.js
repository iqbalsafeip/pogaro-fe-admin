import Barber from "./Barber";
import Dashboard from "./Dashboard";
import Detail from "./Detail";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Reviews from "./Reviews";
import Riwayat from "./Riwayat";

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
  {
    name : "Riwayat",
    component: Riwayat
  },
  {
    name: "Profile",
    component: Profile
  }
];

export default pages;
