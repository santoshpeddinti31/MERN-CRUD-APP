import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

import Styles from "./SignupForm.module.css";
const SignupForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
  };

  return (
    <div className={Styles.signuppage}>
      <form onSubmit={handleSignup}>
        <input
          onChange={store.updateSignupForm}
          value={store.signupForm.email}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email"
        />
        <input
          onChange={store.updateSignupForm}
          value={store.signupForm.password}
          type="password"
          name="password"
          autoComplete="password"
          placeholder="enter your password"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
