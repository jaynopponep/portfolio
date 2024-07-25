import React from 'react';
import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="bg-[#1C242B] p-4">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-20 font-arsmaquette font-semibold text-white text-3xl">
                    <li>
                        <Link href="#projects" className="text-white hover:text-gray-300">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#experiences" className="text-white hover:text-gray-300">
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link href="#resume" className="text-white hover:text-gray-300">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-white hover:text-gray-300">
                            My Tools
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}