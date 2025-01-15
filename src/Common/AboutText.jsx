import React, { useState } from "react";
import CountUp from "react-countup";

const AboutText = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" items-center justify-center gap-6">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-start  md:px-8 lg:px-0 overflow-x-auto">
        {["certifications", "education", "experience", "projects"].map(
          (tab) => (
            <div
              key={tab}
              className={`py-2 px-4 btn rounded cursor-pointer whitespace-nowrap ${
                activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleTabClick(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          )
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-4 ">
        <div>
          {activeTab === "certifications" && (
            <div className="me-12">
              <h4 className="text-xl font-bold text-white mb-4">
                Licenses & Certifications
              </h4>
              <ul className="list-disc font-sans list-inside space-y-4 text-sm text-white tracking-wide">
                <li>
                  <span className="font-semibold font-sans">
                    Complete Next Level Web Development Course
                  </span>{" "}
                  – Programming Hero
                  <p className="text-gray-100 text-xs font-sans mt-1">
                    Comprehensive program focusing on full-stack web
                    development.
                    <a
                      href="https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch-3-fullstackWEB7-47451043"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline">
                      View Certificate
                    </a>
                  </p>
                </li>
                <li>
                  <span className="font-semibold font-sans">
                    Industrial Attachment in Professional Web
                  </span>{" "}
                  – Creative IT Institute
                  <p className="text-gray-100 text-xs mt-1 font-sans">
                    Practical training with hands-on experience in web
                    development projects.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Endgame Program</span> –
                  Programming Hero (Recommendation Letter)
                  <p className="text-gray-100 text-xs mt-1">
                    Advanced-level mentoring to refine web development skills.
                  </p>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          {activeTab === "education" && (
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Education</h4>
              <p className="font-primary text-sm text-white tracking-[2px]">
                <strong>Southeast University (SEU)</strong>
                <br />
                ● Degree: Bachelor of Science (BSc) in Computer Science
                <br />
                ● Duration: 2024 – Present
                <br />
                <br />
                <strong>Pabna Polytechnic Institute</strong>
                <br />
                ● Diploma in Computer Science and Technology
                <br />● Duration: 2019 – 2023
              </p>
            </div>
          )}
        </div>

        <div className="">
          {activeTab === "experience" && (
            <div className="">
              <div className="text-[40px]  font-tertiary text-gradient mb-2 text-white">
                <CountUp start={0} end={2} duration={3} />+
              </div>
              <div className="font-primary text-sm  text-white tracking-[2px]">
                Years of Experience
              </div>
            </div>
          )}
        </div>
        <div>
          {activeTab === "clients" && (
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2 text-white">
                <CountUp start={0} end={15} duration={3} />+
              </div>
              <div className="font-primary text-sm text-white tracking-[2px]">
                Happy Clients
              </div>
            </div>
          )}
        </div>
        <div>
          {activeTab === "projects" && (
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2 text-white">
                <CountUp start={0} end={15} duration={3} />
                k+
              </div>
              <div className="font-primary text-sm text-white tracking-[2px]">
                Projects Completed
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutText;
