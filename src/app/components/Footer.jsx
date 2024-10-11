import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import twitter from "../img/twitter.svg";
import youtube from "../img/youtube.svg";
import instagram from "../img/instagram.png";

export default function Footer() {
    return (
        <footer className="bg-[#E7ECFF] pt-16 pb-8">
            <div className="container">
                <div className="grid md:grid-cols-3 items-center border-b border-solid border-[#CDD1D4] pb-10 mb-5">
                    <div className="md:order-1 text-center">
                        <Link href="/"><span className="text-blue font-black text-[26px]">MTS</span></Link>
                    </div>
                    <div className="md:order-3 text-center mt-5 md:mt-0 md:text-right">
                        <Link className="text-white font-medium bg-[#111B47] border-2 border-[#111B47] rounded-sm w-30 inline-block text-center px-[5px] py-[2px] hover:text-[#111B47] hover:bg-transparent transition-all" href="#">Purchase Now</Link>
                    </div>
                    <p className="text-[#939EA4] text-[14px] md:order-0 text-center md:text-left mt-5 md:mt-0">© 2024 Yourcompany</p>
                </div>
                <div className="grid items-center md:grid-cols-2">
                    <Navbar position="justify-center" />
                    <div className="flex gap-7 mt-5 md:mt-0 justify-center md:justify-end">
                        <Link className="hover:opacity-40 transition-all" href="#"><Image src={facebook} alt="facebook" /></Link>
                        <Link className="hover:opacity-40 transition-all" href="#"><Image src={linkedin} alt="linkedin" /></Link>
                        <Link className="hover:opacity-40 transition-all" href="#"><Image src={twitter} alt="twitter" /></Link>
                        <Link className="hover:opacity-40 transition-all" href="#"><Image src={youtube} alt="youtube" /></Link>
                        <Link className="hover:opacity-40 transition-all" href="#"><Image src={instagram} alt="instagram" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}