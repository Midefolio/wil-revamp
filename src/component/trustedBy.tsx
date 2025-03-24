import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrustedBy = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={0.2}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rtl={false}
        shouldResetAutoplay={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={0.1}
        swipeable
        transitionDuration={1000}
      >
        {/* Standard */}
        <div className="centere c-pointer" >
          <h1 className="px12 fnt-system xs-px13 faded-" >FutureLivingAfrica</h1>
          <div><h2 className="px8 xs-px12 fnt-system faded-2 light" > https://futurelivingafrica.com</h2></div>
        </div>
        <div className="centere c-pointer" >
          <h1 className="px12 fnt-system xs-px13 faded-" >Adesina Assets</h1>
          <div><h2 className="px8 xs-px12 fnt-system faded-2 light" > https://adesina.ng</h2></div>
        </div>
        <div className="centere c-pointer" >
          <h1 className="px12 fnt-system xs-px13 faded-" >Folda Realty</h1>
          <div><h2 className="px8 xs-px12 fnt-system faded-2 light">https://foldarealties.com</h2></div>
        </div> 
        <div className="centere c-pointer" >
          <h1 className="px12 fnt-system xs-px13 faded-" >L-Mobile Groceres</h1>
          <div><h2 className="px8 xs-px12 fnt-system faded-2 light">https://lmobile.com.ng</h2></div>
        </div>
    
             </Carousel>
    </>
  );
};

export default TrustedBy;
