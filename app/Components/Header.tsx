"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-[60px] w-full backdrop-blur-xl bg-black/70 fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center h-full w-full px-4 md:px-8">
                <div className="text-white text-xl font-bold">
                    <Link href='/'>
                        <h1 className="cursor-pointer">DEVELOPER</h1>
                    </Link>
                </div>

                <div className="hidden md:flex gap-6 text-white text-base font-semibold">
                    <Link href='/'><h1 className="cursor-pointer hover:text-[#FFC815] transition duration-200">HOME</h1></Link>
                    <Link href='/about'><h1 className="cursor-pointer hover:text-[#FFC815] transition duration-200">ABOUT</h1></Link>
                    <Link href='/contact'><h1 className="cursor-pointer hover:text-[#FFC815] transition duration-200">CONTACT</h1></Link>
                </div>

                <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-3 bg-black/80 py-3 text-white text-base font-semibold">
                    <Link href='/' onClick={() => setIsOpen(false)}>
                        <h1 className="cursor-pointer hover:text-[#FFC815] transition duration-200">HOME</h1>
                    </Link>
                    <Link href='/about' onClick={() => setIsOpen(false)}>
                        <h1 className="cursor-pointer hover:text-[#FFC815] transition duration-200">ABOUT</h1>
                    </Link>
                    <Link href='/contact' onClick={() => setIsOpen(false)}>
                        <h1 className="cursor-pointer hover:text-[#FFC815] transition duration-200">CONTACT</h1>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
