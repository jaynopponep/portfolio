import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent sm:text-6xl"
            >
              Hi, I'm Jay!

              <span className="sm:block">I'm a Full-Stack Go & Python Developer </span>
            </h1>

            <p className="mx-auto mt-4 max-w-0.5xl sm:text-4xl/relaxed">
              Software Engineer at Easy Meets, Undergraduate Computer Science & Applied Mathematics Student at the City College of New York, and Machine Learning & Open Source Fellow at CUNY Tech Prep.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                  className="relative flex items-center justify-center w-full rounded-sm border border-blue-600 bg-blue-600 px-16 py-5 text-sm font-medium text-white overflow-hidden transition-all duration-300 ease-in-out sm:w-auto
               hover:text-white group"
                  href="https://www.linkedin.com/in/jay-noppone-p"
                  target="_blank"
              >
                <span className="absolute inset-0 bg-white w-0 transition-all duration-175 ease-in-out group-hover:w-full"></span>
                <span className="relative group-hover:text-blue-600">
      <FaLinkedin className="size-10 object-center"/>
    </span>
              </a>
                <a
                    className="relative flex items-center justify-center w-full rounded-sm border border-gray-800 bg-gray-800 px-16 py-5 text-sm font-medium text-white overflow-hidden transition-all duration-300 ease-in-out sm:w-auto
               hover:text-black group"
                    href="https://github.com/jaynopponep"
                    target="_blank"
                >
                    <span className="absolute inset-0 bg-white w-0 transition-all duration-175 ease-in-out group-hover:w-full"></span>
                    <span className="relative group-hover:text-gray-800">
      <FaGithub className="size-10 object-center"/>
    </span>
                </a>
            </div>
          </div>
        </div>
      </section>

    //     <div className="font-semibold">Hi, I'm Jay</div>
    //     <div>Python & JavaScript Software Developer</div>
    //     <div>CS Student @ CCNY</div>
    //           href=""
    //
    //           href=""
    //
  );
}
