import { useNavigate } from "react-router-dom";
import ManagerMenu from "./manager_menu";
import TableLayout from "./table_component/table/table_layout";
import useUserAuthContext from "../hook/userUserAuthContext";
import { useEffect, useState } from "react";
import CustomSkeleton from "../component/skeleton";
import { isSending, notifyError } from "../utils/useutils";
import { makeRequest } from "../hook/useApi";
import { deleteBlogApi, searchApi } from "../data/apis";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import EditBlog from "./edit_blog";

const ManagerHome = () => {
  const Navigate = useNavigate()
  const { token, getAllBlogs, allBlogs, setAllBlogs, filteredBlogs, setFilteredBlogs, Params, setParams } = useUserAuthContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [eP, setEp] = useState<any>(null)

  useEffect(() => {
    if (token) {
      getAllBlogs(Params);
    }
  }, [token]);

  const headerConfig = [
    { key: "id", title: "S/N", width: 2 },
    { key: "_id", title: "id", width: 5 },
    // { key: "coverImage", title: "Image", width: 5 },
    { key: "title", title: "Title", width: 15 },
    { key: "body", title: "Content", width: 20 },
    // { key: "categories", title: "Categories", width: 20 },
    // { key: "keywords", title: "Tags", width: 20 },
  ];

  const handlePageLimit = (e: any) => {
    const newParams = {
      ...Params,
      limit: e.target.value
    }
    setParams(newParams)
    localStorage.removeItem('blog_response')
    getAllBlogs(newParams);
  }

  const handleNextPage = () => {
    if (Params.page < Params.totalPages) {
      const updatedParams = {
        ...Params,
        page: Params.page + 1,
      };
      setParams(updatedParams)
      localStorage.removeItem('blog_response')
      getAllBlogs(updatedParams);
    }
  };

  const handlePreviousPage = () => {
    if (Params.page > 1) {
      const updatedParams = {
        ...Params,
        page: Params.page - 1,
      };
      setParams(updatedParams)
      localStorage.removeItem('blog_response')
      getAllBlogs(updatedParams);
    }
  };

  const deletePostHandler = async (_id: string) => {
     if(!_id) {
      notifyError('Invalid Post Id');
      return
     }
     const confrm = window.confirm('Are you sure you want to delete this post?');
     if(!confrm) return;
     isSending(true, 'Deleting...');
     const cb = () => {isSending(false)};
     const res = await makeRequest('DELETE', deleteBlogApi, {_id}, cb, token);
     if(res){
       localStorage.removeItem('blog_response');
       getAllBlogs(Params);
      //  allBlogs.filter((blog: any) => blog._id !== _id);
     }
  }

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(searchQuery === "") {notifyError("please enter a keyword"); return}
    setFilteredBlogs(null);
    if (searchQuery === "") {
      setFilteredBlogs(allBlogs);
    } else {
    const res = await makeRequest("POST", searchApi , {searchQuery:searchQuery, filter:{} }, null, token);  
      if(res){
        setFilteredBlogs(res?.data?.blogs || []);
      } 
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredBlogs(allBlogs);
  };

  const resetOnDelete =(seach:string)=> {
    if(seach === ""){
      setFilteredBlogs(allBlogs);
    }
  }



  return (<>

    {filteredBlogs?.map((i:any) => (
      <>
       {eP === i?._id && <EditBlog getAllBlogs={getAllBlogs} params={Params} i={i} setEp={setEp} />}
      </>
    ))}


    <ManagerMenu active="home" />
    <div className='my-col-10 off-1 down-5'>
      <div className='my-container down-3'>
        <div>
          <span className='faded-sol px20 ubuntuBold'>Welcome Back! 👋</span>
          <div><span className='px9 faded-sol ubuntuLight'>Manage WillmaestroIt Blogs</span></div>
        </div>
        <div className='my-mother gap-elements down-4'>
          <div className='my-col-2 bg-white rad-10 my-b-shadow'>
            <div className='my-container pd-10'>
              <span className='px8 faded-sol'>Total Posts</span>
              <div className='my-mother'><span className='green ralewayR bold'>1.08K</span></div>
            </div>
          </div>
          <div className='my-col-2 bg-white rad-10 my-b-shadow'>
            <div className='my-container pd-10'>
              <span className='px8 faded-sol'>Categories</span>
              <div className='my-mother'><span className='color-code-1 ralewayR bold'>108</span></div>
            </div>
          </div>
          <div className='my-col-2 bg-white rad-10 my-b-shadow'>
            <div className='my-container pd-10'>
              <span className='px8 faded-sol'>Comments</span>
              <div className='my-mother'><span className='color-code-1 ralewayR bold'>108</span></div>
            </div>
          </div>
          <div className='my-col-2 bg-white rad-10 my-b-shadow'>
            <div className='my-container pd-10'>
              <span className='px8 faded-sol'>Likes</span>
              <div className='my-mother'><span className='red ralewayR bold'>10.8K</span></div>
            </div>
          </div>
        </div>

        <div className='my-mother gap-20 space-50 centered-align down-5'>

        <div className="gap-elements rad-10 bg-white centered-align cd-code-1 px12 ">
          <form onSubmit={(e:any) => (handleSearch(e))}>
          <input
            type="text"
            placeholder="Search table"
            value={searchQuery}
            onChange={(e) => {setSearchQuery(e.target.value); resetOnDelete(e.target.value); }}
            className="input my-col-9 px8 InterLight"
          />
          </form>
          {searchQuery && (
            <span className="my-col-1 centered-align c-pointer" onClick={clearSearch}>
              <AiOutlineClose className="px9 pd-2" />
            </span>
          )}
          <span className="my-col-2 centered-align c-pointer" onClick={(e:any) => (handleSearch(e))}>
            <CiSearch className="pd-5 px13" />
          </span>
        </div>

          {/* <div className='gap-elements  centered-align my-col-10 '>
            <span className='ubuntuLight px9'>Filter By: </span>
            <div className='my-col-3 rad-30 centered-align'>
              <select className='input-1 my-col-12 InterLight px8'>
                <option>Latest</option>
                <option>Oldest</option>
                <option>Most Viewed</option>
              </select>
            </div>
          </div> */}

          <button className='my-col-1 bd-code-1 color-code-1 rad-10 c-pointer b-shadow flex input centered-align centered-elements gap-elements' onClick={() => { Navigate('/blog_manager/new-post') }}> <i className='fas fa-plus'></i>  Add Post </button>
         </div>
         <div className="my-mother down-4">
          {!filteredBlogs && <CustomSkeleton />}
          {filteredBlogs && <>
            <TableLayout
              tableData={filteredBlogs}
              headerConfig={headerConfig}
              isAction={true}
              params={Params}
              handlePageLimit={handlePageLimit}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              deleteHandler={deletePostHandler}
              editRow={setEp}
            />

          </>}
        </div>
      </div>
    </div>
  </>);
}

export default ManagerHome;