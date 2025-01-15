import "./ads.css";
import woman from "../../assets/image.png";
const Ads = () => {
  return (
    <div className="ads flex">
      <div className="ads-text flex">
        <p className="offer">
          Get Discount Voucher <br /> Up To 20%
        </p>
        <p className="offer-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="ads-img">
        <img
          src={woman}
          alt="a smiling woman holding up in  her hands pink doughts"
        />
      </div>
    </div>
  );
};

export default Ads;
