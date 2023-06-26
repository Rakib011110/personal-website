import React from "react";
import "../Works/Work.css";
import TextComponent from "../../../Common/Title";

const Work = () => {
  return (
    <div className="text-center mt-52 mb-32">
      <TextComponent>
        <p className="text-4xl font-bold border-b-4 text-center border-gray-500 p-2 inline">
          MY RECENT WORK
        </p>
      </TextComponent>
      <div className="wrapper mt-16  mx-auto grid lg:grid-cols-3  w-[1200px] gap-10 md:grid-cols-3 sm:grid-cols-1">
        <Card
          image="https://i.ibb.co/qjrbYYM/home-KIDDSTOYS.png"
          title="TOY STORE "
          description="   DETAILS COMMING......  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus."
        />
        <Card
          image="https://i.ibb.co/8KrdDKW/1669308760122.png"
          title="SPORTS CLUB"
          description="
          DETAILS COMMING......
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus."
        />
        <Card
          image="https://i.ibb.co/Q9r4hGC/1667240250131.png"
          title="CAR SERVICE"
          description="    DETAILS COMMING...... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellat maiores aperiam nemo officia, praesentium suscipit? Eum voluptate fuga eius accusamus harum cum unde natus."
        />
      </div>
    </div>
  );
};

const Card = ({ image, title, description }) => {
  return (
    <div className="card ">
      <div className="face front">
        <img className=" rounded-md" src={image} alt={title} />
        <h1 className="text-h1">{title}</h1>
      </div>
      <div className="face back">
        <TextComponent>
          {" "}
          <h2 className="text-h2">{title}</h2>{" "}
        </TextComponent>

        <p className="text-p">{description}</p>
        <div className="links">
          <a className="link-a" href="#">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
