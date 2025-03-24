import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import ManagerMenu from "./manager_menu";
import ReactQuill from "react-quill";
import { clickHandler, isSending, notifyError, notifySuccess } from "../utils/useutils";
import { uploadImageToCloudinary } from "../utils/clouds";
import { addBlog } from "../data/apis";
import { makeRequest } from "../hook/useApi";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const token =  localStorage.getItem('willmaestroit_blog_manager_token');


  const options = [
    { label: "Development", value: "development" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Management", value: "management" },
    { label: "SEO", value: "seo" },
    { label: "Branding", value: "branding" },
  ];

  const [newPost, setNewPost] = useState<any>({
    title: "",
    body: "",
    coverImage: {},
    categories: [],
    keywords: [],
  });

  const [selectedCategories, setSelectedCategories] = useState<{ label: string; value: string }[]>([]);
  const [keywordInput, setKeywordInput] = useState<string>("");
  const [body, setBody] = useState<string>(""); 

  // Sync selectedCategories with newPost.categories
  useEffect(() => {
    setNewPost((prev: any) => ({
      ...prev,
      categories: selectedCategories.map((category) => category.value),
    }));
  }, [selectedCategories]);

  // Sync body with newPost.body
  useEffect(() => {
    setNewPost((prev: any) => ({
      ...prev,
      body,
    }));
  }, [body]);

  const addKeyword = () => {
    if (keywordInput.trim() && !newPost.keywords.includes(keywordInput)) {
      setNewPost((prev: any) => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()],
      }));
      setKeywordInput("");
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setNewPost((prev: any) => ({
      ...prev,
      keywords: prev.keywords.filter((kw: string) => kw !== keywordToRemove),
    }));
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const res = await uploadImageToCloudinary(file);
      if (res) {
        setNewPost((prev: any) => ({ ...prev, coverImage: res }));
        notifySuccess("Image uploaded successfully");
      }
    } catch (error) {
      notifyError("Error uploading image");
    }
  };


  const submitPost = async () => {
    if (!newPost.title) {
      notifyError("Please enter a title for the post");
      return;
    }
    if (!newPost.body) {
      notifyError("Post cannot be empty");
      return;
    }
    // if (!newPost.coverImage.secure_url) {
    //   notifyError("Please add a cover image for the post");
    //   return;
    // }
    // if (!selectedCategories.length) {
    //   notifyError("Please select at least one category");
    //   return;
    // }

    try {
      const cb = () => {isSending(false)};
      isSending(true, "Publishing...");
      const res = await makeRequest("POST", addBlog, newPost, cb, token);
      if(res){
        // localStorage.removeItem("blog_response");
        notifySuccess("Post created successfully");
        // navigate("/blog_manager/home");
      }
    } catch (error) {
      notifyError("Error creating post");
    }
  };



  return (
    <>
      <ManagerMenu active="write" />
      <div className="my-col-10 off-1 xs-container my-bottom-50 down-10">
        <div className="my-container gap-elements">
          {/* Cover Image and Categories */}
          <div className="my-col-3 down-2">
            <div className="my-mother">
              <span className="px9 faded-so">Cover Image</span>
              <div className="cover-image rad-10 down-1 bg-white fla-border-1">
                <img
                  src={newPost?.coverImage?.secure_url || newPost?.coverImage}
                  alt=""
                />
              </div>
              <input
                type="text"
                onChange={(e: any) =>
                  setNewPost((prev: any) => ({
                    ...prev,
                    coverImage: { secure_url: e.target.value },
                  }))
                }
                className="input-2 bg-white my-col-12 down-2 InterLight px8"
                placeholder="Paste image link here instead"
              />
              <div className="my-mother down-1 px8">Or</div>
              <input
                type="file"
                onChange={(e) => handleImageChange(e)}
                id="select-image-input"
                className="my-mother down-2"
              />
            </div>

            <div className="my-mother down-3">
              <span className="px9 faded-so">Select Post Category(s)</span>
              <div className="rad-10 px8 bg-faded-2 fla-border-1 down-1">
                <MultiSelect
                  options={options}
                  value={selectedCategories}
                  onChange={setSelectedCategories}
                  labelledBy="Select Categories"
                />
              </div>
            </div>
            <div className="my-mother down-3">
              <span className="px9 faded-so">Keywords (for easy searches)</span>
              <div className="rad-10 my-mother bg-white fla-border-1 down-1">
                <input
                  type="text"
                  maxLength={20}
                  value={keywordInput}
                  onChange={(e) => setKeywordInput(e.target.value)}
                  onKeyDown={(e) => (e.key === "Enter" ? addKeyword() : null)}
                  placeholder="Add a keyword and press Enter"
                  className="input-2 InterLight px8"
                />
              </div>
              <div className="keyword-list down-2 my-mother flex-container centered-align">
                {newPost?.keywords.map((keyword: any, index: any) => (
                  <span
                    key={index}
                    className="keyword-tag rad-5 bd-code-1 color-code-1 bg-white c-pointer px8 ubuntuLight pd-10"
                    onClick={() => removeKeyword(keyword)}
                  >
                    {keyword} &times;
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Post Title and Body */}
          <div className="my-col-7 off-1">
            <input
              type="text"
              maxLength={100}
              className="input-2 px15 ubuntuBold"
              placeholder="Post title here..."
              value={newPost.title}
              onChange={(e) =>
                setNewPost((prev: any) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />

            {/* Body using React-Quill */}
            <div className="down-1 my-mother">
              <div className="rad-10 bg-white black fla-border-1 down-1">
                <ReactQuill
                  theme="snow"
                  value={body}
                  className="react-quill "
                  onChange={setBody}
                  placeholder="Write your post here..."
                />
              </div>
            </div>
            <div className="my-mother down-5 right">
              <button
                className="bg-color-code-1 white ubuntuBold pd-10 px10 rad-10"
                onClick={submitPost}
              >
                Publish Post <i className="fas fa-paper-plane"></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
