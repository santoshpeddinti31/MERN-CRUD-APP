import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleLogin}>
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.email}
        type="email"
        name="email"
        autoComplete="email"
      />
      <input
        onChange={store.updateLoginForm}
        value={store.loginForm.password}
        type="password"
        name="password"
        autoComplete="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
