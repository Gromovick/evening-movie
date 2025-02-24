import React, { useEffect } from "react";
import s from "./LoginPage.module.css";
import LoginBack from "../../components/LoginBack/LoginBack";
import { Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/UserSlice";
import { NavLink, Link, useNavigate } from "react-router";

const LoginPage = () => {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/main");
    }
  }, [isAuth]);

  return (
    <div className={s.wrapper}>
      <LoginBack />
      <div className={s.modal}>
        <h1 className={s.title}>Login</h1>
        <form action="" className={s.form}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className={s.input}
          />
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className={s.input}
            autoComplete="new-password"
            type="password"
          />

          <Button
            type="primary"
            className={s.button}
            block={true}
            onClick={loginHandler}
          >
            Login
          </Button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginPage;
