import React, { useState } from "react";
import CountUp from "react-countup";

const AboutText = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-8">
      {/* Tabs Navigation */}
      <div className="flex justify-center lg:justify-start gap-4 overflow-x-auto">
        {["certifications", "education", "experience", "projects"].map(
          (tab) => (
            <div
              key={tab}
              className={`py-2 px-6 cursor-pointer rounded-md text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleTabClick(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          )
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-gray-700 p-6 rounded-md text-white">
        {activeTab === "certifications" && (
          <div>
            <h4 className="text-xl font-bold mb-4">
              Licenses & Certifications
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-semibold">
                  Complete Next Level Web Development Course
                </span>{" "}
                – Programming Hero
                <p className="text-gray-300 mt-1">
                  Comprehensive program focusing on full-stack web development.
                  <a
                    href="https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch-3-fullstackWEB7-47451043"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline ml-1">
                    View Certificate
                  </a>
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  Industrial Attachment in Professional Web
                </span>{" "}
                – Creative IT Institute
                <p className="text-gray-300 mt-1">
                  Practical training with hands-on experience in web development
                  projects.
                </p>
              </li>
              <li>
                <span className="font-semibold">Endgame Program</span> –
                Programming Hero (Recommendation Letter)
                <p className="text-gray-300 mt-1">
                  Advanced-level mentoring to refine web development skills.
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <h4 className="text-xl font-bold mb-4">Education</h4>
            <p>
              <strong>Southeast University (SEU)</strong>
              <br />
              ● Degree: Bachelor of Science (BSc) in Computer Science (2024 –
              Present)
              <br />
              <br />
              <strong>Pabna Polytechnic Institute</strong>
              <br />● Diploma in Computer Science and Technology (2019 – 2023)
            </p>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Experience</h4>
            <div className="text-5xl font-bold">
              <CountUp start={0} end={2} duration={3} />+
            </div>
            <p className="mt-2">Years of Experience</p>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Projects</h4>
            <div className="text-5xl font-bold">
              <CountUp start={0} end={15} duration={3} />+
            </div>
            <p className="mt-2">Projects Completed</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutText;
