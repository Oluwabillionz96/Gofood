import "./categorycard.css";

const CategoryCard = ({ src, name }) => {
  return (
    <div className="category-card flex">
      <img src={src} alt={`${name} icon`} />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
