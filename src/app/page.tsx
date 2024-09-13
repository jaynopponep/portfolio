import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#3a4b59] text-white text-4xl h-[450px] flex items-center justify-center font-arsmaquette w-full">
      <div className="space-y-4 font-basicsans text-center w-full px-6">
        <div className="font-semibold">Hi, I'm Jay</div>
        <div>Python & JavaScript Software Developer</div>
        <div>CS Student @ CCNY</div>
        <div className="flex space-x-4 justify-center">
          <div>
            <a
              href="https://www.linkedin.com/in/jay-noppone-p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/jaynopponep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
