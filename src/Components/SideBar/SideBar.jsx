import "./sidebar.css";

import SideBarNav from "../SideBarNav/SideBarNav";
import Balance from "../Balance/Balance";
import Address from "../Address/Address";
import OrderMenu from "../Order Menu/OrderMenu";

const SideBar = () => {
  return (
    <>
      <aside>
        <SideBarNav />
        <Balance />
        <Address />
        <OrderMenu />
      </aside>
    </>
  );
};

export default SideBar;
