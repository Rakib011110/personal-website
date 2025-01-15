import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Work.css";

const Work = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const cardsPerPage = 4;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);
  const displayedCards = cardData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" mt-20 mb-10 text-white container mx-auto  p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-4  gap-8">
        {displayedCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative  rounded-lg bg-white h-[400px] shadow-lg overflow-hidden"
            onClick={() => handleCardClick(card)}>
            <img
              src={card.photoUrl}
              alt={card.title}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
              <a
                href={card.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 px-4 py-2 text-sm rounded-lg text-white m-2">
                Live Demo <FaExternalLinkAlt className="inline ml-2" />
              </a>
              <a
                href={card.githubLink.client}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-4 py-2 text-sm rounded-lg text-white m-2">
                Client Code <FaGithub className="inline ml-2" />
              </a>
              <a
                href={card.githubLink.server}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 px-4 py-2 text-sm rounded-lg text-white m-2">
                Server Code <FaGithub className="inline ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500"
          }`}>
          Previous
        </button>
        <span className="px-4">{`${currentPage} / ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500"
          }`}>
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedCard && (
        <Modal open={isModalOpen} onClose={closeModal} center>
          <div className="flex flex-col lg:flex-row bg-black items-center p-6">
            <div className="w-full lg:w-1/2">
              <img
                src={selectedCard.photoUrl}
                alt={selectedCard.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
              <p className="mb-4">{selectedCard.description}</p>
              <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedCard.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={selectedCard.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 px-4 py-2 text-sm rounded-lg text-white">
                  Live Demo
                </a>
                <a
                  href={selectedCard.githubLink.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 px-4 py-2 text-sm rounded-lg text-white">
                  Client Code
                </a>
                <a
                  href={selectedCard.githubLink.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 px-4 py-2 text-sm rounded-lg text-white">
                  Server Code
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Work;
