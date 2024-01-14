import React from "react";


import cssIcon from "../assets/icons/css.svg";
import csharpIcon from "../assets/icons/csharp.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import htmlIcon from "../assets/icons/html5.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import sqlIcon from "../assets/icons/sql.svg";
import figmaIcon from "../assets/icons/figma.svg";
import unityIcon from "../assets/icons/unity.svg";
import pythonIcon from "../assets/icons/python.svg";
import javaIcon from "../assets/icons/java.svg";
import reactIcon from "../assets/icons/react.svg";
import threejsIcon from "../assets/icons/threejs.svg";
import cIcon from "../assets/icons/c.svg";
import wordIcon from "../assets/icons/word.svg";
import pptIcon from "../assets/icons/powerpoint.svg";
import numpyIcon from "../assets/icons/numpy.svg";
import tensorflowIcon from "../assets/icons/tensorflow.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from "../constants";

import CTA from "../components/CTA";


import Typed from "react-typed";


const SkillIcon = ({ imageUrl, name }) => (
  <div className='block-container w-20 h-20' key={name}>
    <div className='btn-back rounded-xl' />
    <div className='btn-front rounded-xl flex justify-center items-center'>
      <img
        src={imageUrl}
        alt={name}
        className='w-1/2 h-1/2 object-contain'
      />
    </div>
  </div>
);

const About = () => {
  const skills = [
    { name: "HTML", imageUrl: htmlIcon },
    { name: "CSS", imageUrl: cssIcon },
    { name: "JavaScript", imageUrl: javascriptIcon },
    { name: "C", imageUrl: cIcon },
    { name: "CSharp", imageUrl: csharpIcon },
    { name: "Git", imageUrl: gitIcon },
    { name: "GitHub", imageUrl: githubIcon },
    { name: "SQL", imageUrl: sqlIcon },
    { name: "Figma", imageUrl: figmaIcon },
    { name: "Unity", imageUrl: unityIcon },
    { name: "Python", imageUrl: pythonIcon },
    { name: "Java", imageUrl: javaIcon },
    { name: "React", imageUrl: reactIcon },
    { name: "TailwindCSS", imageUrl: tailwindIcon },
    { name: "ThreeJS", imageUrl: threejsIcon },
    { name: "Numpy", imageUrl: numpyIcon },
    { name: "TensorFlow", imageUrl: tensorflowIcon },
    { name: "PowerPoint", imageUrl: pptIcon },
    { name: "Word", imageUrl: wordIcon },
    

  ];


  return (
    <section className="max-container">
      <h1 className="head-text">
      Hello👋<br />
      I'm {" "}
      <span className="blue-gradient_text 
      font-semibold drop-shadow">
        {" "}
        <Typed
          strings={[
            "Shambhavi",
            "a Programmer",
            " a Game Developer",
            " a Web Developer",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        </span>

      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Pre-final year B.Tech student pursuing Computer Science at DCRUST, Haryana.<br></br>
          Currently looking for internships and full-time Software Engineer roles.
          I'm a self-motivated, career driven<br></br> highly passionate individual with a keen interest in fascinating realms of 
          Game Development and AI/ML.
        </p>
      </div>


      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="py-16">
          <h3 className="subhead-text">Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
           <p>
            Apart from academics, I've taken part in several Hackathons to upskill myself in various tech domain and 
            to learn crucial aspects of team building and team work. Additionally, I've been associated with various societies,
            technical and non-technical, in order to holistically develop myself as an individual. Here's the rundown: 
           </p>
      </div>

            <div className="mt-12 flex">
              <VerticalTimeline>
                {experiences.map((experience) =>(
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={<div className="flex justify-center items-center
                    w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                      </div>}
                     
                      iconStyle={{background: experience.iconBg}}
                      contentStyle={{
                        borderBottom: '8px',
                        borderStyle: 'solid',
                        borderBottomColor: experience.iconBg,
                        boxShadow: 'none',
                      }}
                    >
                    <div>
                      <h3 className="text-black text-xl font-poppins
                      font-semibold">{experience.title}</h3>
                      <h4 className="text-black 
                      font-poppins mt-2">{experience.company_name}</h4>
                      <p className="text-blac-500 font-medium
                      font-base" style={{margin:0}}></p>
                    </div>

                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) =>(
                        <li key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal 
                        text-sm pl-1">
                          {point}
                        </li>
                      ))}

                    </ul>

                  </VerticalTimelineElement>    
                ))}
              </VerticalTimeline>
            </div>
        </div>

        <hr className="border-slate-200" />

          <CTA />

    
    </section>
  );
};

export default About