import topUp from "../../assets/top up.svg";
import transfer from "../../assets/transfer.svg";

const Balance = () => {
  return (
    <div className="balance flex">
      <h2>Your Balance</h2>
      <div className="show-balance flex">
        <div className="fig flex">
          <p>Balance</p>
          <p>$12.000</p>
        </div>
        <div className="top-up">
          <img src={topUp} alt="top-up icon" />
          <p>Top up</p>
        </div>
        <div className="transfer">
          <img src={transfer} alt="transfer icon" />
          <p>Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
