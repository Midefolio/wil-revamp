import HomePage from "../pages/home/home";
import Home from "./page";

const LandingPage = () => {
    return ( <>
      <div className="hidden-xs"><HomePage/></div>
      <div className="hidden-ls"><Home/></div>
    </> );
}
 
export default LandingPage;