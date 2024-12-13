import "./index.css";

interface Props {
  onClick: () => void;
  color: string;
  children: string;
}

export default function Button({ onClick, color, children }: Props) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
