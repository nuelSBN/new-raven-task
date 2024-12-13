import "./index.css";
import logo from "../../../assets/logo.svg";
import user from "../../../assets/user.svg";
import line from "../../../assets/line.svg";
import menu from "../../../assets/menu.svg";
import useHeader from "../../../hooks/useHeader";
import { useLogin } from "../../../hooks/useLogin";

export default function MobileHeader() {
  const { click, handleClick } = useHeader();
  const { handleLogout } = useLogin();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="" className="header_logo-image" />
      </div>
      <div className="header__right">
        <div>
          <img src={user} alt="" />
        </div>
        <div>
          <img src={line} alt="" />
        </div>
        <div>
          <img src={menu} alt="" onClick={handleClick} />
        </div>
      </div>
      <ul className={click ? "header__nav active" : "header__nav"}>
        <li className="header__nav-item">
          <a href="#">Exchange</a>
        </li>
        <li className="header__nav-item">
          <a href="#">Wallets</a>
        </li>
        <li className="header__nav-item">
          <a href="#">Roqqu Hub</a>
        </li>
        <li className="header__nav-item">
          <a href="#" onClick={handleLogout}>
            Log out
          </a>
        </li>
      </ul>
    </header>
  );
}
