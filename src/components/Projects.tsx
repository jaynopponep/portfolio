import React from "react";
import { IoLogoGithub, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { FaExternalLinkAlt, FaDiscord } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiNextdotjs, SiPython, SiAmazondynamodb, SiOpenai, SiMongodb, SiGodaddy, SiGooglegemini } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import "./Projects.css";

type IconComponent = React.ComponentType<{ className?: string }>;

interface TechIcon {
  Icon: IconComponent;
  className?: string;
}

interface Project {
  title: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imageLink?: string;
  githubUrl?: string;
  externalUrl?: string;
  techIcons: TechIcon[];
  iconsRowClassName?: string;
}

const projects: Project[] = [
  {
    title: "Spoiler Alert",
    description: (
      <>
        Stay informed about active food recalls (from the FDA API) in active investigations.
        Take a picture/add product name to see if it is affected!
        The team and I built this at <strong>NYU Hacks 2025</strong> to demonstrate how gen AI can help shoppers stay informed.
      </>
    ),
    image: "/SPOILERALERT.gif",
    imageAlt: "Spoiler Alert",
    imageLink: "https://spoileralert.nyc/",
    githubUrl: "https://github.com/BaljinderHothi/SpoilerAlert",
    techIcons: [
      { Icon: SiNextdotjs },
      { Icon: SiMongodb },
      { Icon: SiGooglegemini },
    ],
  },
  {
    title: "BYTE Hacks 2025",
    description: (
      <>
        A 24-hour hackathon organized by BYTE Club + ACM CCNY, in collaboration with Google Labs, Vercel, and Red Bull, where I worked as the lead organizer and developer.
      </>
    ),
    image: "/BYTEHacks.gif",
    imageAlt: "BYTE Hacks 2025",
    imageLink: "https://www.bytehacks.org/",
    githubUrl: "https://github.com/BYTE-Club-CCNY/byte-hacks-f25",
    techIcons: [
      { Icon: SiNextdotjs },
    ],
  },
  {
    title: "Silvercord",
    description: (
      <>
        Compete on a server-wide LeetCode leaderboard on Discord to push to the top.
        Additionally, plan out your next college semester just by evaluating with Silvercord about a professor or course.
      </>
    ),
    image: "/Silvercord.gif",
    imageAlt: "Silvercord",
    imageLink: "https://discord.com/oauth2/authorize?client_id=1299060600860839957&permissions=8&integration_type=0&scope=bot",
    githubUrl: "https://github.com/BYTE-Club-CCNY/Silvercord",
    techIcons: [
      { Icon: FaDiscord, className: "iconXl" },
      { Icon: FaGolang },
    ],
  },
  {
    title: "Schedule Snake",
    description: (
      <>
        Our faster and more seamless version of admitting into college courses at university. 
      </>
    ),
    image: "/schedule_snake.gif",
    imageAlt: "Schedule Snake",
    githubUrl: "https://github.com/jaynopponep/schedule-snake",
    techIcons: [
      { Icon: SiNextdotjs },
      { Icon: DiMysql },
    ],
  },
  {
    title: "Dovelop",
    description: (
      <>
        A command line to do list to check things off, note things down, while developing.
        I'm using the CLI anyways, so why not just smash a command to keep track?
      </>
    ),
    image: "/dovelop-cli.gif",
    imageAlt: "Dovelop AI",
    githubUrl: "https://github.com/jaynopponep/dovelop-CLI",
    techIcons: [
      { Icon: SiOpenai },
      { Icon: FaGolang, className: "iconRight iconXXl" },
    ],
  },
];

export default function Projects() {
  return (
    <main id="projects" className="projects main">
      <div className="title">PROJECTS</div>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            {project.imageLink ? (
              <a
                href={project.imageLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  className="cardImage"
                  alt={project.imageAlt}
                />
              </a>
            ) : (
              <img
                src={project.image}
                className="cardImage"
                alt={project.imageAlt}
              />
            )}
            <div className="cardContent">
              <h3 className="cardTitle">{project.title}</h3>
              <p className="cardDescription">{project.description}</p>
            </div>
            <div className="cardFooter">
              {project.githubUrl && project.externalUrl ? (
                <div className="doubleLinks">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubLink"
                  >
                    <IoLogoGithub className="iconLarge" />
                  </a>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubLink"
                  >
                    <FaExternalLinkAlt className="iconLarge" />
                  </a>
                </div>
              ) : project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubLink"
                >
                  <IoLogoGithub className="iconLarge" />
                </a>
              ) : null}
              <div className={`iconsRow ${project.iconsRowClassName ?? ""}`.trim()}>
                {project.techIcons.map(({ Icon, className }, i) => (
                  <Icon key={i} className={className ?? "icon"} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
