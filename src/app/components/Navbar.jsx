"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ position }) {
    const currentPath = usePathname();
    return (
        <nav>
            <ul className={`flex flex-wrap gap-4 lg:gap-[60px] ${position || ''}`}>
                <li>
                    <Link className={currentPath === "/" ? "text-orange-400" : "text-[#505F98] hover:text-orange-400"} href="/">Home</Link>
                </li>
                <li>
                    <Link className={currentPath === "/about" ? "text-orange-400" : "text-[#505F98] hover:text-orange-400"} href="/about">About</Link>
                </li>
                <li>
                    <Link className={currentPath === "/contact" ? "text-orange-400" : "text-[#505F98] hover:text-orange-400"} href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}