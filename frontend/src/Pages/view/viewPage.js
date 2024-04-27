import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
const ViewPage = () => {
  const getParams = useParams();
  const [detail, setDetail] = useState({});
  const [checkme, setCheckme] = useState(false);

  //viewHandler function starts
  const viewHandler = async () => {
    const getId = getParams.id;

    try {
      const response = await axios.get(`/blog/view/${getId}`);
      const getDetails = response.data.data;
      setDetail(getDetails);
    } catch (error) {
      console.log(error.message);
    }
  };
  //veiwHandler ends here

  const hideShowicon = async () => {};

  // calling viewHandler just after loading document to render the Post content
  useEffect(() => {
    viewHandler(); //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      {detail ? (
        <>
          <div className="hero">
            <div className="view-container">
              <div style={{ margin: "10px", padding: "8px" }}>
                <div className="icons">
                  <GrEdit style={{ cursor: "pointer" }} />
                  <MdDeleteOutline style={{ cursor: "pointer" }} />
                </div>
                <div className="image-container" key={detail._id}>
                  <img src={detail.image} alt="blog" />
                </div>
                <div className="text-container">
                  <h2>{detail.tittle}</h2>
                  <hr />
                  <p className="info">
                    <span>{detail.createdAt}</span>
                  </p>
                  <p>{detail.content}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default ViewPage;
