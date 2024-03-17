import React from "react";
import contact from '../assets/contact.jpeg'
import service from '../assets/service.jpeg'



const Contact = () =>{
return(
    <div>
        <h1 className="text-richblack-100 text-3xl text-center">Get Assistance</h1>
        <div className="flex flex-row gap-4 justify-center mt-5">
            <div>
                <img src={contact} className="w-[350px] h-60"/>
                <h1 className="text-richblack-100 text-center text-2xl mt-5 ">Need help with your hardware <br/>or order?</h1>
                <h2 className="text-richblack-100 text-center text-xl mt-5">Find answers about your Peloton hardware,<br/> check your order status and more.</h2>
                <button className="text-white bg-red p-3 px-[95px] bg-red-600 font-medium">CHAT WITH SUPPORT</button>
                {/* <button className="text-black bg-white p-3 px-[95px] font-medium">TALK TO OUR EXECUTIVE</button> */}
            </div>
                <img src={service} className="w-[350px] h-60"/>
                <h1></h1>
                <h2></h2>
                <button></button>
            <div></div>
        </div>
    </div>
);
}

export default Contact