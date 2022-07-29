import { useState } from "react";
import Home from "./components/Home";
import axios from "axios";
import "./styles.css";
import { GET_LOGIN_SUCCESS } from "./Redux/AuthReducer/action.type";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const { isAuth, token } = useSelector((state) => state.AuthReducer);
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: useremail,
        password: password
      })
      .then((res) => dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data }));
  };
  return (
    <div className="App">
      <input
        type="email"
        placeholder="Enter Desired Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Desired Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={onLogin}>Login</button>

      {isAuth && token && <Home />}
    </div>
  );
}
