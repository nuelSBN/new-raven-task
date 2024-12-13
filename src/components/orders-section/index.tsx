import "./index.css";

export default function OrderSection() {
  return (
    <div className="orders_section">
      <div className="orders_section-tab">
        <div className="orders_section-links active">Open Orders</div>
        <div className="orders_section-links">Position</div>
        <div className="orders_section-links">Order History</div>
        <div className="orders_section-links">Trade History</div>
      </div>
      <div className="orders_section-content">
        <h1>No Open Orders</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Id pulvinar nullam sit imperdiet <br />
          pulvinar.
        </p>
      </div>
    </div>
  );
}
