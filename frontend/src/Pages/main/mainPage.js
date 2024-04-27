import "./mainstyle.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [posts, setPost] = useState([]);
  const postHandler = async () => {
    try {
      const response = await axios.get("/blog/allPost");
      const getData = response.data.data;
      setPost(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    postHandler();
  }, []);
  return (
    <>
      <Navbar />
      {posts.map((post) => (
        <>
          <div className="main-container">
            <div className="image-section" key={post._id}>
              <img src={post.image} alt="blog" />
            </div>
            <div className="info-section">
              <Link style={{ color: "#202749" }} to={`/view/${post._id}`}>
                <h2>{post.tittle}</h2>
              </Link>

              <p className="info">
                <span>{post.createdAt}</span>
              </p>
              <p>{post.content}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default MainPage;
