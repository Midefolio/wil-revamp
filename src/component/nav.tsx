/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-reveal"
import { useNavigate } from "react-router-dom";
import './nav_style.css';
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1737036630886.json";
import webdev from "../animations/webdev.json";
import mobile from "../animations/mobile.json";
import merketing from "../animations/maketing.json";


const NavBar = ({ active }: any) => {
  const [openNav, setOpenNav] = useState(false);
  const Navigate = useNavigate();
  const [navBgWhite, setNavBgWhite] = useState(false);

  // Add scroll event listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavBgWhite(true); // Scroll down more than 50px, set background to white
      } else {
        setNavBgWhite(false); // If scrolled back to top, remove background
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>

      <nav className={`centered-align hidden-xs hidden-md ${navBgWhite && "bg-white tr-5"}`} >
        <div className="nav-container my-col-10" >
          <div className=""> <h1 className="fnt-system" >WillmaestroIt</h1> </div>
          <div className="gap-elements gap-30">
            <a href="#" onClick={() => { Navigate('/') }} className={`px9 pd-10 black ubuntuMedium ${active === 'home' && "color-code-1"} `} >Home</a>
            <a href="#" onClick={() => { Navigate('/about') }} className={`px9 pd-10 black ubuntuMedium ${active == 'about' && "color-code-1"} `} >About</a>
            <a href="#" onClick={() => { Navigate('/blogs') }} className={`px9 pd-10 black ubuntuMedium ${active == 'blogs' && "color-code-1"} `} >Blog</a>
            <a href="#" className={`px9 pd-10 black extended ubuntuMedium ${active == 'services' && "color-code-1"} `} >Services
              <i className="fas fa-angle-down mg-5"></i>
              <Fade  >
                <div className="nav-extended hidden-xs my-bottom-50">
                  <div className='my-bottom-20 my-mother centeed'> <h1 className=' px10 bold fnt-system' > <span className="color-code-1">IT</span> Services We Offer </h1> </div>
                  <div className='my-mother gap-elements'>
                    <div className="my-mother ls-centered-align space-50 gap-elements my-b-shadw xs-down-5 top-5" >
                      <Zoom>
                        <div className="my-col-4 xs-10 xs-off-1 xs-down-5 rad-10  h-200  my-b-shad card-hover" >
                          <div className="my-col-12 down-5 center-cotnt  xs-down-5" ><span className="ani-img p-r" ><Lottie animationData={webdev} loop={true} /></span></div>
                          <div className="my-container xs-container xs-down-10 top-2" >
                            <div><h1 className="px10  fnt-system xs-px15" >  <span className="px30">1</span> <br />  Website Development </h1></div>
                            <div className="xs-10 xs-off-1 down-2 xs-down-5 my-col-10 off-" ><span className="px9 xs-px13 fnt-system light faded-2">Make a lasting impression with a professionally designed and user-friendly website. </span></div>
                          </div>
                        </div>
                      </Zoom>
                      <Zoom>
                        <div className="my-col-4 xs-10 xs-off-1 xs-down-5 rad-10  h-200  my-b-shad card-hover" >
                          <div className="my-col-10 down-5 center-cotent  xs-down-8" ><span className="ani-img p-r" ><Lottie animationData={mobile} loop={true} /></span></div>
                          <div className="my-container xs-container xs-down-10 top-2" >
                            <div><h1 className="px10 ubuntuBold xs-px15 fnt-system" > <span className="px30">2</span> <br />  Mobile Apps & Softwares </h1></div>
                            <div className="xs-10 xs-off-1 down-2 xs-down-5 my-col-10 off-" ><span className="px9 xs-px13 faded-2 fnt-system light">Build your startup with professionally designed and user-friendly Apps. We optimize your Apps to rank higher. </span></div>
                          </div>
                        </div>
                      </Zoom>
                      <Zoom>
                        <div className="my-col-4 xs-10 xs-off-1 xs-down-5 rad-10  h-200  my-b-shad card-hover" >
                          <div className="my-col-10 down-5 center-cotent  xs-down-8" ><span className="ani-img p-r" ><Lottie animationData={animationData} loop={true} /> </span></div>
                          <div className="my-container xs-container xs-down-10  top-2" >
                            <div><h1 className="px10 fnt-system" ><span className="px30">3</span> <br />  Social Media Marketing </h1></div>
                            <div className="xs-10 xs-off-1 down-2 xs-down-5 my-col-10 off-" ><span className="px9 xs-px13 fnt-system light faded-2">Build a strong brand presence and engage with your audience on social media platforms. </span></div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                  <div className="my-mother down-4">
                    <a href="#" className="rad-30 card-hover px8 white fnt-system bg-color-code-1 b-shadow my-btn-sm bold" onClick={() => { Navigate('/contacts') }}>Free Consultation <span className="icons bg-white mg-10 px8" ><i className="fas color-code-1 deg-45 fa-arrow-up" ></i></span> </a>
                  </div>
                </div>
              </Fade>
            </a>
            <a href="#" className={`px9 pd-10 black ubuntuMedium ${active == 'contacts' && "color-code-1"} `} onClick={() => { Navigate('/contacts') }} >Contact Us</a>
          </div>
          <div className="">
            <a href="#" className="rad-30 card-hover px8 white fnt-system bolder bg-color-code-1 my-btn-sm" onClick={() => { Navigate('/contacts') }}>Free Consultation <span className="icons bg-white mg-10 px8" ><i className="fas color-code-1 deg-45 fa-arrow-up" ></i></span> </a>
          </div>
        </div>
      </nav>

      <div className="mobile-menu hidden-ls">
        <div className="mobile-nav-container">
          <i className="fas fa-bars pd-10 rad-10 bd-code-2 xs-px20 fade-2" onClick={() => { setOpenNav(true) }}></i>
          <div className="my-btn-sm bg-color-code-1 fnt-system bolder xs-px12 white" onClick={() => { Navigate('/contacts') }}>Free Consultation</div>
        </div>
      </div>

      <div className={`mobile-menu-open hidden-ls ${openNav && "open-nav"}`}>
        <div className="mobile-menu-container">
          <div className="header">
            <div className="gap-elements centered-align">
              {/* <div className="menu-logo"><img src="/willlogo.png" alt="" /></div> */}
              <div className="bg-black xs-down-3 upper-cae my-mother"><h1 className="fnt-system white xs-px15 bolder">WillmaestroIt Solutions</h1></div>
            </div>
            <i className="xs-px20 fas fa-times white pd-10 my-b-shadow" onClick={() => { setOpenNav(false) }} ></i>
          </div>
          <div className="body faded-2">
            <button className='alice fnt-system xs-px15' onClick={() => { Navigate('/') }} >Home</button>
            <button className='alice fnt-system xs-px15' onClick={() => { Navigate('/about') }} >About</button>
            {/* <button className='alice fnt-system xs-px15' onClick={() => { Navigate('/services') }} >Services</button> */}
            <button className='alice fnt-system xs-px15' onClick={() => { Navigate('/contacts') }} >Contact Us </button>
            <button className='alice fnt-system xs-px15' onClick={() => { Navigate('/blogs') }} >Blogs </button>
          </div>
          <div className="my-mother xs-down-10 gap-elements">
            <a href="https://x.com/wglobalit77250?s=21" className="icons c-pointer faded-2  white">
              <i className="fab px8 xs-px15 fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/willmaestero/" className="icons c-pointer faded-2  white">
              <i className="fab px8 xs-px15 fa-linkedin"></i>
            </a>
            <a href="mailto:mailto:info@WillmaestroIt.com" className="icons c-pointer faded-2  white">
              <i className="fa px8 xs-px15 fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

    </>
  );


}

export default NavBar;