import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { Card } from "./CardComponent";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Professional Skills");

  const tabs = ["Professional Skills", "Education", "Experience", "Interview"];

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-lg py-2 px-4 ${
              activeTab === tab ? "border-b-2 border-red-500" : ""
            } hover:text-red-500 transition duration-300`}
            onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {activeTab === "Professional Skills" && <ProfessionalSkills />}
        {activeTab === "Education" && <Education />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Interview" && <Interview />}
      </div>
    </div>
  );
};

const ProfessionalSkills = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">Professional Skills</h3>
    <ProgressBar label="Photoshop" percentage={100} />
    <ProgressBar label="Figma" percentage={95} />
    <ProgressBar label="Adobe XD" percentage={60} />
  </div>
);

const Education = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">Education</h3>
    <Card
      title="BSc in Computer Science"
      subtitle="3.80/4"
      description="University of DW (2006 - 2010)"
      location="USA"
    />
    <Card
      title="AS - Science & Information"
      subtitle="4.7/5"
      description="Supertking College (2001 - 2006)"
      location="USA"
    />
  </div>
);

const Experience = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">Experience</h3>
    <Card
      title="Sr. Software Engineer"
      subtitle="2017 - Present"
      description="Google Out Tech"
      location="USA"
    />
    <Card
      title="Web Developer & Trainer"
      subtitle="2012 - 2016"
      description="Apple Developer Team"
      location="Malaysia"
    />
  </div>
);

const Interview = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">Interview</h3>
    <p>Content for interview section</p>
  </div>
);

export default TabComponent;
