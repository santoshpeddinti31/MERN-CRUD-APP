import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import Styles from "./LoginForm.module.css";
const LoginForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    //Navigate
    navigate("/");
  };

  return (
    <div className={Styles.loginpage}>
      <form onSubmit={handleLogin}>
        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.email}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
        />
        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.password}
          type="password"
          name="password"
          autoComplete="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
