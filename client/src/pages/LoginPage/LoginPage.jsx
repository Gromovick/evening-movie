import React from "react";
import s from "./LoginPage.module.css";
import LoginBack from "../../componets/LoginBack/LoginBack";
import { Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../slices/UserSlice";
const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("CLICK");
    
    dispatch(login({ email, password }));
  };

  return (
    <div className={s.wrapper}>
      <LoginBack />
      <div className={s.modal}>
        <h1 className={s.title}>Login</h1>
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
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
