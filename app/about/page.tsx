"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; import { faCode, faRobot } from "@fortawesome/free-solid-svg-icons"; import AOS from 'aos'; import { useEffect } from "react";

function About() { 
    
    useEffect(() => { 
        
        AOS.init(); 
    
    }, []);

    return (
    
    <div className="aboutflex flex min-h-screen w-full flex-col lg:flex-row">
            <div 
                data-aos="fade-right" 
                className="left-img h-full w-full lg:w-[30%] lg:fixed top-0 left-0 mt-0 lg:mt-[60px] hidden lg:block"
            ><img className="h-full w-full object-cover" src="https://alexio-react.vercel.app/static/img/title-1.jpg" alt="Background" /></div>

            <div className="right-cont lg:ml-[30%] min-h-screen w-full flex flex-col justify-center p-5 lg:overflow-y-scroll mt-16 lg:mt-0 scrollbar-hide">
                <div>
                    
                    <strong className="text-[12px] bg-yellow-400 p-1 border border-gray-300 rounded-bl-xl rounded-tr-lg tracking-widest">WHO I AM</strong>
                   
                   
                    <h1 className="text-[30px] font-bold tracking-widest mt-2">ABOUT ME</h1>
                </div>

                <div data-aos="fade-left" className="w-full min-h-[75vh] flex flex-col lg:flex-row">


                    <div className="w-full lg:w-[30%] bg-black flex justify-center items-center">
                        <img className="w-full h-[300px] lg:h-[450px] object-cover" src="https://alexio-react.vercel.app/static/img/my-pic.jpg" alt="Profile"/>
                    </div>


                    <div className="w-full lg:w-[70%] p-5">
                        <h2 className="text-[20px] font-semibold">I'm Abdul Majeed</h2>
                        <p className="mt-2 text-[#9297A8] text-[14px]">I'm a dedicated web developer with expertise in HTML, CSS, and JavaScript, with a strong focus on building dynamic, high-performance applications using Next.js. I’m passionate about crafting clean, responsive designs and seamless user experiences.</p>

                        <div className="twocardfle flex flex-col lg:flex-row mt-5 gap-4">


                            <div className="h-auto lg:h-[210px] w-full lg:w-[270px] border border-gray-300 shadow-2xl p-3"><div className="flex items-center">
                                    <FontAwesomeIcon icon={faCode} className="text-xl mr-2 text-blue-500" /> 
                                    <strong>WEB DEVELOPMENT</strong></div>


                                <p className="text-[#9297A8] text-[14px] mt-2">Web developer skilled in HTML, CSS, and JavaScript, specializing in Next.js for high-performance, responsive web applications. Passionate about clean design and smooth user experiences.</p>
                            </div>

                            <div className="h-auto lg:h-[210px] w-full lg:w-[270px] border border-gray-300 shadow-2xl p-3"><div className="flex items-center"><FontAwesomeIcon icon={faRobot} className="text-xl mr-2 text-green-500" />
                                    <strong>PROMPT ENGINEERING</strong></div>


                                <p className="text-[#9297A8] text-[14px] mt-2">Prompt engineer and web developer with expertise in HTML, CSS, JavaScript, and Next.js. Skilled in crafting effective prompts and building responsive, high-quality web applications for seamless user experiences.</p>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>);
}
export default About;
