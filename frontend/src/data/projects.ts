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
		timeline: 'MM/YYYY - MM/YYYY',
		role: 'Developer',
		skills: [
			'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Design', 'Animation',
		],
		image: '/projects/portfolioSpec.png',
		link: '#',
		linkLabel: 'link',
		sections: [
			{
				title: 'Stats',
				type: 'text',
				content: '- 90% engagement increase\n- 40% fewer support tickets',
			},
		],
	},
	{
		id: 2,
		title: 'Pantry Pal',
		description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		timeline: 'MM/YYYY - MM/YYYY',
		role: 'Developer',
		skills: [
			'React', 'TypeScript', 'SQL', 'Databases', 'Design', 'Figma',
		],
		image: '/projects/pantryPal.jpg',
		link: '#',
		linkLabel: 'link',
	},
	{
		id: 3,
		title: 'DividID',
		description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		timeline: 'MM/YYYY - MM/YYYY',
		role: 'Developer',
		skills: [
			'Go', 'SQLite', 'Concurrency', 'Databases',
		],
		image: '/projects/copyTool.png',
		link: '#',
		linkLabel: 'link',
	},
	{
		id: 4,
		title: 'Tech Availability Dashboard',
		role: 'Developer',
		description:
            'Developed a real-time technology availability dashboard for the American University Library to display live computer and equipment usage. Focused on user-friendly design and smooth animations to improve accessibility and student experience.',
		timeline: '02/2021 - 07/2021',
		skills: [
			'JavaScript',
			'Bootstrap',
			'HTML',
			'CSS',
			'API Integration',
			'UI Animation',
			'Responsive Design',
		],
		image: '/projects/libraryDashboard.jpg',
		link: '#',
		linkLabel: 'link',
	},
	{
		id: 5,
		title: 'COVID-19 Prison Cases Data Analysis GUI',
		role: 'Developer',
		description: 'Created a desktop application using JavaFX to visualize and analyze COVID-19 prison case data as part of a programming course project. Designed with interactive charts and a clean interface to highlight key data trends for non-technical users.',
		timeline: '04/2021 - 05/2021',
		skills: [
			'Java',
			'JavaFX',
			'Data Visualization',
			'Data Analysis',
			'UI Design',
		],
		image: '/projects/javaDataAnalysis.jpg',
		link: '#',
		linkLabel: 'link',
	},
];
