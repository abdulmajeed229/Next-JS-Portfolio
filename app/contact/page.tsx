"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import { useEffect } from "react";




function Contact() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="flex min-h-[100vh] w-full">
         
            <div data-aos="fade-right" className="left-img h-full w-[30%] fixed top-0 left-0 mt-[60px] hidden lg:block">
                <img
                    className="h-full w-full" src="https://alexio-react.vercel.app/static/img/title-4.jpg" />
            </div>

          
            <div className="right-cont lg:ml-[30%] min-h-[100vh] lg:w-[70%] w-full flex flex-col justify-center p-5 overflow-y-scroll mt-16 scrollbar-hide">
<div>

<strong className="text-[12px] bg-[yellow] p-1 border border-gray-300 rounded-bl-xl rounded-tr-lg  tracking-widest">GET IN TOUCH</strong>
<br />
              <h1 className="text-[30px] font-bold  tracking-widest">CONTACT ME</h1>
<br />
              <div data-aos="fade-left" className="min-h-[400px] w-[95%] p-5 shadow-lg border border-gray-300 z-10">
                <strong className="text-[12px] ">SAY SOMETHING</strong>

                <br />
                <br />
                <input type="text" placeholder="Name*" className="border border-gray-300 pl-4 w-full h-[45px] outline-none" />
<br /><br />

<input type="text" placeholder="Email*" className="border border-gray-300 pl-4 w-full h-[45px] outline-none" />

<br /><br />

<textarea className="border border-gray-300 h-[150px] w-full resize-none outline-none pl-4 pt-4" placeholder="Your Comment*">

</textarea>

<br /><br />

<button className=" h-[40px] w-[150px] font-semibold rounded-lg text-[white] bg-[#FFC815]">SEND MESSAGE</button>
              </div>

              <div className="h-[300px] w-full flex justify-between items-center flex-wrap " >

                <div className=" my-card h-[150px] w-[250px] border border-gray-300 shadow-lg p-5">

                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black h-[25px] mb-2" />
               <br />
                    <strong>Our Address</strong>

                    <p className="text-[#B7BAC5]">street number 123 Karachi ,Pakistan.</p>

                </div>

                <div  className=" my-card h-[150px] w-[250px] border border-gray-300 shadow-lg p-5">
                <FontAwesomeIcon icon={faPhone}  className="text-black h-[25px] mb-2" />
               <br />
                    <strong>Our Phone</strong>

                    <p className="text-[#B7BAC5] ">Office: +923112484573</p>
                    <p className="text-[#B7BAC5]">Office: +923112484573</p>
                    
                </div>

                <div  className="my-card h-[150px] w-[250px] border border-gray-300 shadow-lg p-5">
                <FontAwesomeIcon icon={faEnvelope}  className="text-black h-[25px] mb-2" />
                <br />
                    <strong >Our Email</strong>

                <p className="text-[#B7BAC5]">myemail@gmail.com
                contact@domain.com</p>
                    
                </div>

              </div>
                
</div>
            </div>
        </div>
    );
}

export default Contact;
