import React from "react";
import "./Experience.css";

import Image from "../../assets/experience.jpg";

const Experience = () => {
  return (
    <div className="experience-main-container" id="experience">
      <p className="experience-heading">EXPERIENCE !</p>

      <div className="experience-img">
        <img src={Image} alt="" />
      </div>

      <div className="experience-description-1">
        <h2>HTML, CSS3 and JavaScript</h2>

        <ul>
          <li>
            I am a web developer with 1+ years of experience in HTML, CSS, and
            JavaScript. I have a strong understanding of web development basics
            and the ability to create functional and visually appealing
            websites.
          </li>

          <li>
            I am passionate about creating user-friendly websites and have
            experience in creating websites that are accessible to all users. I
            am always keen to learn new technologies and methodologies to stay
            up to date with the latest web development trends.
          </li>
        </ul>
      </div>

      <div className="experience-description-2">
        <ul>
          <h2>ReactJs</h2>
          <li>
            I am a web developer with 6+ months of experience in ReactJS. I have a
            understanding of how to use these technologies to create dynamic and
            interactive web applications.
          </li>
          {/* <li>
            I have experience in building and maintaining complex applications
            using ReactJS, where I have a good understanding of the concepts of
            components, state, and props.
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
