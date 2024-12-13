import arrowright from "../../../assets/arrow-right.svg";
import line from "../../../assets/line.svg";
import logo from "../../../assets/logo.svg";
import signout from "../../../assets/sign-out.svg";
import { useLogin } from "../../../hooks/useLogin";
import "./index.css";

export default function DesktopHeader() {
  const profile = JSON.parse(localStorage.profileData);

  const { handleLogout } = useLogin();
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-left-logo">
          <img src={logo} alt="" className="" />
        </div>
        <ul className="header-left-nav">
          <li className="header-left-navitem">
            <a href="#">Exchange</a>
          </li>
          <li className="header-left-navitem">
            <a href="#">Wallets</a>
          </li>
          <li className="header-left-navitem">
            <a href="#">Roqqu Hub</a>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <div className="header-profile">
          <img
            src={profile?.avatar_url}
            alt=""
            className="header-profile_image"
          />
          <span>{profile?.login}</span>
          <img src={arrowright} alt="" />
        </div>
        <div>
          <img src={line} alt="" />
        </div>
        <div onClick={handleLogout}>
          <img src={signout} alt="" />
        </div>
      </div>
    </div>
  );
}
