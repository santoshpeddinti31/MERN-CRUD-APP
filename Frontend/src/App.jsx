//
import Styles from "./App.module.css";
import RequiredAuth from "./components/RequiredAuth";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Signup from "./pages/SignupPage";
import TodoPage from "./pages/TodoPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//
function App() {
  return (
    <div className={Styles.container}>
      <header>CRUD</header>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/" id={Styles.links}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" id={Styles.links}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" id={Styles.links}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/logout" id={Styles.links}>
              Logout
            </Link>
          </li>
        </ul>
        <Routes>
          <Route
            index
            element={
              <RequiredAuth>
                <TodoPage />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
