import location from "../../assets/location.svg";
import "./address.css";

const Address = () => {
  return (
    <div className="address flex">
      <p className="address-header">Your address</p>
      <div className="flex place-holder">
        <p className="place">Elm Street</p>
        <img src={location} alt="location icon" />
        <button className="change-place">Change</button>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam
        possimus cum facere
      </p>
      <div className="buttons flex">
        <button>Add Details</button>
        <button>Add Note</button>
      </div>
    </div>
  );
};

export default Address;
