import { Zoom, Fade } from "react-reveal"
import './style.css'
import TrustedBy from '../../component/trustedBy';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUserAuthContext from '../../hook/userUserAuthContext';
import CustomSkeleton from '../../component/skeleton';
import { formatDateToOrdinalString } from '../../utils/useutils';
import WmFooter from '../../component/footer';
import NavBar from "../../component/nav";
import Lottie from "lottie-react";
import animationData from "../../animations/Animation - 1737036630886.json";

const HomePage = () => {
    const [plans, setPlans] = useState('BASIC');
    const { filteredPosts, postParams, setPostParams, getAllPosts } = useUserAuthContext();
    const Navigate = useNavigate();

    useEffect(() => {
        getAllPosts({
            page: 1,
            limit: 50,
            totalPages: 0,
            filter: {}
        })
    }, [])


    return (<>
        <section className='fnt-system bg-grad'>
            <NavBar active="home" />
            <span className="plate-img down-20 slide xs-down-8vh" ><img src="/images/elements1.png" alt="" /></span>
            <div className='my-container centered-align down-20 '>
                <div className='hero-container gap-elements '>
                    <div className='my-col-6 down-1 '>
                        <span className='pd-btn bg-color-code-3 ubuntuLight color-code-1 px9'>No. 1 SEO & Digital Marketing Agency</span>
                        <Fade left> <h1 className='px30 fnt-system lin-2 down-3' >Grow Your Business With  <span className="color-code-1">Trusted &</span> <span className="color-code-1">Figure Driven</span> Results</h1></Fade>
                        <Fade left> <p className='px12 fnt-system down-3 faded-2 down-1 '> With a reputation for excellence, <span className='color-code-1 bold'> WillmaestroIT</span> has helped businesses to grow through our result oriented services. We don’t just build systems; we deliver results</p></Fade>

                        <Fade bottom ><div className="my-mother down-4">
                            <a href="#" className="rad-30 card-hover px9 white fnt-system bg-color-code-1 b-shadow my-btn-sm bold centered-align" onClick={() => { Navigate('/about') }}>About Us <span className="icons bg-white mg-10 px8" ><i className="fas color-code-1 dg-45 fa-play" ></i></span> </a>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Fade right >
                <div className="my-col-6 off-6 full-img" >
                <Lottie animationData={animationData} loop={true} />
                </div>
            </Fade>

            <div className='my-mother bg-color-code-2 h-30 centered-align p-absolute bottom-0'>
                <div className='my-container bg-color-code-2'>
                    <div className="my-col-2 xs-2"><h1 className="px12 xs-px13 fnt-system black" >Trusted By <br />Great Startups </h1></div>
                    <div className="my-col-10 xs-10" >
                        <TrustedBy />
                    </div>
                </div>
            </div>
        </section>


        <section className='fnt-system bg-grad centered-align'>
            <Fade bottom >
                <div className="my-mother my-bottom-50" >
                    <span className="plate-img down-20 slide xs-down-8vh" ><img src="/images/elements1.png" alt="" /></span>
                    <div className="my-col-8 off-2 xs-container down-15" >
                        <div className="img-container-2 xs-down-8vh xs-12 hidden-ls" > <div className="bg-overa" ></div> <img src="https://img.freepik.com/premium-photo/young-black-businessman-suit-sitting-staircase-while-using-his-laptop-work_672594-2788.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /> </div>
                        <div className="my-mother gap-elements">
                            <div className="img-container-2 my-col-4 xs-4 hidden-xs" > <div className="bg-overla" ></div> <img src="/images/lady_1.jpeg" alt="" /> </div>
                            <div className="my-col-7 xs-12 xs-down-8 down-10 mg-5" >
                                <div className="my-container down-10" >
                                    <div className="my-mother top-10 hidden-xs">
                                        <div className="plate-img p-r top-5 " ><img className=" fa-spin scale-8" src="/images/circle.png" alt="" /></div>
                                    </div>
                                    <h1 className="px25 xs-px30 my-mother down-2 black fnt-system" >Comprehensive IT & Digital Marketing Solutions.</h1>
                                    <p className="my-mother down-2 xs-down-5" >
                                        <span className="px12 xs-px20 fnt-system faded-2" >We are your trusted partner for comprehensive SEO and IT solutions. With our proven expertise and innovative strategies the digital landscape.</span>
                                    </p>
                                    <div className="my-mother gap-elements down-3 xs-down-8" >
                                        <a href="#" className="rad-30 px9 b-shaow white centered-align my-btn-sm my-b-shadow fnt-system xs-px15 bg-yellow" onClick={() => { Navigate('/about') }} >Learn More<span className="icons bg-white xs-px12  mg-10 px8" ><i className="fas orange deg-45 fa-arrow-up" ></i></span> </a>
                                    </div>
                                    <div className="my-mother top-10 hidden-ls">
                                        <div className="plate-img p-r top-5 " ><img className=" fa-spin scale-8" src="/images/circle.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-container-2 down-20 my-col-3 xs-12 hidden-xs hidden-md" >
                                <div className="bg-overla" ></div>
                                <img src="/images/man_1.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="img-container-2 down-20 my-col-3 xs-12 hidden-ls hidden-xs hidden-md" >
                            <div className="bg-overla" ></div>
                            <img src="https://img.freepik.com/free-photo/healthy-lifestyle-sustained-home_23-2149362436.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>

        <section className='fnt-system bg-grad centered-align'>
            <Fade bottom>
                <div className="my-mother my-bottom-50 hidden-s" >
                    <div className="my-col-8 off-2 xs-container down-5 xs-down-10" >
                        <div className="my-col-8 off-2 down-5 centered">
                            <h1 className="px25  black fnt-system xs-px25" >Popular IT Services We Offer
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
            </Fade>
        </section>


        <section className='fnt-system bg-grad centered-lign'>
            <Fade bottom>
                <div className="my-mother my-bottom-50" >
                    <div className="my-col-8 off-2 xs-container xs-down-10 down-10 centered">
                        <h1 className="px25 black fnt-system xs-px20" >Tailored Solutions, Proven Results,
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


                                    <div className=" my-b-shadow my-col-12 xs-12 bg-s2  h-20 rad-10 ">
                                        <div className="my-container xs-10 xs-off-1 xs-down-10 left down-5" >
                                            <div className="gap-20 top-1" > <span className="iconss bg-color-code-1 px10 xs-px12 white" ><i className="fa fa-arrow-up deg-45"></i></span> </div>
                                            <div > <h1 className="px9 fnt-system color-code-1 bold fnt-system xs-px20" >Our Mission</h1> </div>
                                            <div className="down-2 xs-down-4" > <h4 className="fnt-system px10" >We strive to be more than just a service provider; we aim to be a trusted Comapany.
                                            </h4> </div>
                                            <div className="my-mother down-2 xs-down-5 justify"><span className="px8 ubuntuLight xs-px13 fnt-system">By staying true to our mission and values, we are committed to helping businesses of all sizes achieve their goals and realize their potential.</span></div>
                                        </div>
                                    </div>


                                    <div className="xs-12 xs-down-5  my-b-shadow my-col-12 bg-s1  h-20 rad-10 down-2">
                                        <div className="my-container xs-10 xs-off-1 xs-down-10 left down-5" >
                                            <div className="gap-20 top-1" > <span className="iconss bg-red px10  xs-px12 white" ><i className="fa fa-arrow-up deg-45"></i></span> </div>
                                            <div > <span className="px9 fnt-system red fnt-system bold xs-px20" >Our Vision</span> </div>
                                            <div className="down-2 xs-down-4" > <h4 className="fnt-system px10" >We aspire to create a world where every business owner feels empowered
                                            </h4> </div>
                                            <div className="my-mother down-2 xs-down-5 justify"><span className="px8 ubuntuLight xs-px13 fnt-system">By staying true to our vision and values, we are committed to driving positive change and shaping a brighter future for businesses and communities.</span></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
        </section>

        <section className='fnt-system bg-grad centered-lign'>
            <Fade bottom>
                <div className="my-mother my-bottom-50 hiddenxs">
                    <div className="my-col-10 off-1 xs-container down-10 xs-down-10">
                        <div className="centered my-mother"><h1 className="px25  black fnt-system  xs-px25">Affordable Plans & Pricings</h1></div>
                        <div className="centered my-mother down-2 xs-down-3"><span className="px12 faded-2 xs-px15  fnt-system">Quality Services Tailored to Your Budget</span></div>
                        <div className="gap-elements down-5 my-col-10 off-1 xs-12 xs-down-5 xs-centered ls-centered-align">
                            <h1 onClick={() => { setPlans('BASIC') }} className={`pd-10 fnt-system bg-faded  fla-border-3 centered-align rad-30 ${plans == 'BASIC' && " bd-code-1 color-code-1"} c-pointer px8 xs-px9`}>BASIC PLAN</h1>
                            <h1 onClick={() => { setPlans('STANDARD') }} className={`pd-10 fnt-system bg-faded  fla-border-3 centered-align rad-30 ${plans == 'STANDARD' && " bd-code-1 color-code-1"} c-pointer px8 xs-px9`}>STANDARD PLAN</h1>
                            <h1 onClick={() => { setPlans('PREMIUM') }} className={`pd-10 fnt-system bg-faded  fla-border-3 centered-align rad-30 ${plans == 'PREMIUM' && " bd-code-1 color-code-1"} c-pointer px8 xs-px9`}>PREMIUM PLAN</h1>
                        </div>

                        {plans == "BASIC" && <div className="my-col-10 off-1 xs-down-10 xs-12 ls-gap-elements down-3">
                            <div className="my-col-6 xs-12 my-bottom-50 ls-rad-10 bg-white my-b-shadow bg-grad bg-pattern my-bottom-50">
                                <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
                                    <div><span className="pd-10 bg-black white rad-30 px8 xs-px10 fnt-system upper-case">Basic Plan</span></div>
                                    <div className="my-mother down-3 xs-down-10"><span className="px12 bold xs-px13  fnt-system ">Suitable for Startups, individuals, or small businesses.</span></div>
                                    <div className="my-col-10 xs-12 xs-down-5 gap-lements">
                                        <div className="my-mother  down-5">
                                            <span className="px10 ubuntuLight xs-px13">Starting from</span>
                                            <div className="px25 xs-px20 xs-down-4 color-cod-1 down- fnt-system">$500 <span className="faded down-1 ubuntuLight px10 xs-px10">Per Project</span>  </div>
                                        </div>
                                        <div className="my-mother down-3 xs-down-3"><span className="px15 xs-px12 faded-sol">Or</span></div>
                                        <div className="my-mother  down-2">
                                            <span className="px10 ubuntuLight xs-px13">Starting from</span>
                                            <div className="px25 xs-px20 xs-down-4 color-cde-1 down- fnt-system">$300 <span className="faded xs-px10 down-1 ubuntuLight px10">Per Month (Ongoing Services)</span>  </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="my-col-7 my-bottom-50 xs-12 ls-rad-10 bg-white bd-coe-1">
                                {/* <span className="circle-deco" ></span> */}
                                <div className="my-container xs-10 xs-off-1 xs-down-8 down-5">
                                    <div><span className="px12  faded-2 fnt-system fnt-system  xs-px20">Deliverables</span></div>
                                    <div className="my-mother down-2 xs-down-5">
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Web Development</span>: Up to 5-page website, basic design.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">SEO</span>: Initial audit, keyword research, and on-page optimization.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Social Media Marketing</span>: 1 platform, 3 posts per week, and 1 ad campaign.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Company Email Setup</span>: company email for 5 users only.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Free Consultation & reviews</span></span>
                                        </div>
                                        <div className="my-mother down-5 xs-down-10">
                                            <a href="#" className="rad-30 px9 white fnt-system bg-color-code-1 my-btn-sm xs-px15" onClick={() => { Navigate('/contacts') }}> Contact Now <span className="icons bg-white mg-10 px8 xs-px13" ><i className="fas color-code-1 deg-45 fa-arrow-up" ></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>}

                        {plans == "STANDARD" && <div className="my-col-10 off-1 xs-down-10 xs-12 ls-gap-elements down-3">
                            <div className="my-col-6 xs-12 my-bottom-50 ls-rad-10 bg-white my-b-shadow bg-grad bg-pattern my-bottom-50">
                                <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
                                    <div><span className="pd-10 bg-black white rad-30 px8 xs-px10 fnt-system upper-case">STANDARD Plan</span></div>
                                    <div className="my-mother down-3 xs-down-10"><span className="px13 xs-px13 bold  fnt-system ">Suitable for Medium-sized businesses.</span></div>
                                    <div className="my-col-10 xs-12 xs-down-5 gap-lements">
                                        <div className="my-mother down-5">
                                            <span className="px10 ubuntuLight xs-px13">Starting from</span>
                                            <div className="px25 xs-px20 xs-down-4 color-cod-1 down- fnt-system">$1,000 <span className="faded down-1 ubuntuLight px10 xs-px10">Per Project</span>  </div>
                                        </div>
                                        <div className="my-mother down-3 xs-down-3"><span className="px15 xs-px12 faded-sol">Or</span></div>
                                        <div className="my-mother down-2">
                                            <span className="px10 ubuntuLight xs-px13">Starting from</span>
                                            <div className="px25 xs-px20 xs-down-4 color-cde-1 down- fnt-system">$800 <span className="faded xs-px10 down-1 ubuntuLight px10">Per Month (Ongoing Services)</span>  </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-col-7 my-bottom-50 xs-12 ls-rad-10 bg-white bd-coe-1">
                                <div className="my-container xs-10 xs-off-1 xs-down-8 down-5">
                                    <div><span className="px12 faded-2 fnt-system fnt-system  xs-px20">Deliverables</span></div>
                                    <div className="my-mother down-2 xs-down-5">
                                        <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Web Development</span>: Up to 10-page website, standard design.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">SEO</span>: Comprehensive SEO, local SEO, and 10 backlinks/month.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Social Media Marketing</span>: 2 platforms, 5 posts per week, and 2 ad campaigns.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Company Email Setup</span>: company email for unlimited users.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2 my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"><i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Free Consultation, unlimited reviews & discounts</span></span>
                                        </div>
                                        <div className="my-mother down-5 xs-down-10">
                                            <a href="#" className="rad-30 px9 white fnt-system bg-color-code-1 my-btn-sm xs-px15" onClick={() => { Navigate('/contacts') }}> Contact Now <span className="icons bg-white mg-10 px8 xs-px13"><i className="fas color-code-1 deg-45 fa-arrow-up"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}


                        {plans == "PREMIUM" && <div className="my-col-10 off-1 xs-down-10 xs-12 ls-gap-elements down-3">
                            <div className="my-col-6 xs-12 my-bottom-50 ls-rad-10 bg-white my-b-shadow bg-grad bg-pattern my-bottom-50">
                                <div className="my-container xs-10 xs-off-1 xs-down-10 down-5">
                                    <div><span className="pd-10 bg-black white rad-30 px8 xs-px10 fnt-system upper-case">Premium Plan</span></div>
                                    <div className="my-mother down-3 xs-down-10"><span className="px13 bold xs-px13  fnt-system ">Suitable for established businesses or enterprises.</span></div>
                                    <div className="my-col-10 xs-12 xs-down-5 gap-lements">
                                        <div className="my-mother  down-5">
                                            <span className="px10 ubuntuLight xs-px13">Starting from</span>
                                            <div className="px25 xs-px20 xs-down-4 color-cod-1 down- fnt-system">$1,500 <span className="faded down-1 ubuntuLight px10 xs-px10">Per Project</span>  </div>
                                        </div>
                                        <div className="my-mother down-3 xs-down-3"><span className="px15 xs-px12 faded-sol">Or</span></div>
                                        <div className="my-mother  down-2">
                                            <span className="px10 ubuntuLight xs-px13">Starting from</span>
                                            <div className="px25 xs-px20 xs-down-4 color-cde-1 down- fnt-system">$1,000 <span className="faded xs-px10 down-1 ubuntuLight px10">Per Month (Ongoing Services)</span>  </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-col-7 my-bottom-50 xs-12 ls-rad-10 bg-white bd-coe-1">
                                <div className="my-container xs-10 xs-off-1 xs-down-8 down-5">
                                    <div><span className="px12  faded-2 fnt-system fnt-system  xs-px20">Deliverables</span></div>
                                    <div className="my-mother down-2 xs-down-5">
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Web Development</span>: Custom web apps, e-commerce integration.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">SEO</span>: Full SEO strategy, technical SEO, and 20 backlinks/month.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Social Media Marketing</span>: 3 platforms, 10 posts per week, and 4 ad campaigns.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Company Email Setup</span>: company email for unlimited users.</span>
                                        </div>
                                        <div className="px12 bd-bottom down-2  my-bottom-20 xs-down-5 gap-elements ls-centered-align faded-sol ubuntuLight">
                                            <span className="icons bd-code-1 g-color-code-1 color-code-1 px8 hidden-xs xs-px10"> <i className="fas fa-check"></i></span>
                                            <span className="black px10 fnt-system xs-px13"><span className="fnt-system fnt-system  black">Free Consultation, unlimited reviews & discounts</span></span>
                                        </div>
                                        <div className="my-mother down-5 xs-down-10">
                                            <a href="#" className="rad-30 px9 white fnt-system bg-color-code-1 my-btn-sm xs-px15" onClick={() => { Navigate('/contacts') }}> Contact Now <span className="icons bg-white mg-10 px8 xs-px13"><i className="fas color-code-1 deg-45 fa-arrow-up"></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}


                        <div className="my-col-10 off-1 down-5 xs-12 xs-down-10 my-bottom-50" >
                            <div className="my-mother down-5">
                                <div><span className="px15  fnt-system  xs-px15" >Add Ons</span></div>
                                <div className="my-mother down-2 xs-down-5">
                                    <div className="px12 xs-px15 tom down-2 xs-12 xs-down-3  my-ottom-20 gap-elements centered-align faded-sol ubuntuLight">
                                        <span className="icons hidden-xs bd-code-1 g-color-code-1 color-code-1 px8"> <i className="fas fa-check"></i></span>
                                        <span className="black px10 xs-px15 fnt-system"><span className="fnt-system poppings-LIght black xs-px15">Maintenance (websites)</span>:  $50–$200/month.</span>
                                    </div>
                                    <div className="px12 xs-px15 tom down-2 xs-12 xs-down-3  my-ottom-20 gap-elements centered-align faded-sol ub untuLight">
                                        <span className="icons hidden-xs bd-code-1 g-color-code-1 color-code-1 px8"> <i className="fas fa-check"></i></span>
                                        <span className="black px10 xs-px15 fnt-system"><span className="fnt-system poppings-LIght black xs-px15">Extra SEO backlinks</span>:  $10–$50/link.</span>
                                    </div>
                                    <div className="px12 xs-px15 tom down-2 xs-12 xs-down-3  my-ottom-20 gap-elements centered-align faded-sol ubuntuLight">
                                        <span className="icons hidden-xs bd-code-1 g-color-code-1 color-code-1 px8"> <i className="fas fa-check"></i></span>
                                        <span className="black px10 xs-px15 fnt-system"><span className="fnt-system poppings-LIght black xs-px15">Additional social media platforms</span>:  $100–$500/month per platform.</span>
                                    </div>
                                    {/* <div  className="my-mother down-5"><span className="px13 " >Payment Terms</span></div> */}
                                    <div className="my-mother down-5 px13 xs-px15 xs-down-4  fnt-system ">50% upfront and 50% upon project completion for one-time projects.</div>
                                    <div className="my-mother down-1 px13 xs-px15 xs-down-2  fnt-system ">Monthly billing for ongoing services.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>

        <section className='fnt-system bg-grad centered-lign'>
            <Fade bottom>
                <div>
                    {filteredPosts && <div className="my-mother down-5 xs-down-10 my-bottom-50" >
                        <div className="my-col-10 off-1 xs-12 down-5 centered">
                            <h1 className="px25 black fnt-system xs-px25" >Insights & Innovations: <br />Our Latest Blog Posts</h1>
                            <div className="my-container xs-container down-3 xs-down-5" > <span className="px12 my-col-6 off-3 xs-12 xs-px15 faded-2 fnt-system" >Stay up-to-date with the latest trends and developments in the IT & digital marketing space.</span> </div>

                            <div className="my-mother down-2 xs-down-10 space-0" >
                                <div className="my-container xs-container v-gap-20 ls-gap-elements down-5" >
                                    {!filteredPosts && <CustomSkeleton />}

                                    {filteredPosts?.slice(0, 4)?.map((i: any, index: number) => (
                                        <div className="my-col-12 xs-12 rad-10" key={index} onClick={() => { Navigate(`/posts/${encodeURIComponent(i?.title).replace(/%20/g, "+")}`) }}>
                                            <div className="bg-overlay left rad-10">
                                                <div className="my-container xs-10 xs-off-1 xs-down-30vh down-40">
                                                    <h1 className="alice px10 xs-px20 fnt-system">{i.title}</h1>
                                                    <div className="my-mother down-1 xs-down-4">
                                                        <span className="px10 faded-2 fnt-system xs-px15">{formatDateToOrdinalString(i.createdAt)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="img-container-4 rad-10 "><img src={i.coverImage?.secure_url} alt="" /></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="my-col-10 off-1 down-5 xs-down-5 xs-container  right"><button className="pd-5 c-pointer ubuntuLight px10 xs-px15 poppings-Light" onClick={() => { Navigate('/blogs') }}>More Posts <i className="fas fa-angle-right mg-5"></i> </button></div>
                            </div>
                        </div>
                    </div>}
                </div>
            </Fade>
        </section>

        <section>
            <Fade bottom>
                <div className="my-mother my-bottom-50 bg-color-code-1 hiden-xs">
                    <span className="circle-deco hidden-xs"></span>
                    <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-20 centered down-5">
                        <div className="my-col-6 off-3 down-5"><h1 className="px25  alice fnt-system xs-px25">Ready To Take Your Business To
                            The Next Level ?</h1></div>
                        <div className="my-mother down-3 xs-down-5"><span className=" alice px12 fnt-system xs-px15" >Partner with us and watch your business grow</span></div>
                        <div className="my-mother down-5 my-bottom-50 xs-down-10"> <a href="#" onClick={() => { Navigate('/contacts') }} className="rad-30 px9 b-shaow  bold bg-white color-code-1 my-btn-sm fnt-system xs-px15" >Contact Us<span className="icons bg-color-code-1 mg-10 px8 xs-px12" ><i className="fas white deg-45 fa-arrow-up" ></i></span> </a></div>
                    </div>
                </div>
            <div className="my-mother down-3 xs-down-10"><WmFooter /></div>
            </Fade>
        </section>
    </>);
}

export default HomePage;