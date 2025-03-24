import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterMenu } from "../data/category";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const WmFooter = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="my-mother down-2">
        <div className="my-col-10 xs-10 xs-off-1 off-1 xs-down- down-5">
          <div className="gap-elemens xs-12 hidden-s">
            <div className="my-col-4 xs-12">
              <div className="my-mother gap-elements">
                 <div className="logo mc-h-30"></div>
                 <h1 className="px10 xs-px13 down-1 fnt-system bolder xs-px15">WillmaestroIt Solutions</h1>
              </div>
              <div className="my-mother gap-elements centered-align xs-down-5 down-5">
                {/* <i className=" color-code- fas fa-envelope"></i> */}
                <span className="ubuntuLight fnt-system faded-2 px10 xs-px12">info@willmaestro.com</span>
              </div>
              <div className="my-mother gap-elements xs-down-2 centered-align down-1">
                 <i className=" color-code- fas fa-phone"></i>
                <span className="ubuntuLight fnt-system faded-2 px10 xs-px12">(+234) 8101854076</span>
              </div>
              <div className="my-mother gap-elements xs-down-5 down-3">
                {/* <a href="" className="icons c-pointer bg-color-code-1 white">
                  <i className="fab px8 xs-px13 fa-facebook"></i>
                </a> */}
                <a href="https://x.com/wglobalit77250?s=21" className="icons c-pointer bg-color-code-1 white">
                  <i className="fab px8 xs-px13 fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/company/willmaestero/" className="icons c-pointer bg-color-code-1 white">
                  <i className="fab px8 xs-px13 fa-linkedin"></i>
                </a>
                <a href="mailto:mailto:info@WillmaestroIt.com" className="icons c-pointer bg-color-code-1 white">
                  <i className="fa px8 xs-px13 fa-envelope"></i>
                </a>
              </div>
            </div>
           <div className="xs-12 xs-down-10 gap-elements">
           {FooterMenu?.map((i: any, index: any) => (
              <div className="my-col-4 xs-12 down-1" key={index}>
                <div>
                  <h1 className="ubuntuBold px10 xs-px15 fnt-system bolder">{i.menu}</h1>
                </div>
                 <div className="my-mother down-1 xs-12">
                 {i.subMenu?.map((x: any) => (
                  <div className="my-mothe down-1 xs-down-5" key={x.nemu}>
                    <span className=" px10 xs-px12 c-pointer fnt-system faded-2" onClick={()=> {Navigate(x.url)}}>{x?.menu}</span>
                  </div>
                ))}
                 </div>
              </div>
            ))}

            <div className="my-col-5 xs-12 xs-down-10 hidden-xs">
              <div><span className="px13 fnt-system">Subscribe to  our Newsletter</span></div>
              <div className="my-mother gap-elemens centerd-align bg-s2 rad-30 down-2">
                <input type="text" placeholder="enter email" className="ubuntuLight fnt-system faded-2 rad-30 px10 xs-px13 my-col-6 my-btn-sm bg-s2" />
                <button className="my-btn-sm fnt-system color-code-1 px10 xs-px13 rad-30 bg-s2">Subscribe</button>
              </div>
            </div>
           </div>

            {/* <div className="my-col-5 xs-12 xs-down-10 hidden-ls">
              <div><span className="px20 interExtraBold xs-px30 white">Subscribe to  our Newsletter</span></div>
              <div className="my-mother xs-down-3 bg-white my-btn-sm rad-30 unset-indent down-10">
                <input type="text" placeholder="enter email" className="InterLight xs-8 px12 rad-10 bg-white" />
                <button className="input-1 my-col-3 mg-15 xs-3 xs-down-1 interBold flex px12 unset-indent bg-color-code-1 white down-2">Subscribe</button>
              </div>
            </div> */}
          </div>
          <h1 className="my-mother down-5 xs-down-15 px10 xs-px10 my-bottom-20 fnt-system">
             © 2024 Willmaestro. All rights reserved. <br />
              Privacy Policy | Terms of Service
          </h1>
        </div>
      </div>
    </>
  );
};

export default WmFooter;