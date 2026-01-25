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
export { projects, skills, experience };
