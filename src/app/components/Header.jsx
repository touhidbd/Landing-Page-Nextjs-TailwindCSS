"use client"
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import icon1 from "../img/align-justify.svg";
import icon2 from "../img/x.svg";

export default function Header() {
    const [nav, setNav] = useState(false);
    const [icon, setIcon] = useState(icon1);

    const handleClick = () => {
        setNav(!nav);
        setIcon(nav ? icon1 : icon2);
    };

    return (
        <header className="px-4 lg:px-0 py-3 absolute w-full z-20">
            <div className="container grid grid-cols-2 lg:grid-cols-3 items-center">
                <div className="hidden lg:block">
                    <Navbar />
                </div>
                <div className="logo lg:mx-auto">
                    <Link href="/"><span className="text-blue font-black text-[26px] dark:text-white">MTS</span></Link>
                </div>
                <div className="header-btn ms-auto flex gap-2 items-center">
                    <Link className="text-white font-medium text-xs bg-[#111B47] border-2 border-[#111B47] rounded-sm w-28 lg:w-40 inline-block text-center p-[5px] hover:text-[#111B47] hover:bg-transparent transition-all" href="#">Buy Now</Link>
                    <button onClick={handleClick} className="lg:hidden border-2 rounded-sm px-1 border-[#111b47]">
                        <Image src={icon} alt="icon" width={20} height={20} />
                    </button>
                </div>
            </div>
            {nav && (
                <div className="bg-gray-200 p-2">
                    <Navbar position="!block" />
                </div>
            )}
        </header>
    )
}