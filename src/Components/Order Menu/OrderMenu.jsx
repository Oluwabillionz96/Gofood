import Menu from "../Menu/Menu";
import pizza from "../../assets/pizza.svg";
import burger from "../../assets/burger.svg";
import vegan from "../../assets/vegan.svg";
import "./ordermenu.css";
import coupon from "../../assets/coupon.svg";

const OrderMenu = () => {
  return (
    <div className="orderMenu">
      <h2>Order Menu</h2>
      <div className="container flex">
        <Menu src={pizza} text="Pepperoni Pizza" times={1} prices={5.59} />
        <Menu src={burger} text="Cheese Burger" times={1} prices={5.59} />
        <Menu src={vegan} text="Vegan Pizza" times={1} prices={5.59} />
      </div>
      <div className="space"></div>
      <div className="charges flex">
        <div className="services flex">
          <p className="title">Service</p>
          <p>
            +<span className="currency">$</span>1.00
          </p>
        </div>
        <div className="total-container flex">
          <p className="total">Total</p>
          <p>
            <span className="currency">$</span>202.00
          </p>
        </div>
      </div>
      <div className="btns-container flex">
        <button className="flex">
          <img src={coupon} alt="coupon-icon" />
          <p>Have a coupon code?</p>
          <span>{">"}</span>
        </button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default OrderMenu;
