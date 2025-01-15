import React from "react";
import "../Works/Work.css";
import TextComponent from "../../../Common/Title";

const Work = () => {
  const cardData = [
    {
      title: "Titans Arena",
      description:
        "This platform serves as the primary source for official game information and early access pre-registration. It enhances the gaming experience with esports tools and an enriching blog for insightful discussions. The platform fosters a strong gaming community, prioritizing secure connectivity and cross-device compatibility.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Daisy UI",
        "Redux Toolkit (RTK Query)",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      githubLink: {
        client: "https://github.com/Rakib011110/titans-arena-client",
        server: "https://github.com/Rakib011110/titans-arena-server",
      },
      liveDemoLink: "https://silver-cassata-e39a11.netlify.app/",
      photoUrl:
        "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1736870219/screencapture-silver-cassata-e39a11-netlify-app-2025-01-14-21_49_30_qmeiyg.png",
    },
    {
      title: "ShopHaven",
      description:
        "A comprehensive online shopping platform for users, vendors, and admins. It features product comparison, secure payments, vendor dashboards, and a scalable API. Designed with responsive layouts and secure transactions to ensure excellent performance across devices.",
      technologies: [
        "HTML",
        "CSS",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
      ],
      githubLink: {
        client: "https://github.com/Rakib011110/shophaven-client",
        server: "https://github.com/Rakib011110/shophaven-server",
      },
      liveDemoLink: "https://shophaven-demo.com",
      photoUrl:
        "https://res.cloudinary.com/dqp2vi7h1/image/upload/v1736887434/screencapture-localhost-3000-2025-01-15-02_38_22_tqen94.png",
    },
    {
      title: "Toy Store",
      description:
        "This website offers a wide range of kids' toys with detailed information accessible upon login. It includes easy-to-use search functionality, allowing users to quickly find specific toys by name. Additionally, JWT ensures enhanced user security for safe browsing.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Express.js",
        "Tailwind CSS",
        "Daisy UI",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
      githubLink: {
        client: "https://github.com/Rakib011110/toy-store-client",
        server: "https://github.com/Rakib011110/toy-store-server",
      },
      liveDemoLink: "https://i.ibb.co/8KrdDKW/1669308760122.png",
      photoUrl: "https://i.ibb.co/8KrdDKW/1669308760122.png",
    },
    {
      title: "Car Service Booking",
      description:
        "An innovative car service booking system that simplifies scheduling and maintenance tracking. Developed with React, TypeScript, and Express.js, it includes features like real-time notifications, payment integration, and customer feedback tracking.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Express.js",
        "Tailwind CSS",
        "Daisy UI",
        "Node.js",
        "MongoDB",
        "JWT",
      ],
      githubLink: {
        client: "https://github.com/Rakib011110/car-service-client",
        server: "https://github.com/Rakib011110/car-service-server",
      },
      liveDemoLink: "https://car-service-demo.com",
      photoUrl: "https://i.ibb.co/Q9r4hGC/1667240250131.png",
    },
  ];

  return (
    <div className="text-center mt-24 mb-10 container mx-auto">
      <TextComponent>
        <p className="text-4xl w-1/2 mx-auto font-bold border-b-4 text-center border-gray-500 p-2">
          MY RECENT WORK
        </p>
      </TextComponent>
      <div className="w-full mt-16 gap-4 mx-auto grid lg:grid-cols-4 container md:grid-cols-2 sm:grid-cols-1">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.photoUrl}
            title={card.title}
            description={card.description}
            githubClient={card.githubLink?.client}
            githubServer={card.githubLink?.server}
            liveDemo={card.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  image,
  title,
  description,
  githubClient,
  githubServer,
  liveDemo,
}) => {
  return (
    <div className="card shadow-md shadow-blue-700 border-blue-700 border-2">
      <div className="face front">
        <img className="rounded-md" src={image} alt={title} />
        {/* <div className="mt-72 p-3 w-44 mx-auto backdrop-blur-lg">
          <h1>{title}</h1>
        </div> */}
      </div>
      <div className="face back">
        <TextComponent>
          <h2 className="text-h2">{title}</h2>
        </TextComponent>
        <p className="text-p">{description}</p>
        <div className="links mt-4">
          {githubClient && (
            <a
              className="link-a mr-2"
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer">
              Client Code
            </a>
          )}
          {githubServer && (
            <a
              className="link-a mr-2"
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer">
              Server Code
            </a>
          )}
          {liveDemo && (
            <a
              className="link-a"
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
