import React from "react";
import "./About.css";
import Image from "../../assets/about.avif";

const About = () => {
  return (
    <div className="main-about-container" id="about">

      <div className="main-about-container-1">
        <img src={Image} alt="" />
      </div>

      <div className="main-about-container-2">

        <p className="about-heading">About !</p>

        <h1 >A dedicated Front-end Developer</h1>
       
        <p className="about-paragraph">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React,
          and Bootstrap. I excel in designing and maintaining responsive
          websites that offer a smooth user experience. My expertise lies in
          crafting dynamic, engaging interfaces through writing clean and
          optimized code and utilizing cutting-edge development tools and
          techniques. I am also a team player who thrives in collaborating with
          cross-functional teams to produce outstanding web applications.
       
        </p>

        <div className="about-btn">
        <a className="btn" href="#footer"> Contact Me </a>
        </div>
       
        
      
      </div>

    </div>
  );
};

export default About;
