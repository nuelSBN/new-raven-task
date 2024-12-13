import "./index.css";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const { email, setEmail, handleFetchProfile } = useLogin();

  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <h1 className="auth-screen__title">Login</h1>
        <form onSubmit={handleFetchProfile}>
          <label htmlFor="" className="auth-screen__label">
            Username
          </label>
          <input
            className="auth-screen__input"
            type="text"
            placeholder="Enter your github Username"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="auth-screen__button">Fetch Profile</button>
        </form>
      </div>
    </div>
  );
}
