import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
       <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText} ➡️
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Shambhavi</span>👋
            <br/>
            A Computer Science Student from India.<br /><span className="text-xs">Scroll left or right to know more ↔</span>
        </h1>
    ),
    2:(
        <InfoBox 
            text = "Worked in various technical fields such as Game Dev, Web2, AI/ML, and Open Source."
            link="/about"
            btnText="Learn More"
        />
    ),
    3:(
        <InfoBox 
            text = "Open to opportunities involving Software Development and Personal Growth. "
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox 
            text = "If you to talk about Development, DSA or perhaps music, I'm just one click below :)"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo