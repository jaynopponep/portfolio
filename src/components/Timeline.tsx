import React from 'react';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import './Timeline.css';

type TimelineEntry = {
    title: string;
    date: string;
    company: string;
    description: string[];
    icon?: string;
};

type TimelineProps = {
    title?: string;
};

const Timeline: React.FC<TimelineProps> = ({ title = "My Experiences" }) => {
    const timelineEntries: TimelineEntry[] = [
        {
            title: "Software Engineer Intern",
            date: "June 2025 - Present",
            company: "QAD Redzone",
            icon: "/redzone.webp",
            description: [
                "QAD Redzone web applications and services with Vue.JS & TypeScript",
            ]
        },
        {
            title: "Software Engineer",
            date: "January 2025 - May 2025",
            company: "Easy Meets",
            icon: "/easy_meets_logo.jpeg",
            description: [
                "Engineered a scalable backend service using Go Fiber, reducing HTTP response time by 70%, enhancing user\n experience and system efficiency",
                "Optimized a secure JWT authentication system with Redis, decreasing latency by 50%, and reducing database\n lookups by 70%",
            ]
        },
        {
            title: "Mentor & Project Manager",
            date: "January 2025 - Present",
            company: "Build Your Technical Experience, ACM",
            icon: "/ACM.png",
            description: [
                "Design roadmaps and agile-sprint cycles to efficiently guide BYTE engineers in delivering scalable full-stack\n applications, ensuring best software development practices and industry standards",
                "Coach teams through presentations and live demos of ACM board members and community"
            ]
        },
        {
            title: "Machine Learning & Open Source Fellow",
            date: "July 2024 - May 2025",
            company: "CUNY Tech Prep",
            icon: "/ctp-logo.png",
            description: [
                "Pioneered an OpenCV-YOLOv8 model to classify American Sign Language hand signs into English text",
                "Building a Language Server Protocol (LSP) for VSCode that interacts directly with the LLM through prompt\n chaining"
            ]
        },
        {
            title: "Software Engineering Research Intern",
            date: "November 2023 - May 2024",
            company: "ICCAE: Cyber Threat Intelligence Integration Center",
            icon: "/CTIIC.png",
            description: [
                "Trained and optimized an NLP Generative AI model using TDD to process 10,000+ data entries, and achieving\n a 70% accuracy in identifying AI-written text and co-authoring a research paper",
                "Deployed a full-stack Next.JS React frontend and Python Flask backend handling 150+ users"
            ]
        }
    ];

    return (
        <section className="timeline section">
            <div className="container">
                <div className="headingWrapper">
                    <h2 className="heading">{title}</h2>
                </div>

                <div className="timelineTrack">
                    <div className="line" />

                    {timelineEntries.map((entry, index) => (
                        <div key={index} className="entry">
                            <div className="dot">
                                {entry.icon ? (
                                    <Image
                                        src={entry.icon}
                                        alt={`${entry.company} icon`}
                                        width={48}
                                        height={48}
                                        className="dotImage"
                                    />
                                ) : (
                                    <FaGraduationCap className="text-xl"/>
                                )}
                            </div>

                            <div className="left">
                                <h3 className="leftTitle">{entry.title}</h3>
                                <p className="leftDate">{entry.date}</p>
                            </div>

                            <div className="right">
                                <h4 className="company">
                                    {entry.company}
                                </h4>
                                <div>
                                    {entry.description.map((bullet, bulletIndex) => (
                                        <p key={bulletIndex} className="bullet">
                                            • {bullet}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;