import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SellIcon from "@mui/icons-material/Sell";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PathRoutes } from "../../utils/path.utils";

export const menuItems = [
  {
    name: "Dashboard",
    icon: (
      <>
        <DashboardIcon />
      </>
    ),
    path: PathRoutes.DASHBOARD,
  },
  {
    name: "Users",
    icon: (
      <>
        <GroupIcon />
      </>
    ),
    path: PathRoutes.USERS,
  },
  {
    name: "Products",
    icon: (
      <>
        <InventoryIcon />
      </>
    ),
    path: PathRoutes.PRODUCTS,
  },
  {
    name: "Orders",
    icon: (
      <>
        <LocalShippingIcon />
      </>
    ),
    path: PathRoutes.ORDERS,
  },
  {
    name: "Charts",
    icon: (
      <>
        <EqualizerIcon />
      </>
    ),
    path: PathRoutes.CHARTS,
  },
  {
    name: "Promotions",
    icon: (
      <>
        <SellIcon />
      </>
    ),
    path: PathRoutes.PROMOTIONS,
  },
  {
    name: "Notification",
    icon: (
      <>
        <NotificationsIcon />
      </>
    ),
    path: PathRoutes.NOTIFICATION,
  },
  {
    name: "Profile",
    icon: (
      <>
        <AccountCircleIcon />
      </>
    ),
    path: PathRoutes.PROFILE,
  },
];
