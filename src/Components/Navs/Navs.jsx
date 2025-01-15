import "./navs.css";

const Navs = ({ src, text }) => {
  return (
    <div className="nav-btns flex">
      <img src={src} alt={`${text} icon`} />
      <p>{text}</p>
    </div>
  );
};

export default Navs;
