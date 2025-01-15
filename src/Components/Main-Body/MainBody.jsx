import "./main.css";
import search from "../../assets/search.svg";
import Ads from "../Ads/Ads";

const MainBody = () => {
  return (
    <div className="mainbody flex">
      <div className="greet-and-search flex">
        <h1>Hello, John</h1>
        <div className="input">
          <img src={search} alt="search-icon" className="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="What do you want to eat today...?"
          />
        </div>
      </div>
      <Ads />
    </div>
  );
};

export default MainBody;
