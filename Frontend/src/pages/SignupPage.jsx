import SignupForm from "../components/SignupForm";
import Styles from "./SignupPage.module.css";
const Signup = () => {
  return (
    <div className={Styles.signup}>
      <h1>Signup</h1>
      <SignupForm />
    </div>
  );
};
export default Signup;
