import React from "react";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiNextdotjs, SiPython } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

export default function Projects() {
  return (
    <main
      id="Projects"
      className="flex flex-col items-center justify-center font-basicsans text-[70px]"
    >
      <div>Projects</div>
      <div className="flex justify-center flex-wrap">
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/schedule_snake.gif"
            className="w-[100%] h-[200px]"
            alt="Schedule Snake"
          />
          <div className="p-[16px] flex-grow">
            {" "}
            {}
            <h3 className="text-[28px] mb-[8px]">Schedule Snake</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              A web application built with <strong>Next.JS</strong> and{" "}
              <strong>SQL</strong> to ensure a smooth enrollment process into
              university courses. Professors create courses on Schedule Snake
              swiftly, and students are able to enroll into the corresponding
              courses.
            </p>
          </div>
          {/* End of 'flex-grow' section */}
          <div className="flex items-center justify-between mt-auto">
            {" "}
            {}
            <a
              href="https://github.com/jaynopponep/schedule-snake"
              target="_blank"
              className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
            >
              <IoLogoGithub style={{ fontSize: "36px" }} />
            </a>
            <div className="flex flex-row space-x-[2.5px] mr-2">
              <SiNextdotjs className="w-[42px]" />
              <IoLogoJavascript className="w-[42px]" />
              <DiMysql className="w-[42px]" />
              <RiTailwindCssFill className="w-[42px]" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/dovelop-cli.gif"
            className="w-[100%] h-[200px]"
            alt="Dovelop AI"
          />
          <div className="p-[16px] flex-grow">
            {" "}
            {}
            <h3 className="text-[28px] mb-[8px]">Dovelop AI</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              A CLI to do list application made to improve productivity for
              developers and other users. Be able to track your to do list and
              edit them in real time while you are working on a project! Dovelop
              is powered by <strong>Go</strong>, uses <strong>OpenAI</strong>{" "}
              for task breakdowns, and local JSON data to store to do list data
            </p>
          </div>
          {}
          <div className="flex items-center justify-between mt-auto">
            {" "}
            {}
            <a
              href="https://github.com/jaynopponep/dovelop-CLI"
              target="_blank"
              className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
            >
              <IoLogoGithub style={{ fontSize: "36px" }} />
            </a>
            <div className="flex flex-row  mr-2">
              <FaGolang className="ml-auto" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/byte_website.gif"
            className="w-[100%] h-[200px]"
            alt="BYTE Website"
          />
          <div className="p-[16px] flex-grow">
            {" "}
            {}
            <h3 className="text-[28px] mb-[8px]">BYTE Club Website</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              A website built with Next.JS to showcase CCNY's BYTE Club website,
              its projects, and its eboard.
            </p>
          </div>
          {}
          <div className="flex items-center justify-between mt-auto">
            {" "}
            {}
            <div className="flex items-center justify-between mt-auto mb-[10px]">
              <a
                href="https://github.com/BYTE-Club-CCNY/byte"
                target="_blank"
                className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
              >
                <IoLogoGithub style={{ fontSize: "36px" }} />
              </a>
              <a
                href="https://byteccny.com/"
                target="_blank"
                className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
              >
                <FaExternalLinkAlt style={{ fontSize: "36px" }} />
              </a>
            </div>
            <div className="flex flex-row space-x-[6px] mr-2">
              <SiNextdotjs className="w-[42px]" />
              <RiTailwindCssFill className="w-[42px]" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/fivebhais.gif"
            className="w-[100%] h-[200px]"
            alt="Five Bhais"
          />
          <div className="p-[16px] flex-grow">
            {" "}
            {}
            <h3 className="text-[28px] mb-[8px]">Five Bhais Restaurant</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              A project built with other engineers demonstrating an online
              restaurant system where users are able to order takeout or
              delivery, and make dinner reservations after shopping on the menu.
              Built with <strong>NextJS</strong>, <strong>Flask</strong>, and{" "}
              <strong>MongoDB Atlas</strong>.
            </p>
          </div>
          {}
          <div className="flex items-center justify-between mt-auto">
            {" "}
            {}
            <a
              href="https://github.com/jaynopponep/five-bhais"
              target="_blank"
              className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
            >
              <IoLogoGithub style={{ fontSize: "36px" }} />
            </a>
            <div className="flex flex-row space-x-[2px] mr-2">
              <SiNextdotjs className="w-[40px]" />
              <IoLogoJavascript className="w-[40px]" />
              <SiMongodb className="w-[40px]" />
              <SiPython className="w-[40px]" />
              <RiTailwindCssFill className="w-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
