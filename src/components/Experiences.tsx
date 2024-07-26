import React from "react";
import Image from "next/image";

export default function Experiences() {
    return (
        <main id="experiences" className="h-[700px] flex flex-col items-center justify-center font-basicsans text-[60px] -mt-8">
            <div className="mb-8">
                Experiences
            </div>
            <div className="text-[35px] space-y-4">
                <div>
                    <div className="flex items-center">
                        <Image src="/ctp-logo.png"
                               width={45}
                               height={45}
                               alt="CTP Logo">
                        </Image>
                        <span className="ml-2">CUNY Tech Prep</span>
                    </div>
                    <div className="text-[27px] text-[#1591ea]">
                        Data Science Fellow
                        <div className="text-[20px] text-[#000000]">
                            <ul className="list-disc font-arsmaquette">
                                <li>
                                    Receive mentorship and coaching for technical prep and mock interviews
                                </li>
                                <li>
                                    Develop skills in data science technologies including Pandas, TensorFlow, PyTorch in weekly courses
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <Image src="/headstarter-logo.jfif"
                               width={45}
                               height={45}
                               alt="Headstarter Logo">
                        </Image>
                        <span className="ml-2">Headstarter AI</span>
                    </div>
                    <div className="text-[27px] text-[#1591ea]">
                        Software Engineering Fellow
                        <div className="text-[20px] text-[#000000]">
                            <ul className="list-disc font-arsmaquette">
                                <li>
                                    Develop full-stack applications integrated with AI libraries throughout 7 weeks and participate in weekly hackathons
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <Image src="/iccae.JPG"
                               width={45}
                               height={45}
                               alt="ICCAE Logo">
                        </Image>
                        <span className="ml-2">Intelligence Community Center for Academic Excellence</span>
                    </div>
                    <div className="text-[27px] text-[#1591ea]">
                        CTIIC Research Associate Fellow
                        <div className="text-[20px] text-[#000000]">
                            <ul className="list-disc font-arsmaquette">
                                <li>
                                    Co-developed an AI-driven tool using the Scikit-Learn pipeline to classify text as AI generated or human written at a 70% accuracy
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <Image src="/pye.jfif"
                               width={45}
                               height={45}
                               alt="PYE logo">
                        </Image>
                        <span className="ml-2">PYE Education Center</span>
                    </div>
                    <div className="text-[27px] text-[#1591ea]">
                        STEM Course Development Intern
                        <div className="text-[20px] text-[#000000]">
                            <ul className="list-disc font-arsmaquette">
                                <li>
                                    Wrote 8 basic programing courses per week for middle school students, totaling up to 60~ courses
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}