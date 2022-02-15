import React, {useState} from "react";
import "./menu.scss";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import CloseIcon from "../../assets/svg/close.svg"
import MenuIcon from "../../assets/svg/menu.svg";
import menuList from "./config";

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="menuWrapper">
      <img src={Logo} className="logo" alt="Age Of Empires Logo" onClick={() => navigate("/")}/>
      <div className="menuContainer">
        {menuList?.map(menuItem => (
          <Link key={menuItem?.id} to={menuItem?.link}>{menuItem?.name}</Link>
        ))}
      </div>
      {menuActive ? (
        <img className="menuCloseIcon" src={CloseIcon} alt="Close Icon" onClick={() => setMenuActive(false)} />
      ) : (
        <img className="hamburgerIcon" src={MenuIcon} alt="Menu Icon" onClick={() => setMenuActive(true)} />
      )}
      <div className={`mobileMenu${menuActive ? " menuActive" : ""}`}>
        {menuList?.map(menuItem => (
          <Link key={menuItem?.id} to={menuItem?.link}>{menuItem?.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
