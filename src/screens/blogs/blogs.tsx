import { useEffect, useState } from "react";
import NavBar from "../../component/nav";
import { searchApi, searchpostsApi } from "../../data/apis";
import { makeRequest } from "../../hook/useApi";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { formatDateToOrdinalString, notifyError } from "../../utils/useutils";
import './style.css'
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import BlogCarosel from "./blog_carosel";
import CustomSkeleton from "../../component/skeleton";
import {useNavigate } from "react-router-dom";
import WmFooter from "../../component/footer";

const Blogs = () => {
  const { setFilteredPosts, filteredPosts, post } = useUserAuthContext();
   const [searchQuery, setSearchQuery] = useState<string>("");
   const [showResult, setShowResult] = useState<boolean>(false);
   const Navigate = useNavigate()

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(searchQuery === "") {notifyError("please enter a keyword"); return}
    setFilteredPosts(null);
    if (searchQuery === "") {
      setFilteredPosts(post);
    } else {
    const res = await makeRequest("POST", searchpostsApi , {searchQuery:searchQuery, filter:{} }, null, null);  
      if(res){
        setFilteredPosts(res?.data?.blogs || []);
        setShowResult(true)
      } 
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredPosts(post);
    setShowResult(false)
  };

  const resetOnDelete =(seach:string)=> {
    if(seach === ""){
      setFilteredPosts(post);
      setShowResult(false)

    }
  }


  useEffect(() => {
    setFilteredPosts(post);
    setShowResult(false)
  }, [])


    return ( <>
      <NavBar active={'blogs'} />
      <div className="my-col-10 off-1 xs-container down-20 xs-down-10vh">
        <div className="my-mother xs-down-10 ls-gap-20">
        <div className="xs-12"><span className="ubuntuBold px20 xs-px20">Top Articles For You</span></div>
          <div className="search-container my-col-4 xs-12 xs-down-5">
            <div className="ls-gap-elements rad-20 bg-white bd-code-2 centered-align cd-code-1 px12 ">
              <form  className="my-mother" onSubmit={(e:any) => (handleSearch(e))}>
              <input
                type="text"
                placeholder="Search Posts"
                value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value); resetOnDelete(e.target.value); }}
                className="input-2 my-col-9 px9 xs-px13 xs-9 ubuntuLight"
              />
              </form>
              {searchQuery && (
                <span className="my-col-1 centered-align c-pointer" onClick={clearSearch}>
                  <AiOutlineClose className="px9 xs-px13 pd-2" />
                </span>
              )}
              <span className="my-col-1 centered-align c-pointer" onClick={(e:any) => (handleSearch(e))}>
                <CiSearch className="pd-5 xs-px20 px13" />
              </span>
            </div>
          </div>
           
        </div>
      </div>
       <div className="hidden-xs">
       {showResult && <div className="my-col-10 off-1 down-5"><span className="ubuntuLight">showing results for <b className="color-code-1">"{searchQuery}"</b> </span></div> }
         {filteredPosts &&  <div className="my-col-10 off-1 down-5"><BlogCarosel/></div>}
         {!filteredPosts &&  <div className="my-col-10 off-1 down-5"><CustomSkeleton/></div>}
       </div>
       <div className="hidden-ls xs-container xs-down-5">
       {showResult && <div className="my-col-10 off-1 down-5"><span className="ubuntuLight">showing results for <b className="color-code-1">"{searchQuery}"</b> </span></div> }
         <div className="v-gap-20 xs-down-3">
         {filteredPosts?.map((i:any, index:number) => (
            <div className="my-col-4 xs-12 rad-10" key={index} onClick={()=> {Navigate(`/posts/${encodeURIComponent(i?.title).replace(/%20/g, "+")}`)}}>
            <div className="bg-overlay left rad-10">
              <div className="my-container xs-10 xs-off-1 xs-down-30vh down-40">
                <span className="alice px10 ubuntuBold xs-px20 poppings-Bold">{i.title}</span>
                <div className="my-mother down-2 xs-down-4">
                  <span className="px10 faded-sol ubuntuLight poppings-Light xs-px15">{formatDateToOrdinalString(i.createdAt)}</span>
                </div>
              </div>
            </div>
            <div className="img-container-4 rad-10 "><img src={i.coverImage?.secure_url} alt="" /></div>
          </div>
        ))}
         </div>
         {!filteredPosts &&  <div className="my-col-10 off-1 down-5"><CustomSkeleton/></div>}
       </div>
        

     <div className="my-mother down-4 xs-down-10"><WmFooter/></div>

    </> );
}
 
export default Blogs;