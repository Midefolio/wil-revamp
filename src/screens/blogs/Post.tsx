import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { makeRequest } from "../../hook/useApi";
import { useEffect, useState } from "react";
import { postApi } from "../../data/apis";
import CustomSkeleton from "../../component/skeleton";
import parse from 'html-react-parser';
import NavBar from "../../component/nav";
import { formatDateToOrdinalString } from "../../utils/useutils";
import WmFooter from "../../component/footer";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ArrowLeft, HomeIcon } from "lucide-react";

const Posts = () => {
    const { title }:any = useParams();
    const decodedTitle = decodeURIComponent(title.replace(/\+/g, " "));
    const [Post, setPost] = useState<any>(null)
    const [relatedPost, setRelatedPost] = useState<any[]>([]);
    const Navigate = useNavigate();

    
    const getPostByTitle = async ()=> {
        setPost(null)
        const res = await makeRequest("POST", postApi, {title:decodedTitle}, null, null);
        if(res){
            setPost(res.data.post)
            setRelatedPost(relatedPost)
        }
    }

    useEffect(() => {
        if(title){
            getPostByTitle();
        }
    }, [title])


    return ( <>
    <NavBar active='blogs' />
        <Helmet>
            {decodedTitle &&  <title>{decodedTitle}</title>}
            {decodedTitle &&   <meta name="description" content={decodedTitle} />}
            {Post &&  <link rel="icon" type="image/*" href={Post?.coverImage?.secure_url} />}
        </Helmet>
        
         {/* {Post && <div className="my-col-8 off-2 xs-container xs-down-8vh down-20">
            <span className="pd-5 c-pointer hidden-xs" onClick={()=> {Navigate('/blogs')}}><i className="fas xs-px20 fa-arrow-left"></i></span>
         </div>} */}
         {!Post && <div className="my-col-10 off-1 xs-down-10vh xs-container down-25"><CustomSkeleton/></div>}
         
         {Post && <div className="my-col-8 xs-12 xs-down-9vh bg-white bd-code- rad-10 my-bottom-50 off-2 down-10">
         <div className="my-container xs-container down-3" >
            <div className="my-mother down-2 xs-down-5">
                <div className="img-container-4 hidden-xs unset-absolute rad-unset"><img className="rad-unset" src={Post?.coverImage?.secure_url} alt="" /></div>
                <div className="img-container-blog hidden-ls unset-absolute rad-unset"><img className="rad-unset" src={Post?.coverImage?.secure_url} alt="" /></div>
                <div className="down-5 xs-down-5 xs-px15 bolder fnt-system px15">{Post?.title}</div>
                <div className="my-mother down-1 xs-down-3"><span className="fnt-system xs-px13 faded-2">Posted {formatDateToOrdinalString(Post?.createdAt)}</span></div>
                <div className="my-mother bd-bottom my-bottom-10 down-3 xs-down-5 ls-gap-20">
                    <div className="ls-gap-elements ls-centered-align hidden-xs">
                    <span className="ubuntuBold black xs-12 px9 xs-px13">Post Type:</span>
                    <div className="gap-elements xs-12 px8 xs-px13 flex-wrap  lin-1 hidden-xs">
                     {Post?.categories?.map((i:any, index:number) => (
                        <span className="color-code-1">{i}.</span>
                     ))} 
                    </div>
                    </div>
                    <div className="xs-px10 faded-2">
                        <span className="pd-10 xs-px10" title="share Post"><ReplyOutlinedIcon/></span>
                        <span className="pd-10 xs-px10" title="like Post"><FavoriteBorderOutlinedIcon/></span>
                    </div>
                </div>
            </div>
            <div className="my-mother down-1 xs-down-5">
              <span className="lin-2 px10 fnt-system xs-px13 faded-2" >{parse(`${Post?.body}`)}</span>
            </div>
         </div>
         <div className="xs-container my-container down-5 xs-down-10 ">
         <div className="my-mother gap-elements">
          <button 
            onClick={() => window.history.back()} 
            className="button xs-px10 fnt-system  button-secondary"
          >
            <ArrowLeft />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'} 
            className="button xs-px10 fnt-system button-primary"
          >
            <HomeIcon />
            Return Home
          </button>
        </div>
         </div>
         </div>}
         <div className="my-bottom-50 my-mother"></div>
         <div><WmFooter/></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </>  );
}
 
export default Posts;