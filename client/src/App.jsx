import "./App.scss";
import "./styles/index.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useSelector } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import MoviePage from "./pages/MoviePage/MoviePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";

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
        <Route
          path="*"
          element={
            <MainLayout>
              <MainPage />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/"
          element={
            <MainLayout>
              {" "}
              <MainPage />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MainLayout>
              {" "}
              <MoviePage />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/user/:id"
          element={
            <MainLayout>
              {" "}
              <ProfilePage />{" "}
            </MainLayout>
          }
        />
        <Route
          path="/search"
          element={
            <MainLayout>
              {" "}
              <SearchPage />{" "}
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
