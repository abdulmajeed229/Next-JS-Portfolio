"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import 'aos/dist/aos.css';

function Content() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mainclass min-h-[91vh] w-full flex">
            
            <div className="imgdiv h-full w-[35%] bg-[#2FB3CD] flex items-center justify-center">
                
                <img data-aos="fade-right" src="./images/hero.png" className="h-[558px]" alt="User Profile" />
            </div>


            <div className="textcentermy min-h-[90vh] w-[65%] bg-[#FFFFFF] flex justify-center items-center p-5">
                <div data-aos="fade-left">

                    <strong className="text-[20px]">HELLO, THERE</strong>

                    <h1 className="text-[30px] sm:text-[55px] font-bold font-sans tracking-widest">I'M ABDUL MAJEED</h1>
                    <strong className="text-[20px] text-[#9297A8] block">WEB DEVELOPER</strong>
                    
                    <p className="text-[#9297A8] text-[18px] mt-4">
                        I'm a web developer with a passion for creating beautiful and functional websites. I'm always looking for new challenges and opportunities to grow as a developer.
                    </p>

                 
                    <div className="flex gap-4 mt-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] text-[24px] hover:text-[#2e4a8a]">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] text-[24px] hover:text-[#1a91da]">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-[#DB4437] text-[24px] hover:text-[#c3372d]">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] text-[24px] hover:text-[#006196]">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                    <button data-aos="fade-up" className="rounded-sm h-[45px] w-[150px] text-white font-bold bg-[#FFC815] mt-4">
                        DOWNLOAD CV
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Content;
