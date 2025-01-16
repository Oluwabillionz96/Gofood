import like from "../../assets/like.svg";
import rating from "../../assets/rating.svg";
import "./popularcard.css";
import add from "../../assets/add.svg";

const PopularCard = ({ src, name }) => {
  return (
    <div className="popularCard flex">
      <div className="percent-Off">15% Off</div>
      <img src={like} alt="like icon" />
      <img src={src} alt={`${name} image`} className="main-img" />
      <div className="details flex">
        <img src={rating} alt="rating icon" />
        <p className="foodName">{name}</p>
        <p className="price">
          <span className="currency">$</span>5.59
        </p>
      </div>
      <img src={add} alt="add icon" className="add" />
    </div>
  );
};

export default PopularCard;
