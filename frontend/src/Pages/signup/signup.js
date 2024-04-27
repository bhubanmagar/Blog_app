import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const SignupPage = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      //eslint-disable-next-line
      const response = await axios.post("user/register", {
        name: name,
        email: email,
        password: password,
      });
      alert("Sucessfully registered!");
      navigate("/login", { replace: true });
    } catch (error) {
      alert(error.message);
      navigate("/singup");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <form method="POST" onSubmit={signupHandler}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
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
          <button type="submit">SignUp</button>
          <p>
            Already registered?...<a href="/signup">SignIn</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
