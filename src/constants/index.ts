const projects = [
  {
    title: "Astronomer Simulator",
    description:
      "A full-stack e-commerce solution with cart and payment integration",
    tech: ["React", "TailwindCss", "MongoDB", "Stripe"],
    image: "./astro.png",
    fullDescription:
      "A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and an admin dashboard for inventory control.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    fullDescription:
      "A real-time collaborative task management application. Team members can create, assign, and track tasks with live updates. Includes drag-and-drop functionality, deadline reminders, and progress tracking dashboards.",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example",
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
