import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-[#e1edd0] p-3">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-10 md:space-x-20 font-arsmaquette font-semibold text-white text-md md:text-3xl">
                    <li>
                        <Link href="#" className="text-[#080b05] font-heading hover:text-gray-300 mr-[600px]">
                            Jay Noppone P
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#experiences"
                            className="text-[#080b05] font-heading hover:text-gray-300"
                        >
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className="text-[#080b05] font-heading hover:text-gray-300">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}