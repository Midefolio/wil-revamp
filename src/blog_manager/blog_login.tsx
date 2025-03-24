import { useGoogleLogin } from '@react-oauth/google';
import { useState } from "react";
import { makeRequest } from "../hook/useApi";
import { loginApi } from "../data/apis";
import { isSending, notifyError } from "../utils/useutils";

const BlogLogin = () => {
   const [email, setEmail] = useState<string>("");

   const loginHandler = async(email:string)=> {
     const cb = () => {isSending(false)};
     isSending(true, "Please Wait...");
      const res = await makeRequest("POST", loginApi, {email}, cb);
      if(res){
         localStorage.setItem('willmaestroit_blog_manager_token', res.data);
         window.location.reload();
      } 
   }

   const signUp: () => void = useGoogleLogin({
    onSuccess: (tokenResponse) => handleSuccess(tokenResponse) ,
    onError: () => notifyError('Login Failed')
  });

  const handleSuccess = async (response: any) => {
    const res = await makeRequest('GET', 'https://www.googleapis.com/oauth2/v3/userinfo', null, null, response?.access_token);
    if(res){
       await loginHandler(res.email);
   }
  };

    return ( <>
     <div className="my-mother h-100vh center-content centered-align">
        <div className="my-col-4 xs-11 rad-10 bg-white my-b-shadow">
            <div className="my-col-10 off-1 xs-10 xs-off-1 xs-down-10 down-5 my-bottom-50">
                <div className="ubuntuBold px13 xs-px20">Blog Manager</div>
                <div className="my-mother down-2 xs-down-10"> <span className="px10 xs-px15 ubuntuRegular">Login</span></div>
                <div className="my-mother centered-align gap-elements down-2 xs-down-5"> 
                    <input type="text" onChange={(e:any) => {setEmail(e.target.value)}} placeholder="Enter Registered email" className="input my-col-10 xs-8 xs-px12 fla-border-1 bg-faded-2 ubuntuLight px8 rad-10" />
                    <button className="input flex unset-indent my-col-2 xs-3 xs-px10 px8 c-pointer rad-10 bg-color-code-1 white ubuntuBold " onClick={()=> {loginHandler(email)}}>Login</button>
                </div>
                <div className="my-mother down-5 xs-down-15">
                    <button className="pd-10 fla-border-1 rad-10 ubuntuRegular bg-color-code- bg-faded-2" onClick={()=> {signUp()}} >Use <i className="fab orange fa-google"></i>oogle</button>
                </div>
            </div>
        </div>
     </div>
    </> );
}
 
export default BlogLogin;