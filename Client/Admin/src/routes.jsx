import {
  HomeIcon,
  UserGroupIcon,
  TicketIcon,
  ReceiptPercentIcon,
  CakeIcon,
  TableCellsIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import Rooms from "./pages/dashboard/Rooms";
import Staff from "./pages/dashboard/Staff";
import Food from "./pages/dashboard/Food";
import Reservation from "./pages/dashboard/Reservations";
import Offers from "./pages/dashboard/Offers";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        // Chamithara --Room managements
        icon: <TableCellsIcon {...icon} />,
        name: "Rooms management",
        path: "/rooms",
        element: <Rooms />,
      },
      {
        // Sakya --staff managements
        icon: <UserGroupIcon {...icon} />,
        name: "Staff Management",
        path: "/staff",
        element: <Staff />,
      },
      {
        // Randika --Food Managements
        icon: <CakeIcon {...icon} />,
        name: "Food management",
        path: "/food",
        element: <Food />,
      },
      {
        // Ravindu --Reservation Management
        icon: <TicketIcon {...icon} />,
        name: "Reservation Management",
        path: "/reservation",
        element: <Reservation />,
      },
      {
        // Thisarani --Manage Special Offers
        icon: <ReceiptPercentIcon {...icon} />,
        name: "Manage Special Offers",
        path: "/offers",
        element: <Offers />,
      },
      /* {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      }, */
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      /* {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      }, */
    ],
  },
];

export default routes;
