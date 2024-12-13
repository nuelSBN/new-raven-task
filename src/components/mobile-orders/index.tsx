import "./index.css";
import Button from "../button";
import rgb from "../../assets/rgb.svg";
import ggg from "../../assets/ggg.svg";
import rgg from "../../assets/rgg.svg";
import dropdown from "../../assets/dropdown.svg";
import arrowup from "../../assets/arrow-up.svg";

interface Props {
  setIsModalOpen: (value: boolean) => void;
  setModalType: (value: "buy" | "sell") => void;
}

export default function MobileOrders({ setIsModalOpen, setModalType }: Props) {
  return (
    <div className="orders-table">
      <div className="main_content-orders">
        <div className="main_content-orders-left">
          <button>
            <img src={rgb} alt="" />
          </button>
          <button>
            <img src={ggg} alt="" />
          </button>
          <button>
            <img src={rgg} alt="" />
          </button>
        </div>
        <div className="main_content-orders-right">
          <h1>10</h1>
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="orders-table-header">
        <div>
          <p className="">Price</p>
          <span>(USDT)</span>
        </div>
        <div>
          <p>Amounts</p>
          <span>(BTC)</span>
        </div>
        <div>
          <p>Total</p>
        </div>
      </div>

      <div className="orders-table-body">
        <div>
          <p>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
      </div>
      <div className="orders-order-price">
        <p>36,641.20</p>
        <img src={arrowup} alt="" />
        <p>36,641.20</p>
      </div>
      <div className="orders-table-body">
        <div>
          <p style={{ color: "#25C26E" }}>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p style={{ color: "#25C26E" }}>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p style={{ color: "#25C26E" }}>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p style={{ color: "#25C26E" }}>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
        <div>
          <p style={{ color: "#25C26E" }}>36920.12</p>
          <p>0.758965</p>
          <p>28,020.98</p>
        </div>
      </div>
      <div className="orders-action-btns">
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setModalType("buy");
          }}
          color={"#25c26e"}
          children={"Buy"}
        />
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setModalType("sell");
          }}
          color={"#ff554a"}
          children={"Sell"}
        />
      </div>
    </div>
  );
}
