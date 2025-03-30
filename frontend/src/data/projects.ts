export type ProjectSection = {
	title: string;
	type: 'text' | 'image' | 'code';
	content: string;
};

export type Project = {
	id: number;
	title: string;
	description: string;
	timeline: string;
	role: string;
	tools: string[];
	skills: string[];
	image: string;
	link: string;
	linkLabel: string;
	sections?: ProjectSection[];
};

export const projects: Project[] = [
	{
		id: 1,
		title: 'Portfolio Website',
		description:
			'Personal website to showcase my work, skills, and background as a developer. Built with a component-based structure and animated UI to highlight projects in an engaging and organized way.',
		timeline: '03/2025 - 04/2025',
		role: 'Developer',
		tools: [
			'React', 'TypeScript', 'Tailwind CSS', 'Figma',
		],
		skills: ['Design', 'Animation'],
		image: '/projects/portfolioSpec.png',
		link: '#',
		linkLabel: 'link',
	},
	{
		id: 2,
		title: 'DividID',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		timeline: '10/2023 - 03/2024',
		role: 'Developer',
		tools: ['Go', 'SQLite'],
		skills: ['Concurrency', 'Databases'],
		image: '/projects/copyTool.png',
		link: '#',
		linkLabel: 'link',
	},
	{
		id: 3,
		title: 'Tech Availability Dashboard',
		role: 'Developer',
		description:
			'Developed a real-time technology availability dashboard for the American University Library to display live computer and equipment usage. Focused on user-friendly design and smooth animations to improve accessibility and student experience.',
		timeline: '02/2021 - 07/2021',
		tools: ['JavaScript', 'Bootstrap', 'HTML/CSS'],
		skills: ['API Integration', 'Animation', 'Responsive Design'],
		image: '/projects/libraryDashboard.jpg',
		link: 'https://www.american.edu/library/services/laptops.cfm',
		linkLabel: 'link',
	},
	{
		id: 4,
		title: 'COVID-19 Prison Cases Data Analysis GUI',
		role: 'Developer',
		description:
			'Created a desktop application using JavaFX to visualize and analyze COVID-19 prison case data as part of a programming course project. Designed with interactive charts and a clean interface to highlight key data trends for non-technical users.',
		timeline: '04/2021 - 05/2021',
		tools: ['Java', 'JavaFX'],
		skills: ['Data Visualization', 'Data Analysis', 'Design'],
		image: '/projects/javaDataAnalysis.jpg',
		link: '#',
		linkLabel: 'link',
	},
];
