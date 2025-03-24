import { useNavigate } from "react-router-dom";
import MyFooter from "../component/footer";
import NavBar from "../component/nav";
import { Zoom, Fade } from "react-reveal"
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1737036630886.json";
import webdev from "../animations/webdev.json";
import mobile from "../animations/mobile.json";





const About = () => {

  const team = [
    {
      name: "Fatolu Olaoluwa",
      role: " Senior Software Engineer (CEO)",
      image: "/ola.jpg"
    },
    {
      name: "Mayowa Agboola",
      role: "Product Designer",
      image: "/mayowa.jpg"
    },
    {
      name: "OluwaFolabomi Bakare",
      role: "Content Maketer",
      image: "/fola.jpg"
    },
    {
      name: "Ayomide Babatunde",
      role: "Software Engineer",
      image: "/ayo.jpg"
    },
    {
      name: "Agbeje Goodness",
      role: "Graphics Designer",
      image: "/goodness.jpg"
    },
    {
      name: "Ayoade Oluwaseyi",
      role: "Intern Frontend developer",
      image: "/Dan.jpg"
    },
  ]

  const Navigate = useNavigate();
  return (
    <>
      <div className="hidden-xs" >
        <span className="plate-img down-20 xs-down-10vh slide" ><img src="/images/elements1.png" alt="" /></span>
        <NavBar active={'about'} />
        <div className="my-container xs-container md-container xs-down-10vh d-col-1">
          <div className="centered xs-12 xs-down-5vh ">
            <div className="my-col-6 xs-12 off-3 px20 xs-px20 down-2 black fnt-system">
              <h3>Build Your Business Idea With Our IT Development Solutions.</h3>
            </div>
            <div className="my-col-8 xs-container xs-down-5 md-down-5 off-2 down-3">
              <span className="px13 xs-px15 faded-2 fnt-system">
                We specialize in revolutionizing your online presence through expert IT solutions.
              </span>
            </div>
          </div>
          {/* <div className="my-mother down-5 gap-elements-center xs-down-10">
        <div className="img-container-2 my-col-4 xs-4 hidden-xs" > <div className="bg-overla" ></div> <img src="/images/lady_1.jpeg" alt="" /> </div>
        </div> */}
        </div>
        {/* About Us */}
        <div className="my-container  my-bottom-50 xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-3">
          <div className="my-col-8 off-2 centered down-3 xs-down-3">
            <span className="faded px15 xs-px15 fnt-system light faded-2">
              At <span className="color-code-1 fnt-system">WillmaestroIT</span>, we tailor our services to meet your unique needs, from digital marketing and social media management to advanced software design and development solutions, driving innovation and efficiency in every project
            </span>
          </div>
          <div className="my-mother down-10 centered my-bottom-50 xs-down-10"> <a href="#" onClick={() => { Navigate('/contacts') }} className="rad-30 px9 b-shaow ubuntuBold  bg-color-code-1 white my-btn-sm poppings-Bold xs-px15" >Take a Video tour <span className="icons bg-white mg-10 px8 xs-px12" ><i className="fas color-code-1 fa-play" ></i></span> </a></div>
        </div>


        <div className='my-mother fnt-system centered-lign bg-white'>
          <div className="my-mother my-bottom-50" >
            <div className="my-col-8 off-2 xs-container xs-down-10 down-10 centered">
              <h1 className="px20 black fnt-system xs-px20" >Tailored Solutions, Proven Results,
                <br className="hidden-xs" /> And Exceptional Service</h1>
              <div className="my-col-8 off-2 down-3 xs-12 xs-down-5" > <p className="px12 xs-px15 faded-2 fnt-system " >We pride ourselves on delivering a value proposition that goes beyond expectations. Our
                approach is centered on understanding your business inside.</p> </div>

              <div className="my-mother down-5 ls-gap-elements xs-down-10" >
                <div className="my-col-7 down- xs-12" >
                  <div className="img-container-2 xs-12 rad-10 bg-color-code-1" >
                    <div className="bg-overlay left centered-align rad-10" >
                      <div className="my-col-10 off-1 xs-10 xs-off-1 down-20" >
                        <h1 className="px13 white  xs-px20 fnt-system" >Our Values</h1>
                        <p className="my-mother down-1 xs-down-1" >
                          <span className="fnt-system px12 white xs-px13 fnt-system" > Explore Our Unique Value Proposition & How We Drive Business Growth</span>
                        </p>
                      </div>
                    </div>
                    <img src="https://img.freepik.com/premium-photo/people-analyzing-different-signs-symbols_53876-2404.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /></div>
                </div>
                <div className="my-col-5 xs-12 xs-down-5" >
                  <div className="my-col-12 xs-12">


                    <div className="h-20 my-b-shadow my-col-12 xs-12 bg-s2 my-bottom-50 rad-10 ">
                      <div className="my-container xs-10 xs-off-1 xs-down-10 left down-5" >
                        <div className="gap-20 top-1" > <span className="iconss bg-color-code-1 px10 xs-px12 white" ><i className="fa fa-arrow-up deg-45"></i></span> </div>
                        <div > <h1 className="px9 fnt-system color-code-1 fnt-system xs-px20" >Our Mission</h1> </div>
                        <div className="down-2 xs-down-4" > <h4 className="fnt-system" >We strive to be more than just a service provider; we aim to be a trusted Comapany.
                        </h4> </div>
                        <div className="my-mother down-2 xs-down-5 justify"><span className="px8 ubuntuLight xs-px13 fnt-system">By staying true to our mission and values, we are committed to helping businesses of all sizes achieve their goals and realize their potential.</span></div>
                      </div>
                    </div>


                    <div className="xs-12 xs-down-5 h-20 my-b-shadow my-col-12 bg-s1 my-bottom-50 rad-10 down-2">
                      <div className="my-container xs-10 xs-off-1 xs-down-10 left down-5" >
                        <div className="gap-20 top-1" > <span className="iconss bg-red px10  xs-px12 white" ><i className="fa fa-arrow-up deg-45"></i></span> </div>
                        <div > <span className="px9 fnt-system red fnt-system  xs-px20" >Our Vision</span> </div>
                        <div className="down-2 xs-down-4" > <h4 className="fnt-system" >We aspire to create a world where every business owner feels empowered..
                        </h4> </div>
                        <div className="my-mother down-2 xs-down-5 justify"><span className="px8 ubuntuLight xs-px13 fnt-system">By staying true to our vision and values, we are committed to driving positive change and shaping a brighter future for businesses and communities.</span></div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='fnt-system  my-bottom-50 my-mother centered-align'>
          <div className="my-mother my-bottom-50 hidden-s" >
            <div className="my-col-8 off-2 xs-container down-5 xs-down-10" >
              <div className="my-col-8 off-2 down-5 centered">
                <h1 className="px20  black fnt-system xs-px25" >Popular IT Services We Offer
                  To Build Your Business</h1>
                <p className="my-mother down-3 xs-down-5" > <span className="px12 faded-2 fnt-system xs-px15" >Our expert team specializes in delivering tailored solutions designed to elevate
                  your brand and drive measurable results.</span> </p>
              </div>
              <div className="my-mother ls-centered-align ls-gap-elements my-b-shadw xs-down-10 down-5" >
                <Zoom>
                  <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 bg-s1 my-bottom-50" >
                    <div className="my-container xs-container xs-down-10 centered down-5" >
                      <div><h1 className="px10  fnt-system xs-px20 fnt-system" >Website Development</h1></div>
                      <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><img src="/images/webdesign.svg" alt="" /></span></div>
                      <div className="my-mother down-2 xs-down-5" ><p className="px9 xs-px15 fnt-system ">Make a lasting impression with a professionally designed and user-friendly website. </p></div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-s2 my-bottom-50" >
                    <div className="my-container xs-container xs-down-10 centered down-5" >
                      <div><h1 className="px10  fnt-system xs-px20 fnt-system" >Mobile Apps & Softwares</h1></div>
                      <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><img src="/images/appdev.svg" alt="" /></span></div>
                      <div className="my-mother down-2 xs-down-5" ><p className="px9 xs-px15 fnt-system">Build your startup with professionally designed and user-friendly Apps. We optimize your Apps to rank higher. </p></div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-s3 my-bottom-50" >
                    <div className="my-container xs-container xs-down-10 centered down-5" >
                      <div><h1 className="px10  fnt-system xs-px20 fnt-system" >Social Media Marketing</h1></div>
                      <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><img src="/images/marketing.svg" alt="" /></span></div>
                      <div className="my-mother down-2 xs-down-5" ><p className="px9 xs-px15 fnt-system">Build a strong brand presence and engage with your audience on social media platforms. </p></div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-s4 my-bottom-50" >
                    <div className="my-container xs-container xs-down-10 centered down-5" >
                      <div><h1 className="px10  fnt-system xs-px20 fnt-system" >Search Engine Optimization </h1></div>
                      <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><img src="/images/seo.svg" alt="" /></span></div>
                      <div className="my-mother down-2 xs-down-5" ><p className="px9 xs-px15 fnt-system">Enhance your online visibility & drive organic traffic with our advanced SEO techniques.</p></div>
                    </div>
                  </div>
                </Zoom>

              </div>
            </div>
          </div>
        </div>

        <div className="my-mother my-bottom-50 bg-white down-5 hiden-xs" >
          <div className="my-col-10 off-1 xs-off-1 xs-10 centered down-10">
            <div className="my-col-6 off-3" ><h1 className="px20 fnt-system bold">We bring a wealth of experience from a wide range of backgrounds </h1></div>
            <div className="my-col-6 off-3 down-3"><span className="px13 fnt-system faded-2" >Our philosophy is simple; hire great people and give them the resources and support to do their best work</span></div>
          </div>
          <div className="my-container my-bottom-50 down-8 gap-elements flex">
            {team?.map((i, index) => (
              <Fade bottom >
              <div className="my-col-4 xs-12 rad-10" >
              <div className="bg-overlay left rad-10">
                <div className="my-container xs-10 xs-off-1 xs-down-30vh down-40">
                  <h1 className="alice px10 bolder xs-px20 fnt-system">{i.name}</h1>
                  <div className="my-mother down-1 xs-down-4">
                    <span className="px10 faded-sol ubuntuLight fnt-system light xs-px15">{i.role}</span>
                  </div>
                </div>
              </div>
              <div className="img-container-4 rad-10 tean-h"><img src={i?.image} alt="" /></div>
             </div>
              </Fade>
            ))}
          </div>
        </div>

        <div className="my-mother my-bottom-50 bg-color-code-1 hiden-xs">
          <span className="circle-deco hidden-xs"></span>
          <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-20 centered down-5">
            <div className="my-col-8 off-2 down-5"><span className="px25 ubuntuBold alice poppings-Bold xs-px25">Ready To Take Your Business To
              The Next Level ?</span></div>
            <div className="my-mother down-3 xs-down-5"><span className="ubuntuLight alice px12 poppings-Light xs-px15" >Partner with Us for Cutting-Edge Digital Solutions That Drive Success</span></div>
            <div className="my-mother down-5 my-bottom-50 xs-down-10"> <a href="#" onClick={() => { Navigate('/contacts') }} className="rad-30 px9 b-shaow ubuntuBold  bg-white color-code-1 my-btn-sm poppings-Bold xs-px15" >Free Consultation<span className="icons bg-color-code-1 mg-10 px8 xs-px12" ><i className="fas white deg-45 fa-arrow-up" ></i></span> </a></div>
          </div>
        </div>

        <div className="my-mother xs-down-10">
          <MyFooter />
        </div>
      </div>





      {/* mobile about */}
      <div className="hidden-ls">
        <>
          <span className="plate-img down-20 xs-down-10vh slide" ><img src="/images/elements1.png" alt="" /></span>
          <NavBar active={'about'} />
          <div className="my-container xs-container md-container xs-down-10vh bg-grad h-100-vh d-col-1">
            <div className="centered xs-12 xs-down-5vh ">
              <div className="my-col-6 xs-10 xs-off-1 off-3">
                <span className="fnt-system xs-px20 bolder">Build Your Business Idea With Our IT Development Solutions.</span>
              </div>
              <div className="my-col-8 xs-10 xs-off-1 xs-down-5 md-down-5 off-2 down-3">
                <span className="xs-px13 faded-2 fnt-system">
                  We specialize in revolutionizing your online presence through expert IT solutions.
                </span>
              </div>
            </div>
            <div className="my-mother down-5 xs-down-10">
              <div className="img-container-3 unset-absolute rad-30">
                <div className="bg-ovrlay rad-30" ></div>
                <img src="https://img.freepik.com/premium-photo/young-black-businessman-suit-sitting-staircase-while-using-his-laptop-work_672594-2788.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" />
              </div>
            </div>
          </div>
          <div className="my-container xs-centered xs-down-5 md-down-10 xs-container md-container my-bottom-50 down-5">
            <div className="my-container centered xs-container down-2 xs-down-3">
              <span className="px20 xs-px13 fnt-system lin-2 ligh  faded-2">
                At <span className="color-code-1">WillmaestroIT</span>, we tailor our services to meet your unique needs, from digital marketing and social media management to advanced software design and development solutions, driving innovation and efficiency in every project
              </span>
            </div>
          </div>

          <div className="my-mother my-bottom-50 bg-white" >
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
                <div className="my-col-5 xs-12 xs-down-5" >
                  <div className="my-col-10 off-1 xs-12">


                    <div className="h-20 my-b-shadow my-col-12 xs-12 bg-s2 my-bottom-50 rad-10 down-5">
                      <div className="my-container xs-10 xs-off-1 xs-down-10 left down-5" >
                        <div className="gap-20 top-1" > <span className="iconss bg-color-code-1 px10 xs-px12 white" ><i className="fa fa-arrow-up deg-45"></i></span> </div>
                        <div > <h1 className="px9 ubuntuBold color-code-1 fnt-system xs-px20 bolder" >Our Mission</h1> </div>
                        <div className="down-2 xs-down-4" > <h1 className="px11 xs-px13 fnt-system " >We strive to be more than just a service provider; we aim to be a trusted Comapany.
                        </h1> </div>
                        <div className="my-mother down-2 lin-2 xs-down-4"><span className="xs-px13 faded-2 fnt-system light">By staying true to our mission and values, we are committed to helping businesses of all sizes achieve their goals and realize their potential.</span></div>
                      </div>
                    </div>


                    <div className="xs-12 xs-down-5 h-20 my-b-shadow my-col-12 bg-s1 my-bottom-50 rad-10 down-2">
                      <div className="my-container xs-10 xs-off-1 xs-down-10 left down-5" >
                        <div className="gap-20 top-1" > <h1 className="iconss bg-red px10  xs-px12 white" ><i className="fa fa-arrow-up deg-45"></i></h1> </div>
                        <div > <h1 className="px9 ubuntuBold red fnt-system xs-px20 bolder" >Our Vision</h1> </div>
                        <div className="down-2 xs-down-4" > <h1 className="xs-px13 fnt-system" >We aspire to create a world where every business owner feels empowered..
                        </h1> </div>
                        <div className="my-mother down-2 xs-down-4 lin-2"><span className="px8 ubuntuLight xs-px13 fnt-system light faded-2">By staying true to our vision and values, we are committed to driving positive change and shaping a brighter future for businesses and communities.</span></div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="my-mother my-bottom-50 hidden-s" >
            <div className="my-col-8 off-2 xs-container down-5 xs-down-15" >
              <div className="my-col-8 off-2 xs-container down-5 centered">
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
                      <div className="xs-container down-2 xs-down-5" ><span className="px9 xs-px13 fnt-system light faded-2">Make a lasting impression with a professionally designed and user-friendly website. </span></div>
                      <div className="my-mother down-5 center-content centered xs-down-5" ><span className="plate-img p-r" ><Lottie animationData={webdev} loop={true} /></span></div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-grad my-bottom-50" >
                    <div className="my-container xs-container xs-down-10 centered down-5" >
                      <div><h1 className="px10  ubuntuBold xs-px15 fnt-system bolder" >Mobile Apps & Softwares</h1></div>
                      <div className="xs-container down-2 xs-down-5" ><span className="px9 xs-px13 faded-2 fnt-system light">Build your startup with professionally designed and user-friendly Apps. We optimize your Apps to rank higher. </span></div>
                      <div className="my-mother down-5 center-content centered xs-down-8" ><span className="plate-img p-r" ><Lottie animationData={mobile} loop={true} /></span></div>
                    </div>
                  </div>
                </Zoom>
                <Zoom>
                  <div className="my-col-3 xs-container xs-down-5 rad-10 my-b-shadow h-200 card-hover bg-grad my-bottom-50" >
                    <div className="my-container xs-container xs-down-10 centered down-5" >
                      <div><h1 className="px10  ubuntuBold xs-px15 poppings-Medium bolder" >Social Media Marketing</h1></div>
                      <div className="xs-container down-2 xs-down-5" ><span className="px9 xs-px13 fnt-system light faded-2">Build a strong brand presence and engage with your audience on social media platforms. </span></div>
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

          <div className="my-mother my-bottom-50  down-5 hiden-xs bg-white" >
            <div className="my-col-10 off-1 xs-container centered down-5 xs-down-15">
            <div className="my-col-10 off-1 xs-container centered down-10">
            <div className="my-col-6 off-3" ><h1 className="px20 xs-px20 fnt-system bolder">We bring a wealth of experience from a wide range of backgrounds </h1></div>
            <div className="my-col-6 off-3 down-3 xs-down-5"><span className="px13 xs-px13 fnt-system faded-2" >Our philosophy is simple; hire great people and give them the resources and support to do their best work</span></div>
          </div>
            <div className="my-container my-bottom-50 xs-12 xs-down-10 down-8 v-gap-20">
            {team?.map((i, index) => (
              <div className="my-col-4 xs-12 rad-10" >
              <div className="bg-overlay left rad-10">
                <div className="my-container xs-10 xs-off-1 xs-down-40vh down-40">
                  <h1 className="alice px10 bolder xs-px20  fnt-system">{i.name}</h1>
                  <div className="my-mother down-1 xs-down-2">
                    <span className="px10 faded-sol ubuntuLight fnt-system light xs-px15">{i.role}</span>
                  </div>
                </div>
              </div>
              <div className="img-container-4 rad-10 tean-h"><img src={i?.image} alt="" /></div>
            </div>
            ))}
          </div>
            </div>
          </div>

          <div className="my-mother my-bottom-50 bg-color-code-1 down-5 hiden-xs">
            <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-20 centered down-5">
              <div className="my-col-8 off-2 down-5"><h1 className="px25 ubuntuBold alice fnt-system xs-px20 bolder">Ready To Take Your Business To
                The Next Level ?</h1></div>
              <div className="my-mother down-3 xs-down-5"><span className="ubuntuLight alice px12 fnt-system light xs-px13" >Partner with Us for Cutting-Edge Digital Solutions That Drive Success</span></div>
              <div className="my-mother down-5 my-bottom-50 xs-down-10"> <a href="#" onClick={() => { Navigate('/contacts') }} className="rad-30 px9 b-shaow bolder  bg-white color-code-1 my-btn-sm fnt-system xs-px13" >Free Consultation<span className="icons bg-color-code-1 mg-10 px8 xs-px12" ><i className="fas white deg-45 fa-arrow-up" ></i></span> </a></div>
            </div>
          </div>



          <div className="my-mother xs-down-10">
            <MyFooter />
          </div>
        </>
      </div>

    </>
  );
};

export default About;
