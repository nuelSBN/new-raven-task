import "./index.css";

interface Props {
  icon: string;
  value: string;
  amount: string;
  profit?: boolean;
}

export default function CardBox({ icon, value, amount, profit }: Props) {
  return (
    <div className="card__box">
      <div className="card__box-top">
        <img src={icon} alt="" />
        <span>{value}</span>
      </div>
      <div className="card__box-bottom">
        <span className={profit ? "up" : ""}>{amount}</span>
      </div>
    </div>
  );
}
