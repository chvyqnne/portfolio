export type Experience = {
    year: string;
    title: string;
    company: string;
    timeline: string;
    skills: string[];
    responsibilities: string[];
}

export const experience: Experience[] = [
    {
        year: "2025",
        title: "Web Application Developer",
        company: "Independent Project Analysis",
        timeline: "01/2025 - Present",
        skills: ["React", "Django", "Tailwind CSS", "PostgreSQL"],
        responsibilities: [
            "Built and maintained full-stack applications in a Linux environment",
            "Collaborated with cross-functional teams in Agile workflows",
            "Implemented responsive design and clean UI/UX",
        ],
    },
    {
        year: "2023",
        title: "Data Analyst",
        company: "Innovative Driven",
        timeline: "08/2023 - 01/2025",
        skills: ["Go", "SQLite", "ServiceNow", "Power Apps"],
        responsibilities: [
            "Developed concurrency-based data tools with Goroutines",
            "Led dashboard maintenance and automation in Power Apps",
            "Performed end-to-end eDiscovery data processing",
        ],
    },
    {
        year: "2022",
        title: "Frontend Developer Intern",
        company: "Federal Reserve Board",
        timeline: "08/2021 - 08/2023",
        skills: ["AngularJS", "SharePoint", "Accessibility", "Agile"],
        responsibilities: [
            "Designed and built responsive UI components",
            "Ensured accessibility and performance standards",
            "Participated in sprints and QA testing",
        ],
    },
    {
        year: "2021",
        title: "Software Engineer Intern",
        company: "Jordan & Cara Odo Foundation",
        timeline: "06/2020 - 08/2020",
        skills: ["Python", "AWS", "Docker", "Golang"],
        responsibilities: [
            "Built COVID-19 resource tools and search features",
            "Used Docker and Git for streamlined dev workflows",
            "Implemented cloud-based data aggregation",
        ],
    },
    {
        year: "2020",
        title: "UX Design Intern",
        company: "Placeholder Company",
        timeline: "06/2019 - 08/2019",
        skills: ["Figma", "Prototyping", "Wireframing"],
        responsibilities: [
            "Designed high-fidelity wireframes for internal tools",
            "Collaborated with developers on UI polish",
            "Conducted user research interviews",
        ],
    },
];