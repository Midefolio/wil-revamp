import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const Navigate = useNavigate();
    return ( <>
     <div className="nav-bar">
        <div className="nav-container-2">
            <div><h3 className="fnt-system">WillmaestroIt</h3></div>
            <div className="gap-elements">
              <button  className='link fnt-system xs-px15' onClick={()=> {Navigate('/')}} >Home</button>
              <button  className='link fnt-system xs-px15' onClick={()=> {Navigate('/about')}} >About</button>
              <button  className='link fnt-system xs-px15' onClick={()=> {Navigate('/services')}} >Services</button>
              <button  className='link fnt-system xs-px15' onClick={()=> {Navigate('/contacts')}} >Contact Us </button> 
              <button  className='link fnt-system xs-px15' onClick={()=> {Navigate('/blogs')}} >Blogs </button> 
            </div>
            <div>
                <button className="button button-primary fnt-system">Free Consultation <span className="icons bg-white white mg-5 xs-px8" ><i className="fas xs-px10 color-code-1 deg-45 fa-arrow-up" ></i></span></button>
            </div>
        </div>
     </div>
    
    </> );
}
 
export default NavBar;