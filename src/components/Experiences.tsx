import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Easy Meets",
    role: "Software Engineer",
    description: [
        "Coordinated with the Frontend team to engineer and optimize a scalable Go Fiber backend service, " +
            "enabling seamless creation and management of plans and events for a network of over 10,000+ users.",
        "Implemented efficient abstraction and request/error handling systems to reduce API response time by 70%.",
            "Optimized the JWT authentication system with Redis to ensure data integrity & secure user access control."
    ],
    image: "/easy_meets_logo.jpeg"
  },
  {
    title: "ACM, Association for Computing Machinery (BYTE)",
    role: "Technical Development Mentor",
    description: [
      "Designing roadmaps and agile-sprint cycles to efficiently guide young CCNY engineers in delivering scalable full-stack" +
      " applications, ensuring best software development practices and industry standards.",
      "Coaching teams with presentations and live demos of ACM board members and community."
    ],
    image: "/ACM.png",
  },
  {
    title: "CUNY Tech Prep",
    role: "Machine Learning and Open Source Fellow",
    description: [
      "Workshopped data science & machine learning fundamentals with Python libraries including Pandas, Scikit-Learn, " +
      "PyTorch, HuggingFace, OpenCV on 20+ large datasets",
      "As the project lead & machine learning engineer, collaborated with three engineers to produce 'Learn-ASL', an educational platform" +
      " that uses our fine-tuned OpenCV-YOLOv8 model to classify American Sign Language hand signs into English text to bring" +
      " awareness to the rising population of those who are hard of hearing.",
      "Collaborating with an engineer in exploring and contributing to open-source projects. Engaging in codebase analysis" +
      ", and studying industry best practices within large scale software applications."
    ],
    image: "/ctp-logo.png",
  },

  {
    title: "ICCAE - Cyber Threat Intelligence Integration Center",
    role: "Software Engineering Research Intern",
    description: [
      "Built an Natural-Language Processing AI model with an engineer through TDD to process 10,000+ data entries" +
      " using TF-IDF vectorizer Scikit-Learn methods. Reached a " +
      "70% accuracy after thorough testing with human vs. AI-written text documents and essays, contributing to publication efforts.",
    ],
    image: "/CTIIC.png",
  },
];

export default function Experiences() {
  return (
      <section id="experiences" className="bg-[#e1edd0] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-[#080b05] mb-12">
            My Experiences
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white shadow-lg rounded-lg p-6 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {exp.role}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-700 text-md">
                      {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Image
                        src={exp.image}
                        width={200}
                        height={200}
                        alt={`${exp.title} Logo`}
                        className="rounded-md shadow-md"
                    />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
