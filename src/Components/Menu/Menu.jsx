import "./menu.css";

const Menu = ({ text, src, prices, times }) => {
  return (
    <div className="menu flex">
      <div className="flex">
        <img src={src} alt={`${text} icon`} />
        <div>
          <p className="text">{text}</p>
          <p className="times">x{times}</p>
        </div>
      </div>
      <p className="price">
        +<span className="currency">$</span>
        {prices}
      </p>
    </div>
  );
};

export default Menu;
