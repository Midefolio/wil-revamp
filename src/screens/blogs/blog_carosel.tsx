import useUserAuthContext from "../../hook/userUserAuthContext";
import { useNavigate } from "react-router-dom";
import { formatDateToOrdinalString } from "../../utils/useutils";
import Carousel from "react-multi-carousel";


const BlogCarosel =() => {
 const {filteredPosts, posts } = useUserAuthContext();
 const Navigate = useNavigate();

  return (
    <>
  <Carousel
 additionalTransfrom={0}
 arrows
 autoPlay
 autoPlaySpeed={2000}
 centerMode={false}
 className=""
 containerClass="container-with-dots"
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
       min: 1024
     },
     items: 4,
     partialVisibilityGutter: 40
   },
   mobile: {
     breakpoint: {
       max: 464,
       min: 0
     },
     items: 1,
     partialVisibilityGutter: 30
   },
   tablet: {
     breakpoint: {
       max: 1024,
       min: 464
     },
     items: 2,
     partialVisibilityGutter: 30
   }
 }}
 rewind={false}
 rewindWithAnimation={false}
 rtl={false}
 shouldResetAutoplay
 showDots={false}
 sliderClass=""
 slidesToSlide={2}
 swipeable
>
{filteredPosts?.map((i:any, index:number) => (
<div className="my-mother card" key={index} onClick={()=> {Navigate(`/posts/${encodeURIComponent(i?.title).replace(/%20/g, "+")}`)}}>
<div className="bg-overlay left">
  <div className="my-container down-40">
    <span className="alice px10 ubuntuBold">{i?.title}</span>
    <div className="my-mother down-2">
      <span className="px10 faded-sol ubuntuLight">{formatDateToOrdinalString(i?.createdAt)}</span>
    </div>
  </div>
</div>
<div className="img-container-4 "><img src={i?.coverImage?.secure_url} alt="" /></div>
  </div>))}
</Carousel>
    
    </>
  );
}

export default BlogCarosel;


