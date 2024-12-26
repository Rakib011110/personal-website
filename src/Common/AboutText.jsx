import React, { useState } from "react";
import CountUp from "react-countup";

const AboutText = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Tabs */}
      <div className="flex gap-4">
        <div
          className={`py-2 btn px-6 rounded cursor-pointer ${
            activeTab === "experience"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("experience")}>
          Experience
        </div>
        <div
          className={`py-2 px-6 btn rounded cursor-pointer ${
            activeTab === "clients" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("clients")}>
          Clients
        </div>
        <div
          className={`py-2 px-6 btn rounded cursor-pointer ${
            activeTab === "projects" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("projects")}>
          Projects
        </div>
      </div>

      {/* Tab Content */}
      <div className="text-center">
        {activeTab === "experience" && (
          <div>
            <div className="text-[40px] font-tertiary text-gradient mb-2 text-white">
              <CountUp start={0} end={2} duration={3} />+
            </div>
            <div className="font-primary text-sm text-white tracking-[2px]">
              Years of Experience
            </div>
          </div>
        )}
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
  );
};

export default AboutText;
