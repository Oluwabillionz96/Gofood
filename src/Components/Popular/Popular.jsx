import PopularCard from "../PopularCard/PopularCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./popular.css";
import fishBurger from "../../assets/fishBurger.svg";
import beefBurger from "../../assets/beefBurger.svg";
import cheeseBurger from "../../assets/cheeseBurger.svg";
const Popular = () => {
  return (
    <div className="popular">
      <SectionHeader title="Popular Dishes" />
      <div className="popular-container flex">
        <PopularCard src={fishBurger} name="Fish Burger" />
        <PopularCard src={beefBurger} name="Beef Burger" />
        <PopularCard src={cheeseBurger} name="Cheese Burger" />
      </div>
    </div>
  );
};

export default Popular;
