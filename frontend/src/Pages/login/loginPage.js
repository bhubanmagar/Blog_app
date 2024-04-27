import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("field can't be empty");
    }
    try {
      const response = await axios.post("/user/login", {
        email: email,
        password: password,
      });
      if (response) {
        const accessToken = response.data.data;
        localStorage.setItem("token", accessToken);
        navigate("/", { replace: true });
      }
    } catch (error) {
      alert("User or Password doesn't match");
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-page">
        <form method="POST" onSubmit={loginHandler}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button type="submit">Login</button>
          <p>
            Not registered?...<a href="/signup">SignUp</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
