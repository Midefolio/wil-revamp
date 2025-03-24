/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";



import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./screens/about";
import BlogLogin from "./blog_manager/blog_login";
import ManagerHome from "./blog_manager/Blog_manager_home";
import NewPost from "./blog_manager/new_post";
import Blogs from "./screens/blogs/blogs";
import Posts from "./screens/blogs/Post";
import NotFound from "./screens/404";
import ContactUs from "./screens/contact_us";
import LandingPage from "./screens/landingPage";
import Pratice from "./pages/practice";

const App = () => {
  const token = localStorage.getItem('willmaestroit_blog_manager_token');

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/practice" element={<Pratice/>}/>
        <Route path="/contacts" element={<ContactUs/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts/:title" element={<Posts/>}/>
        <Route path="/about_us" element={<About/>}/>
        <Route path="/blog_login" element={!token ? <BlogLogin/> : <Navigate to="/blog_manager/home" /> }/>
        <Route path="/blog_manager/home" element={token ? <ManagerHome/> : <Navigate to="/blog_login" /> }/>
        <Route path="/blog_manager/new-post" element={token ? <NewPost/> : <Navigate to="/blog_login" />  }/>
        <Route path="/*" element={<NotFound/>  }/>
      </>
    )
  );

  return (
    <>
     <ToastContainer/> 
      <RouterProvider router={router} />
      <div className="pop-modal my-d-none" id="isSending">
        <div className="my-mother down-40 xs-down-40vh">
          <AiOutlineLoading3Quarters className="fas fa-spin px30 xs-px30 color-code-1" />
          <div className="my-mother xs-down-5 down-1">
            <span className="InterSemiBold px12 xs-px13 white" id="sending-msg"></span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default App;
