import React from "react";

export default function Projects() {
    return (
        <main id="Projects"
              className="h-[700px] flex flex-col items-center justify-center font-basicsans text-[60px]">
            <div>
                Projects
            </div>
            <div className="flex justify-center flex-wrap mt-[20px]">
                <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow">
                    <img src="/cliweather.gif" className="w-[100%] h-auto" alt="CLI Weather"/>
                    <div className="p-[16px] card-content">
                        <h3 className="text-[28px] mb-[8px]">CLI Weather App</h3>
                        <p className="text-gray-600 text-[15px] leading-tight">
                            A CLI weather application built with Golang to check the weather of a specific zip code or region.
                            Can be run from any directory a developer or user would be working on.
                        </p>
                        <a href="https://github.com/jaynopponep/cli-weather" target="_blank"
                           className="inline-block px-[8px] py-[16px] bg-gray-800 text-white no-underline rounded text-sm">
                            Read More
                        </a>
                    </div>
                </div>
                <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow">
                    <img src="/cliweather.png" className="w-[100%] h-auto" alt="CLI Weather"/>
                    <div className="p-[16px] card-content">
                        <h3 className="text-[28px] mb-[8px]">Card 2</h3>
                        <p className="text-gray-600 text-[15px] leading-tight">Details</p>
                        <a href="https://github.com/jaynopponep/cli-weather" target="_blank"
                           className="inline-block px-[8px] py-[16px] bg-gray-800 text-white no-underline rounded text-sm">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}