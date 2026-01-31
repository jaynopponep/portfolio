import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./page.css";

export default function Home() {
  return (
      <section className="home section">
        <div className="wrapper">
          <div className="inner">
              <h1 className="title">
                  <span> Jay Noppone P</span>
              </h1>
              <div className="buttons">
                  <a
                      className="btn btnResume"
                      href="https://docs.google.com/viewerng/viewer?url=https://storage.googleapis.com/simplify-resumes/f90944be-1748-4490-83d5-92d3fe399466/b6542c0e-1a7e-4ded-be03-948e1b1d9127/1740593176.pdf?Expires%3D1741491725%26GoogleAccessId%3Dgcs-signing-service-account%2540mifflin-backend.iam.gserviceaccount.com%26Signature%3DS0lsxRtbq4XHisZNiBiocWYLcCtfIJe6F5iX6RR%252Fyg5bUoJbNh51fkvDGPrJSnVznHWV5SR4kwAqh5XYwFn4BaFeQ78i10ZSDok6muFZpe5OzzVe8uB8Cd4KItbdt%252Fyq08%252BQdKF262AdzFi8UnVeUxjU0q%252BeeJuwsXgvPWDCFbStg1RzmDg0STX5DnpFoH1uvy9mpJIrRh%252FnlUgFd6jpbk2jt9SB%252FboxNA8wIDWEFjHQwe0G8%252Fm7wQeMRotRtdmvmEl1Q1OhFFHUiXzVnp6rS4ZpMYlavq3pnQxsF%252BK3I%252BX1rCQYdUaAxmlqRG9B%252BweE0ugR5FN7EJ5JyflOuZy1ZQ%253D%253D"
                      target="_blank"
                  >
                      <span className="btnOverlay" />
                      <span className="btnText">Resume</span>
                  </a>
                  <a
                      className="btn btnLinkedIn"
                      href="https://www.linkedin.com/in/jay-noppone-p"
                      target="_blank"
                  >
                      <span className="btnOverlay" />
                      <span className="btnText">
                          <FaLinkedin className="btnIcon" />
                      </span>
                  </a>
                  <a
                      className="btn btnGithub"
                      href="https://github.com/jaynopponep"
                      target="_blank"
                  >
                      <span className="btnOverlay" />
                      <span className="btnText">
                          <FaGithub className="btnIcon" />
                      </span>
                  </a>
              </div>
          </div>
        </div>
      </section>
  );
}
