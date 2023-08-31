import { create } from "zustand";
import axios from "axios";
// import LoginForm from "../components/LoginForm";

const authStore = create((set) => ({
  loggedIn: null,
  loginForm: {
    email: "",
    password: "",
  },

  signupForm: {
    email: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    const { loginForm } = authStore.getState();

    await axios.post("/login", loginForm);
    set({
      loggedIn: true,
      loginForm: {
        email: "",
        password: "",
      },
    });
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
    }
  },

  signup: async () => {
    const { signupForm } = authStore.getState();

    await axios.post("/signup", signupForm);

    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
  },

  logout: async () => {
    await axios.get("/logout");

    set({ loggedIn: false });
  },
}));

export default authStore;
