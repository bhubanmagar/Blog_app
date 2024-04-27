import { useNavigate } from "react-router-dom";
import "./NavStyle.css";

const Navbar = () => {
  const navigate = useNavigate();
  const clicHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="main">
        <a href="/" className="logo">
          Blog App
        </a>
        <div className="nav">
          {localStorage.getItem("token") ? (
            <>
              <a href="/add-blog">Add Post</a>
            </>
          ) : (
            <>
              <a href="/login">LogIn</a>
            </>
          )}

          {localStorage.getItem("token") ? (
            <button
              style={{
                border: "0px",
                cursor: "pointer",
                backgroundColor: "#e9e9e9",
              }}
              onClick={clicHandler}
            >
              Logout
            </button>
          ) : (
            <a href="/signup">SignUp</a>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
