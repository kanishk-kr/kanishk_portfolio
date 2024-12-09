import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++ Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "React.js,  Next.js, Tailwind CSS, HTML, CSS3, Git & GiHub",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "HTML5, CSS3 & JavaScript: Proficient in building semantic, responsive web pages and crafting interactive elements using the core web technologies.",
        "Modern Front-End Frameworks: Extensive experience with React.js, Vue.js, and Next.js, creating scalable and performant web applications.",
        "Responsive Web Design: Expertise in making websites mobile-first and adaptive to all screen sizes using Flexbox, Grid, and CSS frameworks like Bootstrap and Tailwind CSS.",
        "Version Control: Skilled in using Git and GitHub for efficient code management and collaboration."

      ],
    },
    {
      title: "Backend Developer",
      company_name: "Node.js, Express.js, MongoDB, PostgresSQL, JWT Authentication, DOCKER",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Server-Side Languages: Proficient in working with Node.js, Python, and PHP to build efficient and scalable back-end systems.",
"Database Management: Experienced in working with relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB) for efficient data storage and querying.",
"API Development: Skilled in designing and building RESTful APIs and GraphQL APIs for seamless communication between front-end and back-end systems.",
"Authentication & Authorization: Expertise in implementing secure user authentication and authorization mechanisms using JWT, OAuth, and session-based authentication.",
"Cloud Integration: Experience with cloud services like AWS, Google Cloud, and Azure for deploying and scaling applications.",
"Version Control: Proficient in using Git and GitHub for code versioning, collaboration, and maintaining code integrity across teams.",
"Containerization & Deployment: Familiar with Docker and CI/CD pipelines for automating deployment and ensuring smooth integration with production environments.",
"Web Security: Strong understanding of securing back-end services, including preventing SQL injection, XSS, CSRF, and other common vulnerabilities.",
"Performance Optimization: Knowledgeable in optimizing server performance, reducing response times, and handling high traffic loads."

      ],
    },
    {
      title: "C++ Programmer",
      company_name: "Data Structures, Debugging, Multi-Threading",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "C++ Programming: Proficient in developing high-performance applications, focusing on memory management and multi-threading", "Data Structures & Algorithms: Skilled in implementing and optimizing core data structures and algorithms", "Multi-threading & Concurrency: Experienced in designing and managing multi-threaded applications using C++", "Unit Testing & Debugging: Knowledgeable in using Google Test for unit testing and GDB for debugging", "Performance Optimization: Focused on optimizing C++ applications for efficiency and scalability"
      ],
    },
    {
      title: "Data Structures and Algorithms",
      company_name: "Data Structures Implementation and Efficent Algorithm Analysis",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Data Structures: Proficient in implementing and optimizing arrays, linked lists, stacks, queues, trees, and graphs", "Algorithms: Skilled in designing and optimizing searching, sorting, dynamic programming, and greedy algorithms", "Time and Space Complexity: Strong understanding of Big-O notation for analyzing algorithm efficiency", "Graph Algorithms: Experienced with BFS, DFS, Dijkstra's, and other graph traversal techniques", "Advanced Data Structures: Familiar with heaps, hash tables, tries, and balanced trees (AVL, Red-Black)"
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Paytm",
      description:
        "Built a fully functional Paytm clone, replicating key features such as mobile wallet, payment gateway, and seamless transaction handling. The application includes user authentication, balance management, and secure money transfer options.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kanishk-kr",
    },
    {
      name: "Medium-Blogging Site",
      description:
        "Developed a fully functional blogging platform inspired by Medium, enabling users to create, publish, and share articles seamlessly. The platform features a clean, user-friendly interface with rich text formatting, tagging, and category management.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/kanishk-kr",
    },
    {
      name: "Descord",
      description:
        "Developed a fully functional Social Media Site to chat, make groups, and do video and audio calls. This app have all the features which discord provides from creation of servers and channels, admin and moderator options, Chat and file sharing option, proper authentication.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "accertinityUI",
          color: "green-text-gradient",
        },
        {
          name: "emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/kanishk-kr",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };