import React from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar nav">
            <div className="container">
                <ul className="list">
                    <li>
                        <Link href="#experiences" className="link">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className="link">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}