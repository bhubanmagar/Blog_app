import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/main/mainPage";
import ViewPage from "../Pages/view/viewPage";
import LoginPage from "../Pages/login/loginPage";
import SignupPage from "../Pages/signup/signup";
import AddBlog from "../Pages/addNew/addBlog";
const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/view/:id" element={<ViewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default MyRoutes;
