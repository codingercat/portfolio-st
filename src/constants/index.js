import { gdsc, odc, dcrust, iic, udemy , lisocImg, cn, nielit, igdtuw, contact, linkedin, github} from "../assets/images";

import arrowIcon from "../assets/images/arrow.svg";
import pricewiseIcon from "../assets/images/pricewise.svg";
import carIcon from "../assets/images/car.svg"; 
import estateIcon from "../assets/images/estate.svg"; 
import threadsIcon from "../assets/images/threads.svg"; 
import summizIcon from "../assets/images/summiz.svg"; 
import snapgramIcon from "../assets/images/snapgram.svg"; 

export const experiences = [
    {
        title: "B.Tech in Computer Science and Engineering",
        company_name: "Deenbandhu Chhotu Ram University of Sci. & Tech (DCRUST)",
        icon: dcrust,
        iconBg: "#9acd32",
        date: "Dec 2021 - Jun 2025",
        points: [
            "Bachelors of Technology Relevant Courses:",
            "1. Data Structures and Algorithms",
            "2. Object Oriented Programming",
            "3. Design and Analysis of Algorithms",
            "4. Operating System", 
            "5. Database Management System", 
            "6. Computer Networks",
        ],
    },
    {
        title: "Complete C Programming Bootcamp",
        company_name: "Udemy",
        icon: udemy,
        iconBg: "#dda0dd",
        date: "Apr 2022",
        points: [
            "Basics of Programming Languages and implementation of data structure using C.",
        ],
    },
    {
        title: "Certificate of Excellence in Java",
        company_name: "Coding Ninjas",
        icon: cn,
        iconBg: "#ffa07a",
        date: "Feb 2023",
        points: [
            "Learnt Object Oriented Programming, Problem solving, Algorithm design and Data Structures in Java",
            "Implemented games like Tic-Tac-Toe and Othello and also utilised UI development kit in Java to create a real-time calculator",
            
        ],
    },
    {
        title: "Training in Artificial Intelligence and Machine Learning",
        company_name: "National Institute of Electronics and Info. Tech.(N.I.E.L.I.T), Delhi",
        icon: nielit,
        iconBg: "#add8e6",
        date: "July 2023 - August 2023",
        points: [
            "Completed 1 month training in lieu of completion of 4th semester.",
            "Learnt more than 10 Machine Larning and Deep Learning Algorithms such as KNN, CNN, ANN, and implmented 12+ mini projects such as emotion identifier using NLTK, Stamp Identification, Breast Cancer Detection and House Price Prediction.",
            
        ],
    },
    {
        title: "Summer Research Project @IGDTUW",
        company_name: "Indira Gandhi Delhi Technical University For Women, Delhi",
        icon: igdtuw,
        iconBg: "#b7e4c7",
        date: "August 2023",
        points: [
            "Worked on an NP-Hard problem the Asymmetric Travelling Salesman Problem(ATSP).",
            "Analyzed and compared 2 algorithms(Memetic and Genetic) to fabricate an optimal solution",
            
        ],
    },
    {
        title: "Open Source Lead",
        company_name: "DCRUSTODC(Open-source Developers Coummunity)",
        icon: odc,
        iconBg: "grey",
        date: "Sept 2023",
        points: [
            "Took a session for more than 70 students and encouraged them to make open-source contributions.",
        ],
    },
    {
        title: "Management Lead",
        company_name: "Google Developer Student Clubs, DCRUST",
        icon: gdsc,
        iconBg: "	#87cefa",
        date: "Sept 2023 - Sept 2024",
        points: [
            "Managed and engaged 100+ students and enlightened them about Google Developers community.",
            "Handling 3 different social media accounts for the GDSC with more than 250+ followers overall",
        ],
    },
   
    {
        title: "Co-cordinator, Literary Society",
        company_name: "LISOC",
        icon: lisocImg,
        iconBg: "#eee8aa",
        date: "Aug 2022 - Sept 2023",
        points: [
            "First position among 100+ students in 'Kavyem', Bilingual Poetry Writing Competition",
            "Mentored 4 students to improve their spoken English, verbal skills, and overall holistic development",       
        ],
    },
    {
        title: "Member, Institute Innovation Council",
        company_name: "IIC",
        icon: iic,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Current",
        points: [
            "Qualified State Level Hackathon conducted by IIC,DCRUST in association with iHub Divysamparak,IIT Roorkee.",
            "Attended 40+ workshops related to startup building and community growth.",
            
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/codingercat',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shambhavi-thakur1/',
    }
];



export const projects = [
    {
        iconUrl: pricewiseIcon,
        theme: 'btn-back-red',
        name: 'Rolling Ball',
        description: 'A 3D Game consisting of 2 Levels which has been built from scratch (Fullstack) with Unity Engine. To create the game, I used Unity version 2019.4.40f1 and custom C# scripts.',
        link: 'https://github.com/codingercat/Rolling-ball',
    },
    {
        iconUrl: threadsIcon,
        theme: 'btn-back-yellow',
        name: 'Dcrust Societies',
        description: 'Created using HTML, CSS and JavaScript to depict listing of the societies offered by my university. It helped a lot of students to access information easily.',
        link: 'https://github.com/codingercat/Dcrust-Societies',
    },
    {
        iconUrl: carIcon,
        theme: 'btn-back-blue',
        name: 'Travelina',
        description: 'Designed and built a web application(Frontend) as a one stop solution to all your travel requirements. Integrated various APIs such as Weather, Hotel etc.',
        link: 'https://devfolio.co/projects/travelina-f319',
    },
 
    {
        iconUrl: estateIcon,
        theme: 'btn-back-black',
        name: 'Drum Kit',
        description: 'A JavaScript based website depiciting working of an actual drumkit created as a part of Web Development bootcamp by Angela Yu.',
        link: 'https://github.com/codingercat/Drum-kit',
    },
    {
        iconUrl: summizIcon,
        theme: 'btn-back-pink',
        name: 'SmartMeasure',
        description: 'It is an ideation for adding an AR feature in our Online Shopping Applications or Websites to enhance User Experience(UX). It was made under the Idea Track for "Sparkathon", a hackathon conducted by Walmart Global Tech.',
        link: 'https://www.youtube.com/watch?v=Tr5Ee8eTvUw&t=12s',
    },
    {
        iconUrl: snapgramIcon,
        theme: 'btn-back-green',
        name: 'AI Based Irrigation System',
        description: 'A hardware based project ideation created as a part of SIH 2023 and qualified at University Level. AI based irrigation system using mobile application based monitoring syste, a honeycomb structure and KNN ML Algorithm',
        link: 'https://github.com/codingercat/Smart-India-Hackathon-2023',
    }
];