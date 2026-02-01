import React from 'react';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import './Timeline.css';

type DescriptionBullet = string | { text: string; href: string };

type TimelineEntry = {
    title: string;
    date: string;
    company: string;
    companyUrl?: string;
    description: DescriptionBullet[];
    icon?: string;
};

type TimelineProps = {
    title?: string;
};

const Timeline: React.FC<TimelineProps> = ({ title = "Experience" }) => {
    const timelineEntries: TimelineEntry[] = [
        {
            title: "Software Engineer Intern",
            date: "June 2025 - Present",
            company: "QAD Redzone",
            companyUrl: "https://rzsoftware.com/",
            icon: "/redzone.png",
            description: [
                "React Native & VueJS development for the main Redzone and admin dashboard app",
                "Go microservices for feature rollouts and beta access control",
                "Scala REST API for compliance monitoring"
            ]
        },
        {
            title: "Full-Stack Software Engineer",
            date: "January 2025 - May 2025",
            company: "Easy Meets",
            icon: "/easy_meets_logo.jpeg",
            description: [
                "Go (Fiber) backend HTTP service, scaled for 1,000+ users",
                "JWT authentication with Redis caching to reduce latency and database lookups by 60%",
            ]
        },
        {
            title: "Mentor & Campus Ambassador",
            date: "January 2025 - December 2025",
            company: "Build Your Technical Experience, ACM",
            companyUrl: "https://github.com/BYTE-Club-CCNY/",
            icon: "/ACM.png",
            description: [
                "Voice-controlled Raspberry Pi inventory system with Google speech-to-text and NLP",
                {
                    text: "Organized CCNY's first hackathon & workshops with Google Labs in $10k prize pool and budget",
                    href: "https://www.bytehacks.org/"
                }
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
                                        width={96}
                                        height={96}
                                        sizes="48px"
                                        unoptimized
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
                                    {entry.companyUrl ? (
                                        <a href={entry.companyUrl} target="_blank" rel="noopener noreferrer" className="companyLink">
                                            {entry.company}
                                        </a>
                                    ) : (
                                        entry.company
                                    )}
                                </h4>
                                <div>
                                    {entry.description.map((bullet, bulletIndex) => (
                                        <p key={bulletIndex} className="bullet">
                                            • {typeof bullet === "string" ? (
                                                bullet
                                            ) : (
                                                <a href={bullet.href} target="_blank" rel="noopener noreferrer" className="bulletLink">
                                                    {bullet.text}
                                                </a>
                                            )}
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