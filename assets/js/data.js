const DATA = {
  name: "Sumit Kumar Yadav",
  title: "Full Stack Developer with DevOps Knowledge",
  resume: "https://drive.google.com/file/d/1ZB1nM3pygobb8qQNHaD1hf-MEaWN0BC_/view?usp=drivesdk",
  email: "sy7985494155@gmail.com",
  phone: "+91 7985494155",
  github: "https://github.com/sumit9235",
  linkedin: "https://www.linkedin.com/in/sumit-yadav-3200b9244/",
  stats: [
    { value: "2+", label: "Major business projects" },
    { value: "20+", label: "Modern technologies" },
    { value: "1 mo", label: "Enricher build cycle" }
  ],
  stackPhrases: ["React + Tailwind + TypeScript", "Go + PostgreSQL + Redis", "PHP + MongoDB + jQuery", "Docker + AWS + Apache + Caddy", "RAG + Qdrant VectorDB"],
  about: [
    { icon: "fa-solid fa-layer-group", title: "Full-stack execution", text: "I build product flows across UI, APIs, databases, exports, dashboards, and business workflows." },
    { icon: "fa-solid fa-database", title: "Data-heavy apps", text: "Experienced with MongoDB, PostgreSQL, Redis, Qdrant vector storage, caching, and enrichment workflows." },
    { icon: "fa-solid fa-cloud-arrow-up", title: "Deployment mindset", text: "Comfortable with Docker, AWS, Apache, Caddy, Git workflows, and production-oriented delivery." }
  ],
  skills: [
    { name: "HTML", category: "Frontend", icon: "fa-brands fa-html5" },
    { name: "CSS", category: "Frontend", icon: "fa-brands fa-css3-alt" },
    { name: "React.js", category: "Frontend", icon: "fa-brands fa-react" },
    { name: "jQuery", category: "Frontend", icon: "fa-solid fa-code" },
    { name: "Bootstrap", category: "Frontend", icon: "fa-brands fa-bootstrap" },
    { name: "Tailwind", category: "Frontend", icon: "fa-solid fa-wind" },
    { name: "Vite", category: "Frontend", icon: "fa-solid fa-bolt" },
    { name: "JavaScript", category: "Backend", icon: "fa-brands fa-js" },
    { name: "Go", category: "Backend", icon: "fa-solid fa-terminal" },
    { name: "PHP", category: "Backend", icon: "fa-brands fa-php" },
    { name: "Node.js", category: "Backend", icon: "fa-brands fa-node-js" },
    { name: "Express.js", category: "Backend", icon: "fa-solid fa-server" },
    { name: "MongoDB", category: "Database", icon: "fa-solid fa-leaf" },
    { name: "PostgreSQL", category: "Database", icon: "fa-solid fa-database" },
    { name: "Redis", category: "Database", icon: "fa-solid fa-memory" },
    { name: "Qdrant VectorDB", category: "Database", icon: "fa-solid fa-vector-square" },
    { name: "Apache", category: "Cloud/DevOps", icon: "fa-solid fa-feather" },
    { name: "Caddy", category: "Cloud/DevOps", icon: "fa-solid fa-shield-halved" },
    { name: "AWS", category: "Cloud/DevOps", icon: "fa-brands fa-aws" },
    { name: "Docker", category: "Cloud/DevOps", icon: "fa-brands fa-docker" },
    { name: "GitHub", category: "Tools", icon: "fa-brands fa-github" },
    { name: "Bitbucket", category: "Tools", icon: "fa-brands fa-bitbucket" },
    { name: "GitLab", category: "Tools", icon: "fa-brands fa-gitlab" },
    { name: "VS Code", category: "Tools", icon: "fa-solid fa-code" },
    { name: "Jira", category: "Tools", icon: "fa-brands fa-jira" }
  ],
  projects: [
    {
      name: "QRCodeChimp.com",
      status: "Live business product",
      live: "https://www.qrcodechimp.com",
      code: "Private business repository",
      codeLink: "",
      image: "./assets/img/qrcodechimp/qrcodechimp_dashboard.png",
      images: [
        "./assets/img/qrcodechimp/qrcodechimp_dashboard.png",
        "./assets/img/qrcodechimp/qrcodechimp_solutions.png"
      ],
      imageLink: "https://www.qrcodechimp.com",
      description: "Worked on QRCodeChimp, a production QR code and digital business card platform used for creating, managing, customizing, and tracking QR campaigns for individuals and businesses.",
      highlights: ["Dynamic QR code workflows", "Digital business cards", "Customization and templates", "Analytics-oriented business usage", "OpenAI-assisted feature integration"],
      tech: ["PHP", "MongoDB", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "OpenAI"]
    },
    {
      name: "Enricher",
      status: "Built under 1 month • Under development",
      live: "#",
      code: "Private business repository",
      codeLink: "",
      image: "./assets/img/enricher/dashboard.png",
      images: [
        "./assets/img/enricher/dashboard.png",
        "./assets/img/enricher/peoples_enrich.png",
        "./assets/img/enricher/company_history.png"
      ],
      imageLink: "",
      description: "Built a full-stack B2B data enrichment platform for company and contact search, enrichment, bulk upload, saved lists, history tracking, verification, and export-ready workflows.",
      highlights: ["Company/contact enrichment", "Apollo-based workflows", "CSV/Excel bulk ingestion", "Saved lists and history", "Email verification", "RAG/vector storage architecture", "PostgreSQL caching logic"],
      tech: ["React", "TypeScript", "Tailwind CSS", "Go", "PostgreSQL", "RAG", "VectorDB", "Qdrant"]
    }
  ],
  commerceProjects: [
    {
      name: "WoW.com",
      status: "Individual project • 5 days",
      live: "https://sage-biscotti-b2b0b5.netlify.app/",
      code: "GitHub repository",
      codeLink: "https://github.com/sumit9235/WoW.com",
      image: "./assets/img/wow/wow_dashboard.png",
      images: [
        "./assets/img/wow/wow_dashboard.png",
        "./assets/img/wow/wow_login.png",
        "./assets/img/wow/wow_checkout.png"
      ],
      imageLink: "",
      description: "WOW.com is a fashion and lifestyle based e-commerce platform built as a marketplace-style clone inspired by eBay patterns.",
      highlights: ["Sign-in and register", "Fashion and electronics catalog", "Add to cart", "Sorting and filtering", "Admin add/update/delete product"],
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express", "JWT", "Bcrypt"]
    },
    {
      name: "Teddy Bear",
      status: "Collaborative project • 5 days",
      live: "https://resplendent-cucurucho-20b16a.netlify.app/",
      code: "GitHub repository",
      codeLink: "https://github.com/sumit9235/Teddy-Beer",
      image: "./assets/img/teddy_bear/homepage.png",
      images: [
        "./assets/img/teddy_bear/homepage.png",
        "./assets/img/teddy_bear/mens_clothings.png",
        "./assets/img/teddy_bear/womens_clothing.png",
        "./assets/img/teddy_bear/checkout_page.png",
        "./assets/img/teddy_bear/teddy_bear_login.png"
      ],
      imageLink: "",
      description: "Teddy Bear is an e-commerce platform for clothing and fashion-related products with a lightweight shopping flow.",
      highlights: ["Sign-in and register", "Add to cart", "Searching", "Filtering", "Team-based collaboration"],
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ],
  utilityProjects: [
    {
      name: "Budget Buddy",
      status: "Collaborative project • 5 days",
      live: "https://beautiful-bonbon-06d31f.netlify.app/",
      code: "GitHub repository",
      codeLink: "https://github.com/sumit9235/Buget-Buddy",
      image: "./assets/img/buget_buddy/buget_buddy_homepage.png",
      images: [
        "./assets/img/buget_buddy/buget_buddy_homepage.png",
        "./assets/img/buget_buddy/buget_buddy_login.png",
        "./assets/img/buget_buddy/buget_buddy_crypto.png"
      ],
      imageLink: "",
      description: "BudgetBuddy is an expense tracker that helps users manage and monitor budgets with minimal effort.",
      highlights: ["Sign-in and register", "Add budget", "Multiple budget entries", "Remove budget entries", "Simple tracking workflow"],
      tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Socket.io"]
    }
  ]
};
