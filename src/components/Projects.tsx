import React from "react";
import { IoLogoGithub, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FaExternalLinkAlt, FaDiscord } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiNextdotjs, SiPython } from "react-icons/si";
import { SiAmazondynamodb, SiLangchain, SiOpenai } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiMongodb, SiGodaddy, SiGooglegemini } from "react-icons/si";

export default function Projects() {
  return (
    <main
      id="Projects"
      className="flex flex-col items-center justify-center font-extrabold text-[70px]"
    >
      <div className="text-5xl font-extrabold text-center text-gray-900 mb-12">PROJECTS</div>
      <div className="flex justify-center flex-wrap">
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <a href="https://spoileralert.nyc/">
            <img
                src="/SPOILERALERT.gif"
                className="w-[325px] h-[200px]"
                alt="Spoiler Alert"
            />
          </a>
          <div className="p-[16px] flex-grow">
            {" "}
            {}
            <h3 className="text-[28px] mb-[8px]">Spoiler Alert</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              Spoiler Alert is a full-stack application where given an image or a search query,
              retrieves data from the FDA API of any active recalls that are currently being investigated!
              Simply take a picture of the product, or type in the name of the product, and it will instantly
              retrieve the data.
            </p>
          </div>
          {}
          <div className="flex items-center justify-between mt-auto">
            {" "}
            {}
            <a
                href="https://github.com/BaljinderHothi/SpoilerAlert"
                target="_blank"
                className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
            >
              <IoLogoGithub style={{ fontSize: "36px" }} />
            </a>
            <div className="flex flex-row space-x-[2.5px] mr-2">
              <SiNextdotjs className="w-[32px]" />
              <IoLogoVercel className="w-[32px]" />
              <SiMongodb className="w-[32px]" />
              <SiGodaddy className="w-[32px]" />
              <SiGooglegemini className="w-[32px]" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <a href="https://discord.com/oauth2/authorize?client_id=1299060600860839957&permissions=8&integration_type=0&scope=bot">
            <img
                src="/Silvercord.gif"
                className="w-[325px] h-[200px]"
                alt="Silvercord"
            />
          </a>
          <div className="p-[16px] flex-grow">
            {" "}
            {}
            <h3 className="text-[28px] mb-[8px]">Silvercord</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              Silvercord is a Discord bot, an assistant for supporting you in enrolling into future
              courses, with seasonal LeetCode competitions to give an extra push to submit LeetCode problems
              to pump up your high score to your Discord server's leaderboard!
            </p>
          </div>
          {}
          <div className="flex items-center justify-between mt-auto">
            {" "}
            {}
            <a
                href="https://github.com/BYTE-Club-CCNY/Silvercord"
                target="_blank"
                className="ml-2 inline-block px-[8px] py-[8px] bg-gray-800 text-white no-underline rounded text-sm"
            >
              <IoLogoGithub style={{ fontSize: "36px" }} />
            </a>
            <div className="flex flex-row space-x-[2.5px] mr-2">
              <FaDiscord className="w-[40px]"/>
              <SiLangchain className="w-[42px]"/>
              <SiAmazondynamodb className="w-[32px]"/>
              <FaGolang className="w-[32px]"/>
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          <img
            src="/schedule_snake.gif"
            className="w-[325px] h-[200px]"
            alt="Schedule Snake"
          />
          <div className="p-[16px] flex-grow">
            <h3 className="text-[28px] mb-[8px]">Schedule Snake</h3>
            <p className="text-gray-600 text-[15px] leading-tight font-arsmaquette">
              A web application built with <strong>Next.JS</strong> and{" "}
              <strong>SQL</strong> to ensure a smooth enrollment process into
              university courses. Professors create courses on Schedule Snake
              swiftly, and students are able to enroll into the corresponding
              courses.
            </p>
          </div>
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
              <SiNextdotjs className="w-[32px]" />
              <DiMysql className="w-[32px]" />
              <RiTailwindCssFill className="w-[32px]" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/dovelop-cli.gif"
            className="w-[325px] h-[200px]"
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
              <SiOpenai className="w-[32px]" />
              <FaGolang className="ml-auto w-[52px]" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/byte_website.gif"
            className="w-[325px] h-[200px]"
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
              <SiNextdotjs className="w-[32px]" />
              <RiTailwindCssFill className="w-[32px]" />
            </div>
          </div>
        </div>
        <div className="w-[325px] bg-[#f0f0f0] border-r-[8px] overflow-hidden m-[20px] shadow-customShadow flex flex-col">
          {" "}
          {}
          <img
            src="/fivebhais.gif"
            className="w-[325px] h-[200px]"
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
              <SiNextdotjs className="w-[32px]" />
              <IoLogoJavascript className="w-[32px]" />
              <SiMongodb className="w-[32px]" />
              <SiPython className="w-[32px]" />
              <RiTailwindCssFill className="w-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
