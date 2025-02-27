import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useSelector } from "react-redux";
import MainPage from "./components/MainPage";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Routes>
        {!user && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
          </>
        )}
        {/* <Route path="/main" element={<MainPage />} /> */}
        {/* <Route path="*" element={<MainPage />} /> */}
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;
