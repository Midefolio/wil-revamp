import { useNavigate } from "react-router-dom";
import WmFooter from "../component/footer";
import NavBar from "../component/nav";

const ContactUs = () => {
  const Navigate = useNavigate()
  
    return ( <>
    <NavBar active='contacts' />
       <div className="my-col-10 off-1 xs-container xs-down-10vh down-15">
       <div className="centered xs-12 xs-down-10">
          <div className="my-col-6 xs-12 off-3 px20 xs-px20 down-2 black fnt-system">
            <div><span className="color-code-1 px10 xs-px13 bolder fnt-system ">Contact Us</span></div>
            <h1  className="px30 xs-px20 fnt-system bolder" >Get in touch with Us</h1>
          </div>
          <div className="my-col-4 xs-10 xs-off-1 xs-down-5 md-down-5 off-4 down-2">
            <span className="px10 xs-px13 faded-2 light fnt-system">
            We specialize in revolutionizing your online presence through expert IT solutions.
            </span>
          </div>

          {/* <div className="my-container down-3 xs-12 hidden-xs" >
            <div className="img-container-map"><img src="/images/map.png" alt="" /></div>
          </div> */}
        </div>
         
         <div className="my-container down-10  p-absolue ls-gap-elements space-50 xs-10 xs-off-1 xs-down0vh" >
           <div className="my-col-4  xs-down-20 xs-12 bg-white rad-10 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-10 down-5">
                 <span className="pd-10 rad-10 my-b-shadow"> <i className="fab fa-whatsapp green"></i></span>
                 <div className="my-mother down-3 xs-down-10"><h1 className="px9 xs-px15 fnt-system">Chat With Us</h1></div>
                 <div className="my-mother xs-down-2 down-1"><span className="px9 fnt-system xs-px12 faded-sol light">Speak with a representative</span></div>
                 <div className="my-mother down-3 xs-down-8"><a href="https://wa.link/xb0qq5" className="pd-10 black my-b-shaow bd-code- btn-hover my-b-shadow xs-px12 px9 rad-10 c-pointer fnt-system" >Start a conversation</a></div>
             </div>
           </div>
           <div className="my-col-4  xs-down-5 xs-12 bg-white rad-10 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-10 down-5">
                 <span className="pd-10 rad-10 my-b-shadow"> <i className="fas fa-envelope orange"></i></span>
                 <div className="my-mother down-3 xs-down-10"><h1 className="px9 xs-px15 fnt-system">Email Us</h1></div>
                 <div className="my-mother down-1  xs-down-2"><span className="px9 fnt-system xs-px12 faded-sol">Click below to send a mail</span></div>
                 <div className="my-mother down-3 xs-down-8"><a href="mailto:info@WillmaestroIt.com" className="pd-10 my-b-shaow bd-code- black btn-hover my-b-shadow xs-px12 px9 rad-10 c-pointer fnt-system" >info@WillmaestroIt.com</a></div>
             </div>
           </div>
           {/* <div className="my-col-4  xs-down-5 xs-12 bg-white rad-10 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-10 down-5">
                 <span className="pd-10 rad-10 my-b-shadow"> <i className="fa fa-map-marker-alt red"></i></span>
                 <div className="my-mother down-3 xs-down-10"><h1 className="px9 xs-px15 fnt-system">Visit Us</h1></div>
                 <div className="my-mother down-1  xs-down-2"><span className="px9 fnt-system xs-px12 faded-sol">Visit Our Office HQ</span></div>
                 <div className="my-mother down-3 xs-down-8"><span className="pd-10 my-b-shaow bd-code- btn-hover my-b-shadow xs-px12 px9 rad-10 c-pointer fnt-system" title="view On Google Map" >Agric estate, ilorin, Nigeria</span></div>
             </div>
           </div> */}
           <div className="my-col-4  xs-down-5 xs-12 bg-white rad-10 my-b-shadow my-bottom-50">
             <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-10 down-5">
                 <span className="pd-10 rad-10 my-b-shadow"> <i className="fa fa-phone green color-code-1"></i></span>
                 <div className="my-mother down-3 xs-down-10"><h1 className="px9 xs-px15 fnt-system">Call Us</h1></div>
                 <div className="my-mother down-1  xs-down-2"><span className="px9 fnt-system xs-px12 faded-sol">Mon-fri from 8am to 8pm. </span></div>
                 <div className="my-mother down-3 xs-down-8"><a href="tel:08101854076" className="pd-10 black my-b-shaow bd-code- btn-hover my-b-shadow xs-px12 px9 rad-10 c-pointer fnt-system" >(+234) 8101854076 </a></div>
             </div>
           </div>
         </div>
         {/* <div className="my-mother centered"><div className="my-mother down-5 my-bottom-50"> <a href="" className="rad-30 px9 b-shaow ubuntuBold  bg-color-code-1 white my-btn-sm fnt-system " onClick={()=> {Navigate('/contacts')}} >Contact Us For Free Consultation<span className="icons bg-white color-code-1 mg-10 px8" ><i className="fas deg-45 fa-arrow-up" ></i></span> </a></div></div> */}
       </div>
       <div className="my-mother my-bottom-50 hiddenxs hdden-md">
        {/* <div className="my-mother xs-down-10vh"><WmFooter/></div> */}
       </div>
    </> );
}
 
export default ContactUs;