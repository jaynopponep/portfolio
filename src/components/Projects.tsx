import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
    return (
        <main id="Projects"
              className="h-[700px] flex flex-col items-center justify-center font-basicsans text-[70px]">
            <div>
                Projects
            </div>
            <div className="flex justify-center flex-wrap mt-[20px] ">
                <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow">
                    <img src="/cliweather.gif" className="w-[100%] h-[200px]" alt="CLI Weather"/>
                    <div className="p-[16px]">
                        <h3 className="text-[28px] mb-[8px]">CLI Weather App</h3>
                        <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
                            A CLI weather application built with Golang to check the weather of a specific zip code or
                            region.
                            Can be run from any directory a developer or user would be working on.
                        </p>
                        <a href="https://github.com/jaynopponep/cli-weather" target="_blank"
                           className="inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm">
                            <IoLogoGithub style={{ fontSize: '36px' }} />
                        </a>
                    </div>
                </div>
                <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
                    <img src="/byte_website.gif" className="w-[100%] h-[200px]" alt="BYTE Website"/>
                    <div className="p-[16px] flex-grow">
                        <h3 className="text-[28px] mb-[8px]">BYTE Club Website</h3>
                        <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
                            A website built with NextJS to showcase CCNY's BYTE Club website, its projects, and its
                            eboard.</p>
                        <a href="https://github.com/BYTE-Club-CCNY/byte" target="_blank"
                           className="inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm">
                            <IoLogoGithub style={{fontSize: '36px'}}/>
                        </a>
                        <a href="https://byteccny.com/" target="_blank"
                           className="ml-4 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm">
                            <FaExternalLinkAlt style={{fontSize: '36px'}}/>
                        </a>
                    </div>
                </div>
                <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow">
                    <img src="/fivebhais.gif" className="w-[100%] h-[200px]" alt="Five Bhais"/>
                    <div className="p-[16px]">
                    <h3 className="text-[28px] mb-[8px]">Five Bhais Restaurant</h3>
                        <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
                            A project built with other engineers demonstrating an online restaurant system where users are able to
                        order takeout or delivery, and make dinner reservations after shopping on the menu. Built with NextJS and PyMongo
                        (MongoDB Atlas)</p>
                            <a href="https://github.com/jaynopponep/five-bhais" target="_blank"
                               className="inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm">
                                <IoLogoGithub style={{fontSize: '36px'}}/>
                            </a>
                    </div>
                </div>
            </div>
        </main>
    );
}