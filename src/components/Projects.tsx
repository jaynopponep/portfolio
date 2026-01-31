import React from "react";
import { IoLogoGithub, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FaExternalLinkAlt, FaDiscord } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiNextdotjs, SiPython, SiAmazondynamodb, SiOpenai, SiMongodb, SiGodaddy, SiGooglegemini } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import "./Projects.css";

export default function Projects() {
  return (
    <main id="projects" className="projects main">
      <div className="title">PROJECTS</div>
      <div className="grid">
        <div className="card">
          <a
              href="https://spoileralert.nyc/"
              target="_blank"
              rel="noopener noreferrer"
          >
            <img
                src="/SPOILERALERT.gif"
                className="cardImage"
                alt="Spoiler Alert"
            />
          </a>
          <div className="cardContent">
            {" "}
            {}
            <h3 className="cardTitle">Spoiler Alert</h3>
            <p className="cardDescription">
              Spoiler Alert is a full-stack application where given an image or a search query,
              retrieves data from the FDA API of any active recalls that are currently being investigated!
              Simply take a picture of the product, or type in the name of the product, and it will instantly
              retrieve the data.
            </p>
          </div>
          <div className="cardFooter">
            <a
                href="https://github.com/BaljinderHothi/SpoilerAlert"
                target="_blank"
                className="githubLink"
            >
              <IoLogoGithub className="iconLarge" />
            </a>
            <div className="iconsRow">
              <SiNextdotjs className="icon" />
              <IoLogoVercel className="icon" />
              <SiMongodb className="icon" />
              <SiGodaddy className="icon" />
              <SiGooglegemini className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <a href="https://discord.com/oauth2/authorize?client_id=1299060600860839957&permissions=8&integration_type=0&scope=bot">
            <img
                src="/Silvercord.gif"
                className="cardImage"
                alt="Silvercord"
            />
          </a>
          <div className="cardContent">
            <h3 className="cardTitle">Silvercord</h3>
            <p className="cardDescription">
              Silvercord is a Discord bot, an assistant for supporting you in enrolling into future
              courses, with seasonal LeetCode competitions to give an extra push to submit LeetCode problems
              to pump up your high score to your Discord server's leaderboard!
            </p>
          </div>
          <div className="cardFooter">
            <a
                href="https://github.com/BYTE-Club-CCNY/Silvercord"
                target="_blank"
                className="githubLink"
            >
              <IoLogoGithub className="iconLarge" />
            </a>
            <div className="iconsRow">
              <FaDiscord className="iconXl"/>
              {/*<SiLangchain className="w-[42px]"/>*/}
              <SiAmazondynamodb className="icon"/>
              <FaGolang className="icon"/>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/schedule_snake.gif"
            className="cardImage"
            alt="Schedule Snake"
          />
          <div className="cardContent">
            <h3 className="cardTitle">Schedule Snake</h3>
            <p className="cardDescription">
              A web application built with <strong>Next.JS</strong> and{" "}
              <strong>SQL</strong> to ensure a smooth enrollment process into
              university courses. Professors create courses on Schedule Snake
              swiftly, and students are able to enroll into the corresponding
              courses.
            </p>
          </div>
          <div className="cardFooter">
            <a
              href="https://github.com/jaynopponep/schedule-snake"
              target="_blank"
              className="githubLink"
            >
              <IoLogoGithub className="iconLarge" />
            </a>
            <div className="iconsRow">
              <SiNextdotjs className="icon" />
              <DiMysql className="icon" />
              <RiTailwindCssFill className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/dovelop-cli.gif"
            className="cardImage"
            alt="Dovelop AI"
          />
          <div className="cardContent">
            <h3 className="cardTitle">Dovelop AI</h3>
            <p className="cardDescription">
              A CLI to do list application made to improve productivity for
              developers and other users. Be able to track your to do list and
              edit them in real time while you are working on a project! Dovelop
              is powered by <strong>Go</strong>, uses <strong>OpenAI</strong>{" "}
              for task breakdowns, and local JSON data to store to do list data
            </p>
          </div>
          <div className="cardFooter">
            <a
              href="https://github.com/jaynopponep/dovelop-CLI"
              target="_blank"
              className="githubLink"
            >
              <IoLogoGithub className="iconLarge" />
            </a>
            <div className="iconsRow">
              <SiOpenai className="icon" />
              <FaGolang className="icon iconRight iconXXl" />
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/byte_website.gif"
            className="cardImage"
            alt="BYTE Website"
          />
          <div className="cardContent">
            <h3 className="cardTitle">BYTE Club Website</h3>
            <p className="cardDescription">
              A website built with Next.JS to showcase CCNY's BYTE Club website,
              its projects, and its eboard.
            </p>
          </div>
          <div className="cardFooter">
            <div className="doubleLinks">
              <a
                href="https://github.com/BYTE-Club-CCNY/byte"
                target="_blank"
                className="githubLink"
              >
                <IoLogoGithub className="iconLarge" />
              </a>
              <a
                href="https://byteccny.com/"
                target="_blank"
                className="githubLink"
              >
                <FaExternalLinkAlt className="iconLarge" />
              </a>
            </div>
            <div className="iconsRow iconsRowWide">
              <SiNextdotjs className="icon" />
              <RiTailwindCssFill className="icon" />
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/fivebhais.gif"
            className="cardImage"
            alt="Five Bhais"
          />
          <div className="cardContent">
            <h3 className="cardTitle">Five Bhais Restaurant</h3>
            <p className="cardDescription">
              A project built with other engineers demonstrating an online
              restaurant system where users are able to order takeout or
              delivery, and make dinner reservations after shopping on the menu.
              Built with <strong>NextJS</strong>, <strong>Flask</strong>, and{" "}
              <strong>MongoDB Atlas</strong>.
            </p>
          </div>
          <div className="cardFooter">
            <a
              href="https://github.com/jaynopponep/five-bhais"
              target="_blank"
              className="githubLink"
            >
              <IoLogoGithub className="iconLarge" />
            </a>
            <div className="iconsRow iconsRowTight">
              <SiNextdotjs className="icon" />
              <IoLogoJavascript className="icon" />
              <SiMongodb className="icon" />
              <SiPython className="icon" />
              <RiTailwindCssFill className="icon" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
