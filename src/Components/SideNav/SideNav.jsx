import logo from "../../assets/logo.svg";
import Navs from "../Navs/Navs";
import boardIcon from "../../assets/dashboard.svg";
import foodOrder from "../../assets/food order.svg";
import favourite from "../../assets/favourite.svg";
import message from "../../assets/message.svg";
import history from "../../assets/history.svg";
import bills from "../../assets/bills.svg";
import settings from "../../assets/settings.svg";
import dottedPattern from "../../assets/dotted pattern.svg";
import "./sidenav.css";

const SideNav = () => {
  return (
    <>
      <div className="sideNav nav">
        <div className="container flex">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigations flex">
            <Navs src={boardIcon} text="Dashboard" />
            <Navs src={foodOrder} text="Food Order" />
            <Navs src={favourite} text="Favourite" />
            <Navs src={message} text="Message" />
            <Navs src={history} text="History" />
            <Navs src={bills} text="Bills" />
            <Navs src={settings} text="Settings" />
          </div>
          <div className="upgrade ">
            <p className="message">
              Upgrade your <br /> Account to Get Free Voucher
            </p>
            <img src={dottedPattern} alt="pattern" className="pattern" />
            <button>Upgrade</button>
            <div className="pattern"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
