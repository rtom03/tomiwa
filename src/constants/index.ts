import type { Place } from "./_index";

const projects = [
  {
    title: "Astronomer Simulator",
    description:
      "Experience the magnificent dance of celestial bodies in real-time",
    tech: ["React(Typescript)", "TailwindCss", "React Tricks", "Classbased"],
    image: "./astro.png",
    fullDescription:
      "Experience the magnificent dance of celestial bodies in real-time. Watch the Moon orbit Earth, Earth orbit the Sun, and the Sun orbit the Galactic Center—all in one mesmerizing visualization. With adjustable speed controls from slow-motion to ludicrous speeds, customizable motion trails, and interactive controls, explore millions of years of cosmic motion in seconds. Perfect for space enthusiasts, students, and anyone curious about our place in the universe.",
    liveLink: "https://astonomical-simulator.vercel.app/",
    githubLink: "https://github.com/rtom03/astonomical-simulator",
  },
  {
    title: "Chat App",
    description: "Because carrier pigeons were too slow and emails too formal",
    tech: [
      "React",
      "NodeJs",
      "Tailwind CSS",
      "MongoDb",
      "Socket.io",
      "Daisy UI",
    ],
    image: "chatty.png",
    fullDescription:
      "A real-time chat app built for when Slack feels too corporate and WhatsApp Web keeps logging you out. Features instant messaging powered by Socket.io (because setTimeout wasn't cutting it), MongoDB for storing all those 'quick sync?' messages, and a UI so smooth your PM might actually respond. Includes typing indicators to fuel your anxiety, message persistence so your bad jokes live forever, and React hooks because class components are so 2019. Warning: May cause excessive emoji usage and spontaneous GIF wars.",
    liveLink: "https://chimeln.vercel.app/login",
    githubLink: "https://github.com/rtom03/MERN_CA",
  },
];
const experience = [
  {
    title: "Senior Fullstack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Led development of multiple enterprise applications, mentored junior developers, and implemented CI/CD pipelines.",
  },
  {
    title: "Fullstack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description:
      "Built scalable web applications using React and Node.js, collaborated with cross-functional teams.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Studios",
    period: "2018 - 2020",
    description:
      "Developed responsive user interfaces and improved application performance by 40%.",
  },
];
const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "useQuery",
      "Redux- Thunk/Saga",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js (Express)",
      "NestJs",
      ".Net",
      "Django",
      "FastAPI",
      "PostgreSQL (prisma)",
      "Mysql",
      "MongoDb (mongoose)",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD",
      "Jenkins",
      "Micro-Service",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    category: "Other",
    items: ["REST API", "GraphQL", "WebSockets", "Chrome API", "WebHooks"],
  },
];

const initialTravelPlan: { [key: number]: Place } = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 42, 46],
  },
  1: {
    id: 1,
    title: "Earth",
    childIds: [2, 10, 19, 26, 34],
  },
  2: {
    id: 2,
    title: "Africa",
    childIds: [3, 4, 5, 6, 7, 8, 9],
  },
  3: {
    id: 3,
    title: "Botswana",
    childIds: [],
  },
  4: {
    id: 4,
    title: "Egypt",
    childIds: [],
  },
  5: {
    id: 5,
    title: "Kenya",
    childIds: [],
  },
  6: {
    id: 6,
    title: "Madagascar",
    childIds: [],
  },
  7: {
    id: 7,
    title: "Morocco",
    childIds: [],
  },
  8: {
    id: 8,
    title: "Nigeria",
    childIds: [],
  },
  9: {
    id: 9,
    title: "South Africa",
    childIds: [],
  },
  10: {
    id: 10,
    title: "Americas",
    childIds: [11, 12, 13, 14, 15, 16, 17, 18],
  },
  11: {
    id: 11,
    title: "Argentina",
    childIds: [],
  },
  12: {
    id: 12,
    title: "Brazil",
    childIds: [],
  },
  13: {
    id: 13,
    title: "Barbados",
    childIds: [],
  },
  14: {
    id: 14,
    title: "Canada",
    childIds: [],
  },
  15: {
    id: 15,
    title: "Jamaica",
    childIds: [],
  },
  16: {
    id: 16,
    title: "Mexico",
    childIds: [],
  },
  17: {
    id: 17,
    title: "Trinidad and Tobago",
    childIds: [],
  },
  18: {
    id: 18,
    title: "Venezuela",
    childIds: [],
  },
  19: {
    id: 19,
    title: "Asia",
    childIds: [20, 21, 22, 23, 24, 25],
  },
  20: {
    id: 20,
    title: "China",
    childIds: [],
  },
  21: {
    id: 21,
    title: "India",
    childIds: [],
  },
  22: {
    id: 22,
    title: "Singapore",
    childIds: [],
  },
  23: {
    id: 23,
    title: "South Korea",
    childIds: [],
  },
  24: {
    id: 24,
    title: "Thailand",
    childIds: [],
  },
  25: {
    id: 25,
    title: "Vietnam",
    childIds: [],
  },
  26: {
    id: 26,
    title: "Europe",
    childIds: [27, 28, 29, 30, 31, 32, 33],
  },
  27: {
    id: 27,
    title: "Croatia",
    childIds: [],
  },
  28: {
    id: 28,
    title: "France",
    childIds: [],
  },
  29: {
    id: 29,
    title: "Germany",
    childIds: [],
  },
  30: {
    id: 30,
    title: "Italy",
    childIds: [],
  },
  31: {
    id: 31,
    title: "Portugal",
    childIds: [],
  },
  32: {
    id: 32,
    title: "Spain",
    childIds: [],
  },
  33: {
    id: 33,
    title: "Turkey",
    childIds: [],
  },
  34: {
    id: 34,
    title: "Oceania",
    childIds: [35, 36, 37, 38, 39, 40, 41],
  },
  35: {
    id: 35,
    title: "Australia",
    childIds: [],
  },
  36: {
    id: 36,
    title: "Bora Bora (French Polynesia)",
    childIds: [],
  },
  37: {
    id: 37,
    title: "Easter Island (Chile)",
    childIds: [],
  },
  38: {
    id: 38,
    title: "Fiji",
    childIds: [],
  },
  39: {
    id: 39,
    title: "Hawaii (the USA)",
    childIds: [],
  },
  40: {
    id: 40,
    title: "New Zealand",
    childIds: [],
  },
  41: {
    id: 41,
    title: "Vanuatu",
    childIds: [],
  },
  42: {
    id: 42,
    title: "Moon",
    childIds: [43, 44, 45],
  },
  43: {
    id: 43,
    title: "Rheita",
    childIds: [],
  },
  44: {
    id: 44,
    title: "Piccolomini",
    childIds: [],
  },
  45: {
    id: 45,
    title: "Tycho",
    childIds: [],
  },
  46: {
    id: 46,
    title: "Mars",
    childIds: [47, 48],
  },
  47: {
    id: 47,
    title: "Corn Town",
    childIds: [],
  },
  48: {
    id: 48,
    title: "Green Hill",
    childIds: [],
  },
};
export { projects, skills, experience, initialTravelPlan };
