const resume = {
  personalDetails: {
    fullName: "Ethan Carter",
    email: "ethan.carter@example.com",
    phone: "+1 (555) 248-9137",
    address: "Austin, Texas, USA",
    linkedin: "https://linkedin.com/in/ethancarter",
    github: "https://github.com/ethancarter"
  },

  selfDescription: "",
  education: [],
  experience: [],
  skills: {
    technical: [],
    soft: []
  },
  certifications: [],
  projects: [],
  languages: [],
  interests: [],
  achievements: [],
  references: {
    availableOnRequest: true
  }
};

const selfDescription = `
I am a Software Engineer with over four years of experience developing scalable web applications and backend services. Throughout my career, I have worked with cross-functional teams to design, build, and maintain software that improves business processes and enhances user experience. I enjoy solving complex technical problems, writing clean and maintainable code, and continuously learning new technologies.

My experience includes frontend development using React, backend development with Node.js and Express, database design using PostgreSQL and MongoDB, REST API development, cloud deployment on AWS, and version control with Git. I have participated in Agile development processes, conducted code reviews, mentored junior developers, and contributed to architectural decisions for enterprise applications.

I am known for being dependable, detail-oriented, and collaborative. I value writing high-quality software that is secure, efficient, and easy to maintain. My goal is to contribute to innovative projects while continuing to grow professionally and expand my expertise in cloud computing, distributed systems, and modern software engineering practices.
`;

const jobDescription = `
Position: Full Stack Software Engineer

Company:
NovaTech Solutions is a rapidly growing technology company that develops cloud-based business management platforms for organizations across healthcare, finance, logistics, and retail industries. We are looking for an experienced Full Stack Software Engineer to join our engineering team and help build scalable, secure, and high-performance web applications.

Job Summary:
The Full Stack Software Engineer will be responsible for designing, developing, testing, deploying, and maintaining modern web applications. The ideal candidate should have strong frontend and backend development experience, excellent problem-solving skills, and the ability to collaborate with cross-functional teams.

Key Responsibilities:

• Design, develop, and maintain scalable web applications.
• Build reusable frontend components using React.
• Develop RESTful APIs using Node.js and Express.
• Design and optimize PostgreSQL and MongoDB databases.
• Integrate third-party APIs and authentication services.
• Participate in software architecture discussions.
• Write unit and integration tests.
• Debug production issues and optimize application performance.
• Conduct code reviews and maintain coding standards.
• Collaborate with designers, QA engineers, DevOps engineers, and product managers.
• Participate in Agile ceremonies including sprint planning, daily standups, reviews, and retrospectives.
• Document technical implementations and software architecture.
• Monitor applications and ensure system reliability.
• Implement security best practices for web applications.
• Continuously research and adopt modern development practices.

Required Qualifications:

• Bachelor's degree in Computer Science, Information Technology, or related field.
• 3+ years of professional software development experience.
• Strong knowledge of JavaScript and TypeScript.
• Experience with React.js.
• Experience with Node.js and Express.js.
• Strong understanding of HTML5 and CSS3.
• Experience with REST APIs.
• Experience using PostgreSQL and MongoDB.
• Familiarity with Docker and containerized applications.
• Knowledge of Git and GitHub workflows.
• Understanding of software design patterns.
• Strong debugging and analytical skills.
• Excellent communication and teamwork abilities.

Preferred Qualifications:

• Experience with AWS cloud services.
• Experience using CI/CD pipelines.
• Knowledge of Kubernetes.
• Experience with GraphQL.
• Familiarity with Redis.
• Experience building microservices.
• Understanding of system scalability and performance optimization.

Benefits:

• Competitive salary
• Annual performance bonus
• Hybrid work environment
• Health, dental, and vision insurance
• Paid vacation and holidays
• Learning and certification reimbursement
• Modern equipment and development tools
• Career growth opportunities
• Collaborative engineering culture
`;

// Assign data to resume
resume.selfDescription = selfDescription;

resume.education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Texas",
    location: "Austin, Texas",
    graduationYear: 2021,
    gpa: "3.8/4.0"
  }
];

resume.experience = [
  {
    company: "BrightTech Solutions",
    position: "Software Engineer",
    duration: "July 2022 - Present",
    responsibilities: [
      "Developed scalable React applications for enterprise clients.",
      "Designed REST APIs using Node.js and Express.",
      "Improved API response times by 35%.",
      "Integrated third-party payment gateways.",
      "Performed code reviews and mentored junior developers.",
      "Collaborated with QA and DevOps teams during releases."
    ]
  },
  {
    company: "CodeWorks Inc.",
    position: "Junior Full Stack Developer",
    duration: "June 2021 - June 2022",
    responsibilities: [
      "Built responsive user interfaces using React.",
      "Created backend APIs using Express.",
      "Maintained PostgreSQL databases.",
      "Fixed production bugs and implemented new features.",
      "Participated in Agile development."
    ]
  }
];

resume.skills = {
  technical: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "REST APIs",
    "Jest",
    "CI/CD"
  ],
  soft: [
    "Communication",
    "Leadership",
    "Problem Solving",
    "Critical Thinking",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Mentoring"
  ]
};

resume.certifications = [
  "AWS Certified Cloud Practitioner",
  "Meta Front-End Developer Professional Certificate",
  "MongoDB Developer Certification"
];

resume.projects = [
  {
    title: "Task Management Platform",
    description:
      "Built a full-stack project management application using React, Node.js, Express, MongoDB, and JWT authentication.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT"
    ]
  },
  {
    title: "E-Commerce Store",
    description:
      "Developed an online shopping platform with payment integration, inventory management, and admin dashboard.",
    technologies: [
      "React",
      "Express",
      "Stripe API",
      "PostgreSQL"
    ]
  }
];

resume.languages = [
  "English (Native)",
  "Spanish (Professional)"
];

resume.interests = [
  "Open Source Development",
  "Cloud Computing",
  "Artificial Intelligence",
  "Hiking",
  "Photography"
];

resume.achievements = [
  "Employee of the Quarter - BrightTech Solutions (2024)",
  "Reduced production bugs by 30% through improved testing practices.",
  "Successfully delivered 12+ production software releases."
];

module.exports = {resume, selfDescription, jobDescription};