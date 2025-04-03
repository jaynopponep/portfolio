import React from 'react';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';

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
            title: "Software Engineer",
            date: "January 2025 - Present",
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
            date: "July 2024 - Present",
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
        <section className="py-24 bg-[#e1edd0]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#080b05]">{title}</h2>
                </div>

                <div className="relative">
                    <div className="absolute left-[35%] top-0 bottom-0 w-px bg-black/10"></div>

                    {timelineEntries.map((entry, index) => (
                        <div key={index} className="relative pt-6 pb-8">
                            <div className="absolute left-[35%] -ml-6 top-6 h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center text-white overflow-hidden">
                                {entry.icon ? (
                                    <Image
                                        src={entry.icon}
                                        alt={`${entry.company} icon`}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <FaGraduationCap className="text-xl"/>
                                )}
                            </div>

                            <div className="float-left w-[35%] pr-24 text-right">
                                <h3 className="text-xl font-bold text-[#8f9c7c]">{entry.title}</h3>
                                <p className="text-sm text-gray-500">{entry.date}</p>
                            </div>

                            <div className="ml-[35%] pl-16">
                                <h4 className="text-lg font-semibold text-gray-800 relative pb-5 mb-4 after:content-[''] after:block after:h-[3px] after:w-12 after:bg-black/20 after:absolute after:left-0 after:bottom-0">
                                    {entry.company}
                                </h4>
                                <div>
                                    {entry.description.map((bullet, bulletIndex) => (
                                        <p key={bulletIndex} className="mb-3 text-gray-600">
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