import React from "react";
import { FaPython, FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { PiFileCpp } from "react-icons/pi";
import { BiLogoFlask } from "react-icons/bi";


export default function Resume(){
    return (
        <main id="mytools" className="h-[600px] flex flex-col items-center justify-center font-basicsans text-[70px] -mt-[80px]">
            <div>
                My Technologies & Tools
                <div className="text-[40px] flex flex-col items-center">
                    <div className="mt-2 flex flex-row space-x-4">
                        <FaReact className="text-[60px]"/>
                        <SiNextdotjs className="text-[60px]"/>
                        <IoLogoJavascript className="text-[60px]"/>
                        <FaPython className="text-[60px]"/>
                        <BiLogoFlask className="text-[60px]"/>
                        <FaGolang className="text-[60px]"/>
                        <SiMysql className="text-[60px]"/>
                        <FaJava className="text-[60px]"/>
                        <PiFileCpp className="text-[60px]"/>
                    </div>
                </div>
            </div>
        </main>
    );
}