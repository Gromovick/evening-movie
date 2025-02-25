import React, { useEffect, useState } from "react";
import s from "./LoginPage.module.css";
import LoginBack from "../../components/LoginBack/LoginBack";
import { Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../slices/UserSlice";
import { NavLink, Link, useNavigate, useLocation } from "react-router";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);
  console.log(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/login":
        setIsLogin(true);
        break;
      case "/register":
        setIsLogin(false);
        break;
    }
  }, [location.pathname]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    }
  }, [isAuth]);

  return (
    <div className={s.wrapper}>
      <div className={s.grid}>
        <LoginBack />
        <div className={s.leftSide}></div>
        <div className={s.rightSide}>
          <div className={s.rightContent}>
            <img src="/img/login/logo/trans_bg.png" alt="" className={s.logo} />
            <h1 className={s.title}>{isLogin ? "Login" : "Register"}</h1>
            <form action="" className={s.form}>
              {!isLogin && (
                <label>
                  <span className={s.label}>Username:</span>
                  <Input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                    className={s.input}
                  />
                </label>
              )}
              <label>
                <span className={s.label}>Email:</span>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className={s.input}
                />
              </label>
              <label>
                <span className={s.label}>Password:</span>
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className={s.input}
                  autoComplete="new-password"
                  type="password"
                />
              </label>

              <Button
                type="primary"
                className={s.button}
                block={true}
                onClick={isLogin ? loginHandler : registerHandler}
                size="large"
                title="Login"
              >
                {isLogin ? "Login" : "Register"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
