import "./Sidebar.scss";
import Logo from "../../images/logosolutions.png";
import { menuItems } from "./data";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={Logo} alt="" />
      </div>
      <div className="mid">
        <ul>
          {menuItems.map((item) => {
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "navlink-active" : "navlink"
                }
              >
                {item.icon && item.icon}
                <li>{item.name}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <div className="wrapper-logout">
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
