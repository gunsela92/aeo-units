import React, {useEffect, useState} from "react";
import "./menu.scss";
import {Link, useLocation} from "react-router-dom";
import menuList from "./config";

const Menu = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const title = handlePageTitles()
    setPageTitle(title)
  }, [location]);

  const handlePageTitles = () => {
    return menuList?.find(e => e?.link === location?.pathname)?.title;
  }

  return (
    <div className="menuWrapper">
      <h3 className="pageTitle">{pageTitle}</h3>
      <div className="menuContainer">
        {menuList?.map(menuItem => (
          <Link key={menuItem?.id} to={menuItem?.link}>{menuItem?.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
