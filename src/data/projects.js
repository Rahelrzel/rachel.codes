import p1_1 from "../assets/project1(1).webp";
import p1_2 from "../assets/project1(2).webp";
import p1_3 from "../assets/project1(3).webp";
import p2_1 from "../assets/project2(1).webp";
import p2_2 from "../assets/project2(2).webp";
import p2_3 from "../assets/project2(3).webp";
import p3_1 from "../assets/project3(1).webp";
import p3_2 from "../assets/project3(2).webp";
import p3_3 from "../assets/project3(3).webp";

export const projects = [
  {
    id: "01",
    title: "Addis ሙዚቃ",
    shortDesc: "Song management system.",
    longDesc:
      "The Song Management System is a full-stack web application developed using the MERN stack that allows users to efficiently manage song information and view real-time music statistics. The system enables users to create, update, delete, and view songs while providing detailed insights such as total songs, artists, albums, genres, and distribution analytics.",
    img: p1_1,
    images: [p1_1, p1_2, p1_3],
    goal: "The main goal of this project was to strengthen my skills in full stack development by building a scalable and maintainable system that handles both data management and data visualization. I wanted to create a system that not only performs basic CRUD operations but also provides useful statistical insights that help users better understand the stored data. Another important objective was to practice writing clean, modular, and type-safe code using modern tools and best practices, while ensuring smooth communication between the frontend and backend.",
    problems:
      "This project solves that problem by combining data management with real-time analytics, allowing users to instantly see how songs are distributed across artists, albums, and genres.",
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Redux Saga",
      "Emotion",
      "Styled System",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
    ],

    features: [
      "Full CRUD functionality for managing songs",
      "Real-time statistics dashboard for songs, artists, albums, and genres",
      "Dynamic UI updates without page reload using Redux",
      "RESTful API integration",
      "Genre-based filtering",
      "Type-safe frontend with TypeScript",
      "Containerized backend with Docker",
    ],

    liveLink: "https://your-live-link.com",
  },
  {
    id: "02",
    title: "ArtConnect – Artist Commission Platform",
    shortDesc:
      "A full stack platform connecting artists with clients for artwork commissions.",

    longDesc:
      "ArtConnect is a full stack web and mobile platform designed to connect artists with clients who want custom artwork. The platform allows artists to showcase their work through galleries and enables clients to explore artists, request commissions, communicate in real time, and track project progress. I contributed as a frontend developer, building responsive and interactive user interfaces using React for the web application and Flutter for the mobile application. My work focused on creating user-friendly experiences, implementing core features, and ensuring seamless integration with the backend services.",

    img: p2_1,
    images: [p2_1, p2_2, p2_3],

    goal: "The goal of the project was to create a centralized digital platform where artists could showcase their work and clients could easily discover artists, request custom artwork, and track commission progress through both web and mobile applications.",

    problems:
      "Artists lacked a dedicated platform to showcase their portfolios and manage commission requests efficiently, while clients faced difficulty finding artists, communicating requirements, and tracking commission progress in a structured and secure way.",

    tech: ["React", "Flutter", "JavaScript", "Dart", "REST API", "HTML", "CSS"],

    features: [
      "Artist and client profile creation and management",
      "Artwork gallery with categorized artwork display",
      "Commission request system for custom artwork",
      "Real-time messaging between artists and clients",
      "Commission progress and milestone tracking",
      "Responsive web application and cross-platform mobile application",
      "Interactive and user-friendly interface",
    ],

    liveLink: "#",
  },

  {
    id: "03",
    title: "MIR-Hub – Medical Imaging and Research Platform",

    shortDesc: "A web-based medical imaging platform that improves diagnosis.",

    longDesc:
      "MIR-Hub (Medical Imaging and Research Hub) is a web-based platform developed to support medical imaging professionals in managing, diagnosing, and collaborating on medical imaging data more efficiently. The system provides a centralized environment where professionals can access patient imaging data, write diagnostic reports, collaborate with other specialists, and utilize AI-assisted diagnostic tools. I contributed as a Frontend Developer, where I built responsive and user-friendly interfaces using React.js and integrated frontend components with backend APIs. My work focused on creating intuitive dashboards, report management interfaces, and collaborative features that improved usability and workflow efficiency for medical professionals.",

    img: p3_1,
    images: [p3_1, p3_2, p3_3],

    goal: "The goal of the project was to develop an affordable and centralized medical imaging platform tailored for Ethiopian healthcare professionals to improve diagnostic accuracy, streamline medical image management, enable real-time collaboration, and support research activities.",

    problems:
      "Medical imaging professionals faced challenges due to the lack of centralized systems, reliance on expensive foreign software, inefficient manual workflows, and limited collaboration tools. These issues resulted in delays, increased risk of misdiagnosis, inefficient research processes, and difficulty managing patient imaging data effectively.",

    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
      "PostgreSQL",
      "Figma",
      "Git",
      "GitHub",
    ],

    features: [
      "Centralized dashboard for managing medical imaging data",
      "Medical report creation and management interface",
      "Real-time collaboration between medical professionals",
      "AI-assisted diagnostic support integration",
      "Secure patient data visualization",
      "Responsive and user-friendly interface",
      "Research data management and sharing tools",
    ],

    liveLink: "#",
  },
];
