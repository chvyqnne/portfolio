export type ProjectSection = {
    title: string;
    type: "text" | "image" | "code";
    content: string;
};

export type Project = {
    id: number;
    title: string;
    description: string;
    timeline: string;
    role: string;
    skills: string[];
    image: string;
    link: string;
    linkLabel: string;
    sections?: ProjectSection[];
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timeline: 'MM/YYYY - MM/YYYY',
        role: "Developer",
        skills: ["React", "Figma", "TypeScript"],
        image: "",
        link: "#",
        linkLabel: 'link',
        sections: [
        {
            title: "Stats",
            type: "text",
            content: `- 90% engagement increase\n- 40% fewer support tickets`
        },
        {
            title: "UI Diagram",
            type: "image",
            content: "/assets/images/flowchart.png"
        },
        {
            title: "Sample Code",
            type: "code",
            content: `const merged = accounts.flatMap(group => group.accounts);`
        }
    ]
    },
    {
        id: 2,
        title: "Pantry Pal",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timeline: 'MM/YYYY - MM/YYYY',
        role: "Developer",
        skills: ["React", "Typescript"],
        image: "",
        link: "#",
        linkLabel: 'link',
    },
    {
        id: 3,
        title: "DividID",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timeline: 'MM/YYYY - MM/YYYY',
        role: "Developer",
        skills: ["Go", "SQLite"],
        image: "",
        link: "#",
        linkLabel: 'link',
    },
    {
        id: 4,
        title: "Test Project",
        role: "Developer",
        description: "Created a web app to help users generate beautifully formatted resumes with live previews.",
        timeline: 'MM/YYYY - MM/YYYY',
        skills: ["Vue", "Node.js", "CSS"],
        image: "",
        link: "#",
        linkLabel: 'link',
    },
    {
        id: 5,
        title: "Test Project",
        role: "Developer",
        timeline: 'MM/YYYY - MM/YYYY',
        description: "Created a web app to help users generate beautifully formatted resumes with live previews.",
        skills: ["Vue", "Node.js", "CSS"],
        image: "",
        link: "#",
        linkLabel: 'link',
    },
];
