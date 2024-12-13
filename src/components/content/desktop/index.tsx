import "./index.css";
import arrowup from "../../../assets/arrow-up-grey.svg";
import rgb from "../../../assets/rgb.svg";
import ggg from "../../../assets/ggg.svg";
import rgg from "../../../assets/rgg.svg";
import info from "../../../assets/info.svg";

import dropdown from "../../../assets/dropdown.svg";
import { useContent } from "../../../hooks/useContent";
import { useModal } from "../../../hooks/useModal";
import CandlestickComboChart from "../../candle-stick";
import OrderSection from "../../orders-section";

export default function DesktopContent() {
  const { activeTab, handleSwitchTab, setAmount, total } = useContent();
  const { modalType, setModalType, setIsModalOpen } = useModal();

  return (
    <section className="desktop_content">
      <div className="desktop_content-left">
        <div className="desktop_content-left-top">
          <div className="desktop_content-chart">
            <CandlestickComboChart />
          </div>
          <div className="desktop_content-readings">
            <div className="desktop_content-readings-tab">
              <div
                className={`${
                  activeTab === 2 && "active"
                }  desktop_content-readings-links orderbook`}
                onClick={() => handleSwitchTab(2)}
              >
                Orderbook
              </div>
              <div
                className={`${
                  activeTab === 3 && "active"
                }  desktop_content-readings-links recent-trade`}
                onClick={() => handleSwitchTab(3)}
              >
                Recent trades
              </div>
            </div>
            <div className="desktop_content-filters">
              <div className="desktop_content-filters-left">
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
              <div className="desktop_content-filters-right">
                <h1>10</h1>
                <img src={dropdown} alt="" />
              </div>
            </div>
            <div className="desktop_content-table-header">
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
            <div className="desktop_content-table-body">
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
            <div className="desktop_content-order-price">
              <p>36,641.20</p>
              <img src={arrowup} alt="" />
              <p>36,641.20</p>
            </div>
            <div className="desktop_content-table-body">
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
          </div>
        </div>
        <div className="desktop_content-left-bottom">
          <OrderSection />
        </div>
      </div>
      <div className="desktop_content-right">
        <div className="desktop_content-right-top">
          <button
            className={`${modalType === "buy" ? "active" : ""}`}
            onClick={() => setModalType("buy")}
          >
            buy
          </button>
          <button
            className={`${modalType === "sell" && "sell_active"}`}
            onClick={() => setModalType("sell")}
          >
            sell
          </button>
        </div>
        <div className="desktop_content-content-middle">
          <button className="active">Limit</button>
          <button>Market</button>
          <button>Stop-Limit</button>
        </div>
        <div className="form__control">
          <p>
            <span>Amount</span>
            <span>
              <img src={info} alt="" />
            </span>
          </p>
          <input
            type="text"
            placeholder="0.00USD"
            onChange={(e) => setAmount(+e.target.value)}
          />
        </div>
        <div className="form__control checkbox">
          <p>
            <span>Total</span>
          </p>
          <input type="text" placeholder="0.00USD" readOnly value={total} />
        </div>
        <div className="desktop_content__btn">
          <button className="" onClick={() => setIsModalOpen(false)}>
            Buy BTC
          </button>
        </div>
        <div className="desktop_content__extras">
          <div className="desktop_content__extras-left">
            <p>Total account value</p>
            <span>0.00</span>
          </div>
          <div className="desktop_content__extras-right">
            <span>NGN</span>
            <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="desktop_content__extras">
          <div className="desktop_content__extras-left">
            <p>Open Orders</p>
            <span>0.00</span>
          </div>
          <div className="desktop_content__extras-right">
            <p>Available</p>
            <span>0.00</span>
          </div>
        </div>
        <div className="deposit_btn">
          <button>Deposit</button>
        </div>
      </div>
    </section>
  );
}
