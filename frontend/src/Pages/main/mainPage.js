import "./mainstyle.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 3;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = posts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(posts.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  console.log(record);

  const postHandler = async () => {
    try {
      const response = await axios.get("/blog/allPost");
      const getData = response.data.data;
      setPost(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };

  useEffect(() => {
    postHandler();
  }, []);
  return (
    <>
      <Navbar />
      {record.map((post) => (
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
      <footer>
        <ul className="pagination flex">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className=" page-item" key={i}>
              <a
                href="#"
                className={`page-item ${currentPage === n ? "active" : ""}    `}
                onClick={() => changePage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default MainPage;
