import React from "react";
import notification from "../../assets/notification.svg";
import asideSettings from "../../assets/aside settings.svg";
import food from "../../assets/food.svg";
import user from "../../assets/user.svg";

const SideBarNav = () => {
  return (
    <nav className="aside-nav flex">
      <div className="container flex">
        <div className="icons flex">
          <img src={food} alt="food icon" />
          <img src={notification} alt="notification icon" />
          <img src={asideSettings} alt="settings icon" />
        </div>
        <div className="user-profilr-icon">
          <img src={user} alt="users profile" />
        </div>
      </div>
    </nav>
  );
};

export default SideBarNav;
