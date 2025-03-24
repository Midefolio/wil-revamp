import NavBar from "../component/nav"
import { Zoom } from "react-reveal"
import { useEffect, useState } from "react"
import WmFooter from "../component/footer"
import useUserAuthContext from "../hook/userUserAuthContext"
import CustomSkeleton from "../component/skeleton"
import { formatDateToOrdinalString } from "../utils/useutils"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1737036630886.json";
import webdev from "../animations/webdev.json";
import mobile from "../animations/mobile.json";
import merketing from "../animations/maketing.json";
import TrustedBy from "../component/trustedBy"

const Home = () => {
  const [plans, setPlans] = useState('BASIC');
  const { filteredPosts, postParams, setPostParams, getAllPosts } = useUserAuthContext();
  const Navigate = useNavigate()

  // useEffect(() => {
  //   getAllPosts({
  //     page: 1,
  //     limit: 50,
  //     totalPages: 0,
  //     filter: {}
  //   })
  // }, [])





  return (<>
    <div className="my-mother bg-grad" >
      <NavBar active={'home'} />
      <div className="my-col-10 off-1 down-30 xs-continer xs-down-12vh">
        <div className="my-col-6 xs-container xs-centered top-10" >
          <div className="my-col-12 xs-down-15"><span className="bg-color-code-3 rad-10 px9 xs-px13 color-code-1 pd-10 ubuntuLight">No. 1 SEO & Digital Marketing Agency</span></div>
          <div className="my-mother down-2 xs-down-15">
            <span className="px40 ubuntuBold black xs-px25 fnt-sstem bolder" >Grow Your Business With  <span className="color-code-1">Trusted </span> & <span className="color-code-1">Figure Driven</span> Results</span>
          </div>
          <div className="my-mother down-1 xs-down-8 lin-2" ><h2 className="px12 xs-px13 faded-2 fnt-system light">With a reputation for excellence, <span className='color-code-1 bold'> WillmaestroIT</span> has helped businesses to grow through our result oriented services. We don’t just build systems; we deliver results</h2></div>
        </div>

        <div className="my-col-6 xs-12 " >
          {/* <div className="my-mother xs-centered xs-down-5 p-absolute">
            <a href="#" className="rad-30 px9 xs-px15 fnt-system bolder xs-8  xs-off-2 bg-color-code-1 my-b-shadow my-btn-sm white" onClick={() => { Navigate('/contacts') }}> <span className="">Get In Touch</span> </a>
          </div> */}
          <div className="xs-down-"> <Lottie animationData={animationData} loop={true} /></div>
          <span className="plate-img down-20 xs-top-60 hidden-xs slide" ><img src="/images/web.png" alt="" /></span>
        </div>
      </div>
      <span className="plate-img down-20 slide xs-down-8vh" ><img src="/images/elements1.png" alt="" /></span>
    </div>


    <div className="my-mother hidden-ls my-b-shadow centered-align h-0 bg-color-code-2" >
      <div className="xs-container my-bottom-20" >
        <div className="my-mother xs-down-5" >
          <div className="my-col-2 xs-12 xs-down-5 centered"><h1 className="px12 xs-px15 fnt-system black bolder" >Trusted By Great Startups </h1></div>
          <div className="my-col-10 xs-12 xs-down-5" >
            <TrustedBy />
          </div>
        </div>
      </div>
    </div>

    <div className="my-mother my-bottom-50" >
      <div className="my-col-8 off-2 xs-container centered" >
        <div className="xs-down- xs-down-3vh xs-12"> <Lottie animationData={mobile} loop={true} /></div>
        {/* <div className="img-container-3 xs-down-8vh xs-12 hidden-ls" > <div className="bg-overay" ></div> <img src="https://img.freepik.com/premium-photo/young-black-businessman-suit-sitting-staircase-while-using-his-laptop-work_672594-2788.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /> </div> */}
        <div className="my-mother gap-elements">
          <div className="my-col-7 xs-12 down-10 mg-5" >
            <div className="my-container down-10" >
              <div className="my-mother top-10 hidden-xs">
                <div className="plate-img p-r top-5 " ><img className=" fa-spin scale-8" src="/images/circle.png" alt="" /></div>
              </div>
              <h1 className="px25 xs-px20 my-mother down-2 ubuntuMedium black fnt-system bolder" >Comprehensive IT & Digital Marketing Solutions.</h1>
              <div className="xs-10 xs-off-1 down-2 xs-down-5 lin-2" >
                <span className="px12 ubuntuLight xs-px13 fnt-system light faded-2" >We are your trusted partner for <span className="color-code-1 bold" >IT solutions</span>. With our proven expertise and innovative strategies the digital landscape.</span>
              </div>
              <div className="my-mother gap-elements-centered down-3 xs-down-8" >
                <a href="#" className="rad-30 px13 xs-px13 b-shadow fnt-system  bolder white bg-yellow my-btn-sm" onClick={() => { Navigate('/about') }} >Take a Video Tour <span className="icons bg-white xs-px12  mg-10 px8" ><i className="fas orange  fa-play" ></i></span> </a>
              </div>
              {/* <div className="my-mother top-10 hidden-ls">
                <div className="plate-img p-r top-5 " ><img className=" fa-spin scale-8" src="/images/circle.png" alt="" /></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="my-mother my-bottom-50 hidden-s bg-white" >
      <div className="my-col-8 off-2 xs-container down-5 xs-down-15" >
        <div className="my-col-8 off-2 xs-10 xs-off-1 down-5 centered">
          <h1 className="px25 black fnt-system xs-px20 bolder" >Popular IT Services We Offer
            To Build Your Business</h1>
          <div className="my-mother down-3 xs-down-5 lin-2" > <span className="px13 faded-2 fnt-system light xs-px13" >Our team specializes in delivering tailored solutions designed to elevate
            your brand and drive measurable results.</span> </div>
        </div>
        <div className="my-mother ls-centered-align ls-gap-elements my-b-shadw xs-down-5 down-5" >
          <Zoom>
            <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-grad my-bottom-50 my-bottom-50" >
              <div className="my-container xs-container xs-down-10 centered down-5" >
                <div><h1 className="px10  fnt-system xs-px15 bolder" >Website Development</h1></div>
                <div className="xs-10 xs-off-1 down-2 xs-down-5" ><span className="px9 xs-px13 fnt-system light faded-2">Make a lasting impression with a professionally designed and user-friendly website. </span></div>
                <div className="my-mother down-5 center-content centered xs-down-5" ><span className="plate-img p-r" ><Lottie animationData={webdev} loop={true} /></span></div>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-grad my-bottom-50" >
              <div className="my-container xs-container xs-down-10 centered down-5" >
                <div><h1 className="px10  ubuntuBold xs-px15 fnt-system bolder" >Mobile Apps & Softwares</h1></div>
                <div className="xs-10 xs-off-1 down-2 xs-down-5" ><span className="px9 xs-px13 faded-2 fnt-system light">Build your startup with professionally designed and user-friendly Apps. We optimize your Apps to rank higher. </span></div>
                <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><Lottie animationData={mobile} loop={true} /></span></div>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-grad my-bottom-50" >
              <div className="my-container xs-container xs-down-10 centered down-5" >
                <div><h1 className="px10  ubuntuBold xs-px15 poppings-Medium bolder" >Social Media Marketing</h1></div>
                <div className="xs-10 xs-off-1 down-2 xs-down-5" ><span className="px9 xs-px13 fnt-system light faded-2">Build a strong brand presence and engage with your audience on social media platforms. </span></div>
                <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><Lottie animationData={animationData} loop={true} /> </span></div>
              </div>
            </div>
          </Zoom>
          
          {/* <Zoom>
            <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-s4 my-bottom-50" >
              <div className="my-container xs-container xs-down-10 centered down-5" >
                <div><span className="px10  ubuntuBold xs-px20 poppings-Medium" >Search Engine Optimization </span></div>
                <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><img src="/images/seo.svg" alt="" /></span></div>
                <div className="my-mother down-2 xs-down-5" ><span className="px9 xs-px15 ubuntuLight fnt-system light">Enhance your online visibility & drive organic traffic with our advanced SEO techniques.</span></div>
              </div>
            </div>
          </Zoom> */}

        </div>
      </div>
    </div>

    <div className="my-mother my-bottom-50" >
      <div className="my-col-8 off-2 xs-container xs-down-15 down-10 centered">
        <h1 className="px25 ubuntuMedium black fnt-system xs-px20 bolder" >Tailored Solutions, Proven Results,
          And Exceptional Service</h1>
        <div className="my-col-8 off-2 down-3 xs-container xs-down-5 lin-2" > <span className="px13 xs-px13 faded-2 fnt-system" >We pride ourselves on delivering a value proposition that goes beyond expectations. Our
          approach is centered on understanding your business inside.</span> </div>

        <div className="my-mother down-3 xs-down-10 space-50" >
          <div className="my-col-7 down-5 xs-12" >
            <div className="img-container-3  xs-12 ls-h-60 rad-10 bg-color-code-1" >
              <div className="bg-overlay left centered-align rad-10" >
                <div className="my-col-10 off-1 xs-10 xs-off-1 down-20" >
                  <h1 className="px10 white xs-px15 fnt-system bolder" >Our Values</h1>
                  <div className="my-mother down-3 xs-down-5 lin-2" >
                    <span className="ubuntuBold px15 alice xs-px13 fnt-system light" > Explore Our Unique Value Proposition & How We Drive Business Growth</span>
                  </div>
                </div>
              </div>
              <img src="https://img.freepik.com/premium-photo/people-analyzing-different-signs-symbols_53876-2404.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /></div>
          </div>

          <div className="my-col-7 down-5 xs-12 xs-down-3" >
            <div className="img-container-3  xs-12 ls-h-60 rad-10 bg-color-code-1" >
              <div className="bg-overlay left centered-align rad-10" >
                <div className="my-col-10 off-1 xs-10 xs-off-1 down-20" >
                  <h1 className="px10 white xs-px15 fnt-system bolder" >Our Mission</h1>
                  <div className="my-mother down-3 xs-down-5 lin-2" >
                    <span className="ubuntuBold px15 alice xs-px13 fnt-system light" >We strive to be more than just a service provider; we aim to be a trusted Comapany</span>
                  </div>
                </div>
              </div>
              <img src="https://img.freepik.com/free-photo/diverse-business-colleagues-shoo_53876-23017.jpg?t=st=1737705238~exp=1737708838~hmac=9caeca557f66e3ff5cb430a2f7cc72767213262280a7bb5ffa04f01cdf446ac3&w=1380" alt="" /></div>
          </div>
          <div className="my-col-7 down-5 xs-12 xs-down-3" >
            <div className="img-container-3  xs-12 ls-h-60 rad-10 bg-color-code-1" >
              <div className="bg-overlay left centered-align rad-10" >
                <div className="my-col-10 off-1 xs-10 xs-off-1 down-20" >
                  <h1 className="px10 white xs-px15 fnt-system bolder" >Our Vision</h1>
                  <div className="my-mother down-3 xs-down-5 lin-2" >
                    <span className="ubuntuBold px15 alice xs-px13 fnt-system light" >We aspire to create a world where every business owner feels empowered</span>
                  </div>
                </div>
              </div>
              <img src="https://img.freepik.com/free-photo/happy-excited-businessteam-celebrating-successful-partnership-enjoying-together-startup-office-diverse-smiling-businesspeople-achievement-business-collaboration-concept-victory_482257-36889.jpg?t=st=1737705411~exp=1737709011~hmac=d043189f4a66b5b3d84e93bb29a4eabe7a92b5c8a442ec1c2e63b1a43706a00d&w=1380" alt="" /></div>
          </div>

        </div>

      </div>
    </div>

    <div className="my-mother my-bottom-50 hiddenxs">
      <div className="my-col-10 off-1 xs-container down-10 xs-down-10">
        <div className="centered my-mother"><h1 className="px25 ubuntuMedium black fnt-system xs-px20 bolder">Affordable Plans & Pricing for everyone</h1></div>
        <div className="centered my-mother down-2 xs-down-5"><span className="px13 faded-2 xs-px13  ubuntuLight fnt-system light">Quality Services Tailored to Your Budget</span></div>
        <div className="gap-elements down-5 my-col-10 off-1 xs-10 xs-off-1 xs-down-8 xs-centeed ls-centered-align">
          <span onClick={() => { setPlans('BASIC') }} className={`pd-10 fnt-system bolder xs-px10 bg-faded  fla-border-3 centered-align rad-30 ${plans == 'BASIC' && " bd-code-1 color-code-1"} c-pointer px8 xs-px9`}>BASIC PLAN</span>
          <span onClick={() => { setPlans('STANDARD') }} className={`pd-10 fnt-system bolder xs-px10 bg-faded  fla-border-3 centered-align rad-30 ${plans == 'STANDARD' && " bd-code-1 color-code-1"} c-pointer px8 xs-px9`}>STANDARD PLAN</span>
          <span onClick={() => { setPlans('PREMIUM') }} className={`pd-10 fnt-system bolder xs-px10 bg-faded  fla-border-3 centered-align rad-30 ${plans == 'PREMIUM' && " bd-code-1 color-code-1"} c-pointer px8 xs-px9`}>PREMIUM PLAN</span>
        </div>

        {plans == "BASIC" && <div className="my-col-10 off-1 xs-down-5 xs-12 ls-gap-elements down-3">
          <div className="my-col-5 xs-12 my-bottom-50 ls-rad-10 bg-white my-b-shadow bg-grad bg-pattern my-bottom-50">
            <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
              <div><span className="pd-10 bg-black white rad-30 px8 xs-px10 ubuntuBold upper-case">Basic Plan</span></div>
              <div className="my-mother down-3 xs-down-10"><h1 className="px13 xs-px13 ubuntuMedium fnt-system">Suitable for Startups, individuals, or small businesses.</h1></div>
              <div className="my-col-10 xs-12 xs-down-5 gap-lements">
                <div className="my-mother  down-5">
                  <span className="px10 ubuntuLight xs-px13">Starting from</span>
                  <div className="px25 xs-px20 xs-down-4 color-cod-1 down- ubuntuBold">$500 <span className="faded down-1 ubuntuLight px10 xs-px10">Per Project</span>  </div>
                </div>
                <div className="my-mother down-3 xs-down-3"><span className="px15 xs-px12 faded-sol">Or</span></div>
                <div className="my-mother  down-2">
                  <span className="px10 ubuntuLight xs-px13">Starting from</span>
                  <div className="px25 xs-px20 xs-down-4 color-cde-1 down- ubuntuBold">$300 <span className="faded xs-px10 down-1 ubuntuLight px10">Per Month (Ongoing Services)</span>  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="my-col-7 my-bottom-50 xs-12 ls-rad-10 bg-white bd-coe-1">
            {/* <span className="circle-deco" ></span> */}
            <div className="my-container xs-10 xs-off-1 xs-down-8 down-5">
              <div><span className="px12  faded-2 ubuntuBold fnt-system xs-px20">Deliverables</span></div>
              <div className="my-mother down-2 xs-down-5">
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Web Development</span>: Up to 5-page website, basic design.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">SEO</span>: Initial audit, keyword research, and on-page optimization.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Social Media Marketing</span>: 1 platform, 3 posts per week, and 1 ad campaign.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Company Email Setup</span>: company email for 5 users only.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Free Consultation & reviews</span></span>
                </div>
                <div className="my-mother down-5 xs-down-10">
                  <a href="#" className="rad-30 px9 white fnt-system bolder bg-color-code-1 my-btn-sm xs-px13" onClick={() => { Navigate('/contacts') }}> Contact Now <span className="icons bg-white mg-10 px8 xs-px13" ><i className="fas color-code-1 deg-45 fa-arrow-up" ></i></span> </a>
                </div>
              </div>
            </div>
          </div>

        </div>}

        {plans == "STANDARD" && <div className="my-col-10 off-1 xs-down-5 xs-12 ls-gap-elements down-3">
          <div className="my-col-5 xs-12 my-bottom-50 ls-rad-10 bg-white my-b-shadow bg-grad bg-pattern my-bottom-50">
            <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
              <div><span className="pd-10 bg-black white rad-30 px8 xs-px10 ubuntuBold upper-case">STANDARD Plan</span></div>
              <div className="my-mother down-3 xs-down-10"><h1 className="px13 xs-px13 bolder fnt-system">Suitable for Medium-sized businesses.</h1></div>
              <div className="my-col-10 xs-12 xs-down-5 gap-lements">
                <div className="my-mother down-5">
                  <span className="px10 ubuntuLight xs-px13">Starting from</span>
                  <div className="px25 xs-px20 xs-down-4 color-cod-1 down- ubuntuBold">$1,000 <span className="faded down-1 ubuntuLight px10 xs-px10">Per Project</span>  </div>
                </div>
                <div className="my-mother down-3 xs-down-3"><span className="px15 xs-px12 faded-sol">Or</span></div>
                <div className="my-mother down-2">
                  <span className="px10 ubuntuLight xs-px13">Starting from</span>
                  <div className="px25 xs-px20 xs-down-4 color-cde-1 down- ubuntuBold">$800 <span className="faded xs-px10 down-1 ubuntuLight px10">Per Month (Ongoing Services)</span>  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-col-7 my-bottom-50 xs-12 ls-rad-10 bg-white bd-coe-1">
            <div className="my-container xs-10 xs-off-1 xs-down-8 down-5">
              <div><span className="px12 faded-2 ubuntuBold fnt-system xs-px20">Deliverables</span></div>
              <div className="my-mother down-2 xs-down-5">
                <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Web Development</span>: Up to 10-page website, standard design.</span>
                </div>
                <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">SEO</span>: Comprehensive SEO, local SEO, and 10 backlinks/month.</span>
                </div>
                <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Social Media Marketing</span>: 2 platforms, 5 posts per week, and 2 ad campaigns.</span>
                </div>
                <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Company Email Setup</span>: company email for unlimited users.</span>
                </div>
                <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Free Consultation, unlimited reviews & discounts</span></span>
                </div>
                <div className="my-mother down-5 xs-down-10">
                  <a href="#" className="rad-30 px9 white fnt-system bolder bg-color-code-1 my-btn-sm xs-px13" onClick={() => { Navigate('/contacts') }}> Contact Now <span className="icons bg-white mg-10 px8 xs-px13"><i className="fas color-code-1 deg-45 fa-arrow-up"></i></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>}


        {plans == "PREMIUM" && <div className="my-col-10 off-1 xs-down-5 xs-12 ls-gap-elements down-3">
          <div className="my-col-5 xs-12 my-bottom-50 ls-rad-10 bg-white my-b-shadow bg-grad bg-pattern my-bottom-50">
            <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
              <div><span className="pd-10 bg-black white rad-30 px8 xs-px10 ubuntuBold upper-case">Premium Plan</span></div>
              <div className="my-mother down-3 xs-down-10"><h1 className="px13 xs-px13 bolder fnt-system">Suitable for established businesses or enterprises.</h1></div>
              <div className="my-col-10 xs-12 xs-down-5 gap-lements">
                <div className="my-mother  down-5">
                  <span className="px10 ubuntuLight xs-px13">Starting from</span>
                  <div className="px25 xs-px20 xs-down-4 color-cod-1 down- ubuntuBold">$1,500 <span className="faded down-1 ubuntuLight px10 xs-px10">Per Project</span>  </div>
                </div>
                <div className="my-mother down-3 xs-down-3"><span className="px15 xs-px12 faded-sol">Or</span></div>
                <div className="my-mother  down-2">
                  <span className="px10 ubuntuLight xs-px13">Starting from</span>
                  <div className="px25 xs-px20 xs-down-4 color-cde-1 down- ubuntuBold">$1,000 <span className="faded xs-px10 down-1 ubuntuLight px10">Per Month (Ongoing Services)</span>  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-col-7 my-bottom-50 xs-12 ls-rad-10 bg-white bd-coe-1">
            <div className="my-container xs-10 xs-off-1 xs-down-8 down-5">
              <div><span className="px12  faded-2 ubuntuBold fnt-system xs-px20">Deliverables</span></div>
              <div className="my-mother down-2 xs-down-5">
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Web Development</span>: Custom web apps, e-commerce integration.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">SEO</span>: Full SEO strategy, technical SEO, and 20 backlinks/month.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Social Media Marketing</span>: 3 platforms, 10 posts per week, and 4 ad campaigns.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Company Email Setup</span>: company email for unlimited users.</span>
                </div>
                <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                  <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                  <span className="black px10 ubuntuLight fnt-system light xs-px13"><span className="ubuntuBold fnt-system black">Free Consultation, unlimited reviews & discounts</span></span>
                </div>
                <div className="my-mother down-5 xs-down-10">
                  <a href="#" className="rad-30 px9 white fnt-system bg-color-code-1 my-btn-sm xs-px13 bolder" onClick={() => { Navigate('/contacts') }}> Contact Now <span className="icons bg-white mg-10 px8 xs-px13"><i className="fas color-code-1 deg-45 fa-arrow-up"></i></span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>}


        <div className="my-col-10 off-1 down-5 xs-container xs-down-10 my-bottom-50" >
          <div className="my-mother down-5">
            <div><h1 className="px15 ubuntuMedium fnt-system xs-px15" >Add Ons</h1></div>
            <div className="my-mother down-2 xs-down-2">
              <div className="px12 xs-px13 tom down-2 xs-12 xs-down-3  my-ottom-20 gap-elements centered-align faded-sol ubuntuLight">
                <span className="icons hidden-xs bd-code-1 g-color-code-1 color-code-1 px8"> <i className="fas fa-check"></i></span>
                <span className="black px10 xs-px13 ubuntuLight fnt-system light faded-2"><span className="ubuntuBold fnt-system light faded-2 black xs-px13">Maintenance (websites)</span>:  $50–$200/month.</span>
              </div>
              <div className="px12 xs-px13 tom down-2 xs-12 xs-down-3  my-ottom-20 gap-elements centered-align faded-sol ub untuLight">
                <span className="icons hidden-xs bd-code-1 g-color-code-1 color-code-1 px8"> <i className="fas fa-check"></i></span>
                <span className="black px10 xs-px13 ubuntuLight fnt-system light faded-2"><span className="ubuntuBold fnt-system light faded-2 black xs-px13">Extra SEO backlinks</span>:  $10–$50/link.</span>
              </div>
              <div className="px12 xs-px13 tom down-2 xs-12 xs-down-3  my-ottom-20 gap-elements centered-align faded-sol ubuntuLight">
                <span className="icons hidden-xs bd-code-1 g-color-code-1 color-code-1 px8"> <i className="fas fa-check"></i></span>
                <span className="black px10 xs-px13 ubuntuLight fnt-system light faded-2"><span className="ubuntuBold fnt-system light faded-2 black xs-px13">Additional social media platforms</span>:  $100–$500/month per platform.</span>
              </div>
              {/* <div  className="my-mother down-5"><span className="px13 ubuntuMedium" >Payment Terms</span></div> */}
              <div className="my-mother down-5 px13 xs-px13 xs-down-4 faded-2 fnt-system">50% upfront and 50% upon project completion for one-time projects.</div>
              <div className="my-mother down-1 px13 xs-px13 xs-down-2 faded-2 fnt-system">Monthly billing for ongoing services.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {filteredPosts && <div className="my-mother down-5 xs-down-10 bg-white my-bottom-50" >
      <div className="my-col-10 off-1 xs-12 down-5 xs-down-10 centered">
        <h1 className="px25 ubuntuMedium black fnt-system xs-px20 bolder" >Insights & Innovations: <br />Our Latest Blog Posts</h1>
        <div className="my-container xs-10 xs-off-1 down-3 xs-down-5" > <span className="px13 xs-px13 faded-2 fnt-system light" >Stay up-to-date with the latest trends and developments in the IT & digital marketing space.</span> </div>

        <div className="my-mother down-2 xs-down-10 space-50" >
          <div className="my-container xs-container v-gap-20 ls-gap-elements spae-51 down-5" >
            {!filteredPosts && <CustomSkeleton />}

            {filteredPosts?.slice(0, 4)?.map((i: any, index: number) => (
              <div className="my-col-4 xs-12 rad-10" key={index} onClick={() => { Navigate(`/posts/${encodeURIComponent(i?.title).replace(/%20/g, "+")}`) }}>
                <div className="bg-overlay left rad-10">
                  <div className="my-container xs-10 xs-off-1 xs-down-30vh down-40">
                    <h1 className="alice px10 bolder xs-px20 fnt-system">{i.title}</h1>
                    <div className="my-mother down-2 xs-down-4">
                      <span className="px10 faded-sol ubuntuLight fnt-system light xs-px15">{formatDateToOrdinalString(i.createdAt)}</span>
                    </div>
                  </div>
                </div>
                <div className="img-container-4 rad-10"><img src={i.coverImage?.secure_url} alt="" /></div>
              </div>
            ))}
          </div>

          <div className="my-col-10 off-1 down-5 xs-down-5 xs-container  right"><button className="pd-5 c-pointer px10 xs-px13 faded-2 fnt-system light" onClick={() => { Navigate('/blogs') }}>More Posts <i className="fas fa-angle-right mg-5"></i> </button></div>
        </div>
      </div>
    </div>}

    <div className="my-mother my-bottom-50 bg-color-code-1 down-5 hiden-xs">
      {/* <span className="circle-deco hidden-xs"></span> */}
      <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-20 centered down-5">
        <div className="my-col-8 off-2 down-5"><h1 className="px25 ubuntuBold alice fnt-system xs-px20 bolder">Ready To Take Your Business To
          The Next Level ?</h1></div>
        <div className="my-mother down-3 xs-down-5"><span className="ubuntuLight alice px12 fnt-system light xs-px13" >Partner with us and watch your business grow</span></div>
          {/* <div><Lottie animationData={animationData} loop={true} /></div> */}
        <div className="my-mother down-5 my-bottom-50 xs-down-10"> <a href="#" onClick={() => { Navigate('/contacts') }} className="rad-30 px9 b-shaow bolder  bg-white color-code-1 my-btn-sm fnt-system xs-px13" >Contact Us<span className="icons bg-color-code-1 mg-10 px8 xs-px12" ><i className="fas white deg-45 fa-arrow-up" ></i></span> </a></div>
      </div>
    </div>

    <div className="my-mother down-3 xs-down-10"><WmFooter /></div>

  </>);
}

export default Home;