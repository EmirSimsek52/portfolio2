import { people01, 
  people02, 
  people03,
   facebook, 
   instagram, 
   linkedin, 
   twitter,
    airbnb, 
    binance, 
    coinbase, 
  dropbox, 
  send, 
 software,
rentalapp,
cryptoimg,
  react,
  web,
  reactjob,
  flashchat,
  bank,
  nexsusblog,
  sacaryawebdemo,
  } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

export const features = [
  {
    id: "feature-1",
    icon: software,
    title: "Web Developer",
    content:
      "I am a skilled web developer with expertise in React, Tailwind CSS, and Three.js, delivering exceptional websites with stunning visuals and seamless functionality.",
  },
  {
    id: "feature-2",
    icon: react,
    title: "Mobile Developer",
    content:
      " React Native developer with a track record of creating impressive mobile applications.",
  },
  {
    id: "feature-3",
    icon: web,
    title: "Software Developer",
    content:
      "I am a skilled software developer with OOP in C# and JAVA",
  },
];



export const stats = [
  {
   
    title: "Web Developer",

  },
  {
    
    title: "Mobile Developer",
   
  },
  {
 
    title: "Software Developer",
   
  },
];

export const projects = [
  {
    name: "Car Rent App",
    description:
      "Rental app made for safe and quick rent car. Customers just type their want and send the informations then Admin can see the informations on his adminpage.",
    tags: [
      {
        name: "React-Native",
        color: "text-[#3387be]",
      },
      {
        name: "Firebase",
        color: "text-[orange]",
      },
    ],
    image: rentalapp,
    source_code_link: "https://github.com/EmirSimsek52/RentaCarApp",
    live_link: "https://github.com/EmirSimsek52/RentaCarApp",
  },
  {
    name: "Full Stack Blog Website",
    description:
      "Welcome to my full-stack blog website! It offers seamless user registration and login functionalities. You can easily publish, update, and delete posts, ensuring a dynamic and interactive blogging experience.",
    tags: [
      {
        name: "React",
        color: "text-[#3387be]",
      },
      {
        name: "Tailwind",
        color: "text-[#6da5bb]",
      },
      {
        name: "MongoDB",
        color: "text-[#16FF00]"
      },
      {
        name: "NodeJS",
        color: "text-[#38E54D]"
      },
      {
        name: "express",
        color: "text-[white]"
      },
    ],
    image: nexsusblog,
    source_code_link: "https://github.com/EmirSimsek52/FullStackBlogWebsite",
    live_link: "https://github.com/EmirSimsek52/FullStackBlogWebsite",
  },
  
  {
    name: "Joub Found App",
    description:
    "Job found app fetch all data from jsearch api. Job advertisements are real, you can check the application video on click live button.  ",
    tags: [
      {
        name: "React-Native",
        color: "text-[#3387be]",
      },
      
    ],
    image: reactjob,
    source_code_link: "https://github.com/EmirSimsek52/jobfound-app",
    live_link: "https://www.youtube.com/shorts/dZaPSkLLEzo",
  },
  {
    name: "Chat Website",
    description:
      "Simple chat website with firebase. You can add someone on your chat and talk with him easiily. All messages hide in database.",
    tags: [
      {
        name: "React",
        color: "text-[#3387be]",
      },
      {
        name: "Tailwind",
        color: "text-[#6da5bb]",
      },
      {
        name: "Firebase",
        color: "text-[orange]"
      }
    ],
    image: flashchat,
    source_code_link: "https://github.com/EmirSimsek52/FlashChat",
    live_link: "https://flashchatt.netlify.app/",
  },
  {
    name: "Modern 3D Bank Concept",
    description:
      "Modern bank website with 3D model concept",
    tags: [
      {
        name: "React",
        color: "text-[#3387be]",
      },
      {
        name: "Tailwind",
        color: "text-[#6da5bb]",
      },
      { 
        name: "ThreeJS",
        color: "text-[white]",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/EmirSimsek52/FlashBank3DWeb",
    live_link: "https://flashbank3dweb.netlify.app/",
  },
  {
    name: "Car Rent Website",
    description:
      "Official Sacarya Rental Website demo. You can update cars info. If someone want to rent car you will get message from emailjs.",
    tags: [
      {
        name: "React",
        color: "text-[#3387be]",
      },
      {
        name: "Tailwind",
        color: "text-[#6da5bb]",
      },
      { 
        name: "Firebase",
        color: "text-[orange]",
      },
      { 
        name: "EmailJS",
        color: "text-[purple]",
      },
    ],
    image: sacaryawebdemo,
    source_code_link: "https://github.com/EmirSimsek52/sacaryawebdemo/tree/main",
    live_link: "https://sacaryademo.netlify.app/#AnaSayfa",
  },
  
];

