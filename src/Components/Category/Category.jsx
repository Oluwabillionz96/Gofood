import CategoryCard from "../CategoryCard/CategoryCard";
import "./category.css";
import bakery from "../../assets/bakery.svg";
import burger2 from "../../assets/burger2.svg";
import beverage from "../../assets/beverage.svg";
import chicken from "../../assets/chicken.svg";
import pizza2 from "../../assets/pizza2.svg";
import seaFood from "../../assets/seaFood.svg";
import SectionHeader from "../SectionHeader/SectionHeader";

const Category = () => {
  return (
    <div className="category">
      <SectionHeader title="Category" />
      <div className="category-container flex">
        <CategoryCard src={bakery} name="Bakery" />
        <CategoryCard src={burger2} name="Burger" />
        <CategoryCard src={beverage} name="Beverage" />
        <CategoryCard src={chicken} name="Chicken" />
        <CategoryCard src={pizza2} name="Burger" />
        <CategoryCard src={seaFood} name="Burger" />
      </div>
    </div>
  );
};

export default Category;
