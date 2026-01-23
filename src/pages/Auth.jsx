
// import React from 'react'

// const Auth = () => {
//   return (
//   <>
//     <h1>Sign Up </h1>
//     <label>Name : </label>
//     <input type='text' placeholder='Enter Your name '/><br></br>
//     <label>Email : </label>
//     <input type='email' placeholder='Enter your email' /><br/>
//     <button>Sign Up</button>
    
//   </>
//   )
// }

// export default Auth






import React, { useState,useContext } from 'react'
import { AuthContext } from '../contaxt/AuthContext';
import { Link,useNavigate } from 'react-router-dom';
const Auth = () => {

  const[fullName,setFullName]=useState("");
const[error,setError]=useState("");
const [email,setEmail]=useState("");
const[eError,setEError]=useState("");
const[passWord,setPassWord]=useState("");
const[pError,setPError]=useState("");
const [isSignUp,setIsSignUp]=useState(false);

//3. consume the data by  usecontext hook
const {login } = useContext(AuthContext);
const navigate = useNavigate(); // Initialize navigate
function handleSubmit(){
if(fullName===""){
  setError("Enter Your Full Name ")
}
else{
  setError("")
}
if(email===""){
  setEError("Enter Your Email Id")
}

else{
  setEError("")
}
if(passWord===""){
  setPError("Enter Your PassWord")
}
else{
  setPError("")
}

 
 
 
 if(email!=="" && fullName!=="" && passWord!=="" ){
// creating new object to store all fields
   const userData={
  name:fullName,
  email:email,
  passWord:passWord
 }
// login fn call : consuming by usecontext
   login(userData);
   navigate("/");
   setEmail("")
   setFullName("")
   setPassWord("")
} 

if(!isSignUp && email!==""){
  navigate("/")
}
}


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Auth Card */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
        
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {isSignUp?"Create an Account":"Sign In"}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Join ProDash and start managing your products.
          </p>
        </div>

        {/* Form Logic Structure */}
        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Name Field */}
           { isSignUp && <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 ml-1">
                Full Name
              </label>
              <input 
                type='text' 
                placeholder='Enter Your name' value={fullName} onChange={(e)=>{ setFullName(e.target.value)}}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300"
              />
              <br/>
               {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
            </div>
           }
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input 
                type='email' 
                placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300"
              />

                {eError && <p className="text-red-500 text-xs mt-1 font-medium">{eError}</p>}
            </div>

            {/* Password Field (Added for Market Standard) */}
           {  isSignUp&& <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input 
                type='password' 
                placeholder='••••••••'  value={passWord} onChange={(e)=>{setPassWord(e.target.value)}}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-300"
              />
                {pError && <p className="text-red-500 text-xs mt-1 font-medium">{pError}</p>}
            </div>
           }
          </div>

          {/* Action Button */}
   

          <button onClick={handleSubmit} className="w-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 font-bold py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-200 transition-all duration-300 active:scale-[0.98] mt-2">
            {/* sign up ha  to sign up dekhe sign in ha to sign in dekhe  */}
        
            {isSignUp?"Sign Up":"Sign In "}
          </button>
       
      

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-500 mt-6">
            Already have an account?{' '}
            <button onClick={()=>{setIsSignUp(!isSignUp)}} className="text-indigo-600 font-bold hover:underline">
             
             {isSignUp?"Sign In":"Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth