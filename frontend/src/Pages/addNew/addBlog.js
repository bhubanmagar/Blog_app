import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = (e) => {
  const [content, setContent] = useState("");
  const [tittle, setTittle] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const postHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("tittle", tittle);
      data.append("content", content);
      data.append("image", image);
      const response = await axios.post(
        "/blog/createBlog",

        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response) {
        alert("added sucessfully");
        navigate("/", { replace: true });
      }
    } catch (error) {
      alert("error occured!");
      console.log(error.message);
      navigate("/add-blog");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <form
          method="POST"
          onSubmit={postHandler}
          encType="multipart/form-data"
        >
          <label htmlFor="tittle">
            <strong>Tittle</strong>
          </label>
          <br />
          <input
            type="text"
            name="tittle"
            onChange={(e) => setTittle(e.target.value)}
          ></input>
          <br />
          <label htmlFor="Content">Content</label>
          <br />
          <textarea
            rows={20}
            cols={90}
            name="content"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <br />
          <label htmlFor="image">Image</label>
          <br />
          <input type="file" name="image" onChange={handleImage}></input>
          <br />
          <button style={{ cursor: "pointer" }} type="submit">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
