import React from "react";
import logo from "../../assets/images/person.png";

const About = () => {
  return (
    <div className="p-4 w-full md:w-2/3 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 container mx-auto">
      <img src={logo} className="mx-auto my-4" alt="" />
      <h1 className="text-center text-4xl font-serif">Alex Johnson</h1>
      <p className="md:w-2/4 mx-auto mt-8 font-sans">
        Alex Johnson is a online teacher. He teaches about Graphic designing,
        Video Editing, Games Development, App Development etc. He is loved by
        his students. He is Currently 45. He completed his MA in Computer
        Science and Engineering from Harvard. He have a 10 years + Experience of
        teaching.
      </p>
    </div>
  );
};

export default About;
