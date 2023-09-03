import LoginForm from "../components/LoginForm";
import Styles from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={Styles.login}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
