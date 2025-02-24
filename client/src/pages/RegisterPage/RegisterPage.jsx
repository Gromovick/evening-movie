import React, { useEffect } from "react";
import s from "./RegisterPage.module.css";
import LoginBack from "../../components/LoginBack/LoginBack";
import { Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../slices/UserSlice";
import { NavLink, Link, useNavigate } from "react-router";
const RegisterPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(register({ email, password, username }));
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
        <h1 className={s.title}>Register</h1>
        <form action="" className={s.form}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            className={s.input}
          />
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
            Register
          </Button>
        </form>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
