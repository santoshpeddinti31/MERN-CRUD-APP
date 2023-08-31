import { useEffect } from "react";
import authStore from "../store/authStore";

const LogoutPage = () => {
  const store = authStore();
  useEffect(() => {
    store.logout();
  }, [store]);
  return <h1>You are now logged out.</h1>;
};

export default LogoutPage;
