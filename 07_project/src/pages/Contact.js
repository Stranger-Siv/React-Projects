import React from "react";
import contact from '../assets/contact.jpeg'
import service from '../assets/service.jpeg'



const Contact = () =>{
return(
    <div className="mt-[40px] w-100">
        <div className="flex flex-row gap-4 justify-center mt-5 grow-0">
            <div>
                <img src={contact} className="w-[350px] h-60 rounded-lg"/>
                <h1 className="text-richblack-100 text-center text-2xl mt-5">Need help with our service <br/>or order?</h1>
                <h2 className="text-richblack-100 text-center text-xl mt-5 mb-3">Find answers about our services,<br/> check your order status and more.</h2>
                <button className="text-white bg-red p-3 px-[95px] bg-red-600 font-medium rounded-lg mt-4">CHAT WITH SUPPORT</button>
                <div><br/></div>
                <button className="text-black bg-white p-3 px-[81px] font-medium rounded-lg">TALK TO OUR EXECUTIVE</button>
            </div>
            <div>
                <img src={service} className="w-[350px] h-60 rounded-lg"/>
                <h1 className="text-richblack-100 text-center text-2xl mt-5">Need help with our service <br/>or order?</h1>
                <h2 className="text-richblack-100 text-center text-xl mt-5 mb-3">Find answers about our services,<br/> check your order status and more.</h2>
                <button className="text-white bg-red p-3 px-[95px] bg-red-600 font-medium rounded-lg mt-4">CHAT WITH SUPPORT</button>
                <div><br/></div>
                <button className="text-black bg-white p-3 px-[81px] font-medium rounded-lg">TALK TO OUR EXECUTIVE</button>

            </div>
        </div>
    </div>
);
}

export default Contact