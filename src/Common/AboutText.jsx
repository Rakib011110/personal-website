import React, { useState } from "react";
import CountUp from "react-countup";

const AboutText = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-wrap justify-end gap-10">
      <div className="  mb-4">
        <div
          className={`mr-4 py-2 btn px-4 rounded ${
            activeTab === "experience"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </div>
        <br />

        <div
          className={`py-2 px-4 rounded btn mt-10  ${
            activeTab === "projects" ? "bg-blue-500 text-white" : "bg-gray-300"
          } cursor-pointer`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </div>
      </div>

      <div className="">
        {activeTab === "experience" && (
          <div>
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                <CountUp start={0} end={13} duration={3} />
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Years of <br />
                exprience
              </div>
            </div>
          </div>
        )}
        {activeTab === "projects" && (
          <div>
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                <CountUp start={0} end={15} duration={3} />
                k+
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Projects <br />
                Completed
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutText;
