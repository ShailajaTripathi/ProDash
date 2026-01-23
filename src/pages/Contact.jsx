// import React, { use, useState } from 'react'

// const Contact = () => {
// const[name,setName]=useState("");
// const[nameError,setNameError]=useState("");
// const[email,setEmail]=useState("");
// const[eError,setEError]=useState("");
// const[phone,setPhone]=useState("");
// const[pError,setPError]=useState("");
// const[message,setMessage]=useState("");
// const[mError,setMError]=useState("");

//  function handleSumbmit(){
// // alert("Form is Submit")
// // this condition is name error
// if(name===""){
// setNameError("Please Enter Your Name")
// }
// else{
//     setNameError("")
//     setName("")
// }
// // this condition is email error
// if(email===""){
//     setEError("Please Enter Your Email Id")
// }
// else{
//     setEError("")
//     setEmail("")
// }

// // this is condition  phone error 
// if(phone===""){
//     setPError("Please Enter Your Phone No ")
// }
// else{
//     setPError("")
//     setPhone("")
// }

// // this is message error 
// if(message===""){
// setMError("Please Enter Your Message")
// }
// else{
//     setMessage("")
//     setMError("")
// }

// }

//   return (
//  <>
//     <h1> Contact Us </h1>
//     <lable> Name : </lable>
//     <input  type='text' placeholder='Enter Your name ' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
//    { <p style={{ color:"red"}}>   {nameError }</p>}
//     <lable>Email : </lable>
//     <input type='email' placeholder='Enter your Email Id' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
//     {<p style={{color:"tomato"}}> {eError}</p>}
//     <lable>Phone No :</lable>
//     <input type='number' placeholder='Enter your Phone No ' value={phone} onChange={(e)=>{setPhone(e.target.value)}} /><br/>
//     {<p style={{color:"orange"}}>{pError}</p>}
//     <label>Message :</label>
    
//     <textarea type="text" placeholder='Enter your message'value={message} onChange={(e)=>{setMessage(e.target.value)}}/><br></br>
//     {<p style={{color:"red"}}>{mError}</p>}

//      <button onClick={handleSumbmit} >Sumbit</button>
//  </>
//   )
// }

// export default Contact


import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [eError, setEError] = useState("");
    const [phone, setPhone] = useState("");
    const [pError, setPError] = useState("");
    const [message, setMessage] = useState("");
    const [mError, setMError] = useState("");

    function handleSumbmit() {
        if (name === "") {
            setNameError("Please Enter Your Name");
        } else {
            setNameError("");
            // setName("");
        }

        if (email === "") {
            setEError("Please Enter Your Email Id");
        } else {
            setEError("");
            // setEmail("");
        }

        if (phone === "") {
            setPError("Please Enter Your Phone No ");
        } else {
            setPError("");
            // setPhone("");
        }

        if (message === "") {
            setMError("Please Enter Your Message");
        } else {
            // setMessage("");
            setMError("");
        }

        if(name!=="" && email!=="" && phone!=="" && message!=="" ){
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")

        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
            <div className="w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
                
                <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                        <input 
                            type='text' 
                            placeholder='Enter Your name' 
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${nameError ? 'border-red-500 shadow-sm shadow-red-100' : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }} 
                        />
                        {nameError && <p className="text-red-500 text-xs mt-1 font-medium">{nameError}</p>}
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                        <input 
                            type='email' 
                            placeholder='Enter your Email Id' 
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${eError ? 'border-red-500 shadow-sm shadow-red-100' : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
                            value={email} 
                            onChange={(e) => { setEmail(e.target.value) }} 
                        />
                        {eError && <p className="text-red-500 text-xs mt-1 font-medium">{eError}</p>}
                    </div>

                    {/* Phone Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone No</label>
                        <input 
                            type='number' 
                            placeholder='Enter your Phone No' 
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition-all ${pError ? 'border-red-500 shadow-sm shadow-red-100' : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
                            value={phone} 
                            onChange={(e) => { setPhone(e.target.value) }} 
                        />
                        {pError && <p className="text-red-500 text-xs mt-1 font-medium">{pError}</p>}
                    </div>

                    {/* Message Input */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                        <textarea 
                            placeholder='Enter your message'
                            className={`w-full px-4 py-2 rounded-lg border outline-none transition-all h-24 resize-none ${mError ? 'border-red-500 shadow-sm shadow-red-100' : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}`}
                            value={message} 
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                        {mError && <p className="text-red-500 text-xs mt-1 font-medium">{mError}</p>}
                    </div>

                    {/* Submit Button */}
                    <button 
                        onClick={handleSumbmit}
                        className="w-full text-white bg-gradient-to-r from-indigo-600 to-blue-600 font-bold py-3 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all active:scale-95 shadow-lg shadow-indigo-200 mt-4"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;