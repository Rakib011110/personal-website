import { ProgressBar } from "./ProgressBar";

const ResumeComponent = () => (
  <div className="p-6 bg-gray-900 min-h-screen">
    <TabComponent />
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div>
        <h2 className="text-white text-2xl mb-4">Design Skill</h2>
        <ProgressBar label="Photoshop" percentage={100} />
        <ProgressBar label="Figma" percentage={95} />
        <ProgressBar label="Adobe XD" percentage={60} />
        <ProgressBar label="Adobe Illustrator" percentage={70} />
        <ProgressBar label="Design" percentage={90} />
      </div>
      <div>
        <h2 className="text-white text-2xl mb-4">Development Skill</h2>
        <ProgressBar label="HTML" percentage={100} />
        <ProgressBar label="CSS" percentage={95} />
        <ProgressBar label="JavaScript" percentage={60} />
        <ProgressBar label="Software" percentage={70} />
        <ProgressBar label="Plugin" percentage={90} />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div>
        <h2 className="text-white text-2xl mb-4">Education Quality</h2>
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
      <div>
        <h2 className="text-white text-2xl mb-4">Job Experience</h2>
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
    </div>
  </div>
);

export default ResumeComponent;
