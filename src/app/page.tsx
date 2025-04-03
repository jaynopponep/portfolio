import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
      <section className="bg-[#e1edd0] text-white">
        <div className="mx-auto px-4 py-32 pt-16 max-w-[80rem] lg:flex lg:h-[90vh] lg:items-center">
          <div className="mx-auto w-full text-center">
              <h1
                  className="bg-[#080b05] bg-clip-text text-4xl font-heading font-bold text-transparent sm:text-4xl"
                  style={{WebkitTextStroke: '0.5px #080b05'}}
              >
                  Hi, I'm Jay.
                  <span> I'm studying Computer Science + Applied Mathematics at </span>
                  <span className="text-[#8f9c7c]" style={{WebkitTextStroke: '0.5px #8f9c7c'}}>CCNY!</span>
              </h1>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                      className="relative flex items-center justify-center w-full rounded-sm border border-gray-800 bg-[#080b05] px-5 py-3 text-sm font-medium text-white overflow-hidden transition-all duration-300 ease-in-out sm:w-auto
                      hover:text-black group"
                      href="https://docs.google.com/viewerng/viewer?url=https://storage.googleapis.com/simplify-resumes/f90944be-1748-4490-83d5-92d3fe399466/b6542c0e-1a7e-4ded-be03-948e1b1d9127/1740593176.pdf?Expires%3D1741491725%26GoogleAccessId%3Dgcs-signing-service-account%2540mifflin-backend.iam.gserviceaccount.com%26Signature%3DS0lsxRtbq4XHisZNiBiocWYLcCtfIJe6F5iX6RR%252Fyg5bUoJbNh51fkvDGPrJSnVznHWV5SR4kwAqh5XYwFn4BaFeQ78i10ZSDok6muFZpe5OzzVe8uB8Cd4KItbdt%252Fyq08%252BQdKF262AdzFi8UnVeUxjU0q%252BeeJuwsXgvPWDCFbStg1RzmDg0STX5DnpFoH1uvy9mpJIrRh%252FnlUgFd6jpbk2jt9SB%252FboxNA8wIDWEFjHQwe0G8%252Fm7wQeMRotRtdmvmEl1Q1OhFFHUiXzVnp6rS4ZpMYlavq3pnQxsF%252BK3I%252BX1rCQYdUaAxmlqRG9B%252BweE0ugR5FN7EJ5JyflOuZy1ZQ%253D%253D"
                      target="_blank"
                  >
                      <span className="absolute inset-0 bg-white w-0 transition-all duration-175 ease-in-out group-hover:w-full"></span>
                      <span className="relative group-hover:text-gray-800 font-heading text-xl leading-none">
                          Resume
                      </span>
                  </a>
                  <a
                      className="relative flex items-center justify-center w-full rounded-sm border border-blue-600 bg-blue-600 px-10 py-5 text-sm font-medium text-white overflow-hidden transition-all duration-300 ease-in-out sm:w-auto
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
                      className="relative flex items-center justify-center w-full rounded-sm border border-gray-800 bg-[#080b05] px-10 py-5 text-sm font-medium text-white overflow-hidden transition-all duration-300 ease-in-out sm:w-auto
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
  );
}
