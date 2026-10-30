export const portfolioData = {
  personal: {
    name: "Kartikye Saini",
    title: "Full-Stack Developer & Software Engineer",
    subtitle: "Architecting scalable web applications, real-time distributed systems, and modern AI-powered experiences.",
    location: "Punjab / Uttar Pradesh, India",
    email: "kartikyesaini@gmail.com",
    phone: "+91 7906913880",
    github: "https://github.com/kartikye99",
    githubUsername: "kartikye99",
    linkedin: "https://www.linkedin.com/in/kartikye-saini",
    linkedinUsername: "kartikye-saini",
    status: "Available for Full-time Roles & Internships",
    bio: "Passionate Computer Science undergraduate at Lovely Professional University (CGPA 7.94) with extensive hands-on expertise in full-stack engineering, real-time WebSockets, cloud architecture, and competitive algorithm design (400+ LeetCode problems solved, 5★ HackerRank). Experienced in turning complex engineering problems into silky-smooth, intuitive user experiences."
  },

  stats: [
    { label: "DSA Problems Solved", value: "400+", sub: "LeetCode & Neo Colab", color: "from-amber-400 to-orange-500" },
    { label: "HackerRank Ratings", value: "5 ★", sub: "C++ & SQL Certified", color: "from-emerald-400 to-teal-500" },
    { label: "Academic CGPA", value: "7.94", sub: "B.Tech CSE @ LPU", color: "from-indigo-400 to-blue-500" },
    { label: "Simulated Concurrents", value: "50+", sub: "Socket.io Stress Validated", color: "from-cyan-400 to-sky-500" }
  ],

  projects: [
    {
      id: "roomify",
      title: "Roomify – AI 3D Room Design Web App",
      category: "AI & 3D Web Architecture",
      featured: true,
      timeline: "Jan 2026",
      tagline: "Transforms 2D architectural room sketches into structured 3D conceptual environments in real-time.",
      description: "Architected an AI-powered web application that converts 2D room layouts into structured 3D architectural concepts, automating layout visualization and drastically reducing manual design conceptualization time.",
      highlights: [
        "Engineered responsive React.js interface with drag-and-drop image uploads, dynamic state management, and asynchronous request handling.",
        "Developed automated AI prompt workflows and client-side image processing pipelines to convert layout inputs into structured architectural visualization.",
        "Validated system scalability by successfully processing 100+ layout submissions during intensive testing."
      ],
      technologies: ["React.js", "JavaScript", "AI Integration", "Serverless Workers", "Key-Value Storage", "Tailwind CSS"],
      githubUrl: "https://github.com/kartikye99",
      liveUrl: "https://github.com/kartikye99",
      demoType: "3d-room"
    },
    {
      id: "chat-app",
      title: "Full-Stack Real-Time Chat Platform",
      category: "Distributed WebSockets & Cloud",
      featured: true,
      timeline: "Feb 2026",
      tagline: "Low-latency bidirectional messaging system with JWT auth and dynamic multi-room orchestration.",
      description: "Built a scalable full-stack real-time chat platform supporting secure user authentication, instant messaging, and dynamic conversation management for multiple users.",
      highlights: [
        "Designed WebSocket-based messaging using Socket.io to enable low-latency communication and synchronized message delivery across active user sessions.",
        "Developed modular RESTful APIs with Node.js and Express.js for authentication, message routing, and request handling.",
        "Validated application reliability through 50+ simulated multi-user messaging interactions with zero message drop."
      ],
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Socket.io", "RESTful APIs"],
      githubUrl: "https://github.com/kartikye99",
      liveUrl: "https://github.com/kartikye99",
      demoType: "interactive-chat"
    },
    {
      id: "dsa-engine",
      title: "Algorithmic Problem Solving & DSA Lab",
      category: "Algorithms & Competitive Programming",
      featured: false,
      timeline: "2024 – 2026",
      tagline: "400+ algorithmic solutions covering Dynamic Programming, Trees, Graphs, and Advanced Memory Models in C++.",
      description: "An extensive suite of performance-optimized algorithmic solutions and interactive algorithm visualizations implementing core computer science fundamentals.",
      highlights: [
        "Solved 400+ problems on LeetCode with high runtime efficiency.",
        "5-star badge in C++ & 5-star badge in SQL on HackerRank.",
        "In-depth mastery of Graph algorithms (Dijkstra, BFS/DFS), Disjoint Set Union, and dynamic programming state transitions."
      ],
      technologies: ["C++", "Java", "Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming"],
      githubUrl: "https://github.com/kartikye99",
      liveUrl: "https://leetcode.com",
      demoType: "algo-runner"
    },
    {
      id: "uiux-prototype",
      title: "Think Design UI/UX Design System",
      category: "Design Thinking & Prototyping",
      featured: false,
      timeline: "July 2025",
      tagline: "User-centered wireframes, high-fidelity prototypes, and design heuristics in Figma.",
      description: "Created comprehensive high-fidelity UI systems, interactive wireframes, and design thinking prototypes as part of LPU Summer Training.",
      highlights: [
        "Practiced core UI/UX principles, human-computer interaction, visual hierarchies, and modern typography.",
        "Crafted accessible component libraries and end-to-end user navigation flows in Figma.",
        "Conducted heuristic evaluations and usability testing for web applications."
      ],
      technologies: ["Figma", "Design Thinking", "UI/UX Architecture", "Wireframing", "Interactive Prototyping"],
      githubUrl: "https://github.com/kartikye99",
      liveUrl: "https://www.figma.com",
      demoType: "figma-preview"
    }
  ],

  skills: {
    languages: [
      { name: "C++", level: 92, badge: "Advanced", desc: "STL, Memory Management, DSA & Competitive Coding" },
      { name: "Java", level: 85, badge: "Proficient", desc: "OOP, Neo Colab Certified, Multithreading Fundamentals" },
      { name: "JavaScript (ES6+)", level: 90, badge: "Advanced", desc: "Async/Await, Closures, DOM, Modern ES Next" },
      { name: "SQL", level: 88, badge: "5 Stars", desc: "Complex Joins, Indexing, Schema Optimization" }
    ],
    frameworks: [
      { name: "React.js", level: 92, badge: "Primary", desc: "Hooks, Context API, Virtual DOM, Component LifeCycle" },
      { name: "Node.js & Express", level: 88, badge: "Backend", desc: "RESTful Endpoints, Middleware, Auth Pipelines" },
      { name: "Tailwind CSS", level: 95, badge: "Styling", desc: "Utility-first, Responsive UI, Micro-animations" },
      { name: "HTML5 & CSS3", level: 95, badge: "Foundations", desc: "Semantic Web, Flexbox, CSS Grid, Canvas" },
      { name: "Socket.io", level: 86, badge: "Real-time", desc: "Bidirectional Events, Room Broadcasting, WebSockets" }
    ],
    databasesCloud: [
      { name: "MongoDB Atlas", level: 85, badge: "NoSQL", desc: "Document Aggregations, Mongoose ODM, Atlas Clusters" },
      { name: "MySQL", level: 84, badge: "RDBMS", desc: "Relational Modeling, Foreign Keys, ACID transactions" },
      { name: "Cloud Computing", level: 80, badge: "NPTEL Certified", desc: "Cloud Architecture, Virtualization, Scalability" },
      { name: "Serverless & KV Storage", level: 82, badge: "Modern Web", desc: "Edge Workers, Low-Latency Key-Value Caching" }
    ],
    toolsDesign: [
      { name: "Git & GitHub", level: 90, badge: "Version Control", desc: "Branching strategies, pull requests, CI/CD basics" },
      { name: "Figma", level: 88, badge: "UI/UX", desc: "High-fidelity wireframing, Design Systems, Prototypes" },
      { name: "Visual Studio Code", level: 95, badge: "Environment", desc: "Extensions, Debugging, Custom Productivity Workflows" },
      { name: "Postman", level: 85, badge: "API Testing", desc: "Endpoint validation, API Documentation & Mocking" }
    ],
    softSkills: [
      "Algorithmic Problem-Solving",
      "Analytical & Critical Thinking",
      "High Adaptability to Emerging Tech",
      "Clear Technical Communication",
      "User-Centric Design Thinking"
    ]
  },

  achievements: [
    {
      title: "400+ LeetCode DSA Solved",
      platform: "LeetCode",
      date: "Feb 2026",
      desc: "Solved 400+ questions across Arrays, Trees, Dynamic Programming, Graphs, Backtracking, and Binary Search.",
      highlight: "400+ Solved",
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30"
    },
    {
      title: "5 Stars in C++",
      platform: "HackerRank",
      date: "Jan 2026",
      desc: "Top tier mastery badge in C++ language fundamentals, STL containers, and algorithms.",
      highlight: "5 ★ C++",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30"
    },
    {
      title: "5 Stars in SQL",
      platform: "HackerRank",
      date: "Jan 2026",
      desc: "Gold level proficiency in relational querying, aggregations, subqueries, and window functions.",
      highlight: "5 ★ SQL",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30"
    },
    {
      title: "4 Stars in Python",
      platform: "HackerRank",
      date: "Jan 2026",
      desc: "Strong foundation in Python scripting, functional programming paradigms, and data manipulation.",
      highlight: "4 ★ Python",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30"
    }
  ],

  certifications: [
    {
      title: "Cloud Computing Certification",
      issuer: "NPTEL",
      date: "November 2025",
      badge: "Cloud Architecture",
      desc: "In-depth understanding of distributed computing, virtualization, cloud service models (IaaS/PaaS/SaaS), and elasticity."
    },
    {
      title: "Java Programming",
      issuer: "Neo Colab",
      date: "May 2025",
      badge: "OOP & Core Java",
      desc: "Validated proficiency in Object-Oriented Programming, Exception Handling, Collections Framework, and Java I/O."
    },
    {
      title: "Data Structures & Algorithm (C++)",
      issuer: "Neo Colab",
      date: "December 2024",
      badge: "Algorithms Master",
      desc: "Excellence in computational complexity analysis, asymptotic bounds, recursive algorithms, and memory data structures."
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "October 2023",
      badge: "Frontend Certified",
      desc: "Certified mastery of modern responsive principles, CSS Flexbox, Grid, media queries, and accessible web standards."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology – Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      timeline: "August 2023 – Present",
      grade: "CGPA: 7.94",
      status: "Current",
      details: [
        "Core coursework: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, Computer Networks.",
        "Active contributor to software engineering workshops and competitive coding groups."
      ]
    },
    {
      degree: "Intermediate (Class XII) – PCM",
      institution: "Asha Modern International",
      location: "U.P, Saharanpur",
      timeline: "March 2022 – May 2023",
      grade: "Percentage: 75%",
      status: "Completed",
      details: ["Physics, Chemistry, Mathematics with strong analytical and scientific foundations."]
    },
    {
      degree: "Matriculation (Class X)",
      institution: "Asha Modern International",
      location: "U.P, Saharanpur",
      timeline: "March 2020 – May 2021",
      grade: "Percentage: 75%",
      status: "Completed",
      details: ["Comprehensive secondary education in Science, Mathematics, and Computer Basics."]
    }
  ],

  training: [
    {
      title: "Think Design Prototype - Summer Training on Design Thinking & Figma",
      provider: "Lovely Professional University (LPU)",
      timeline: "July 2025",
      skillsGained: ["UI/UX Principles", "Figma Prototyping", "Wireframing", "Typography & Color Theory", "Collaborative Design"],
      description: "Hands-on immersion strengthening design thinking and problem-solving skills. Crafted wireframes and high-fidelity UI screens for responsive web applications using Figma."
    }
  ]
};
