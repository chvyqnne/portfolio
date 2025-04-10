export type Experience = {
	year: string;
	title: string;
	company: string;
	timeline: string;
	skills: string[];
	responsibilities: string[];
};

export const experience: Experience[] = [
	{
		year: '2025',
		title: 'Web Application Developer',
		company: 'Independent Project Analysis',
		timeline: '01/2025 - Present',
		skills: [
			'React', 'Django', 'Tailwind CSS', 'PostgreSQL', 'Git',
		],
		responsibilities: [
			'Architecting and developing 5+ web- and mobile-friendly full-stack applications in Linux',
			'Implementing responsive design and clean UI/UX',
		],
	},
	{
		year: '2024',
		title: 'Data Processing Technician',
		company: 'Innovative Driven',
		timeline: '03/2024 - 01/2025',
		skills: [
			'Nuix', 'Relativity', 'Data Processing', 'Deduplication',
		],
		responsibilities: [
			'Process large volumes of ESI with Nuix and Relativity',
			'Perform deduplication, deNISTing, metadata extraction, and filtering to ensure data relevance and compliance with client specifications',
			'Develop reusable scripts and batch operations to automate repetitive processing workflows, reducing manual labor and human error',
		],
	},
	{
		year: '2023',
		title: 'Data Analyst',
		company: 'Innovative Driven',
		timeline: '08/2023 - 03/2024',
		skills: [
			'Go', 'SQLite', 'ServiceNow', 'Power Apps',
		],
		responsibilities: [
			'Managed data intake workflows for eDiscovery, including receiving, cataloging, and organizing large volumes of electronically stored information (ESI) for litigation readiness',
			'Led dashboard maintenance and automation in Power Apps',
			'Performed end-to-end eDiscovery data processing',
			'Wrote internal technical documentation and SOPs to standardize data intake and processing procedures',
		],
	},
	{
		year: '2022',
		title: 'Frontend Developer Intern',
		company: 'Federal Reserve Board',
		timeline: '08/2021 - 08/2023',
		skills: [
			'AngularJS', 'SharePoint', 'Accessibility', 'Agile',
		],
		responsibilities: [
			'Designed and built responsive UI components',
			'Ensured accessibility and performance standards',
			'Participated in sprints and QA testing',
		],
	},
	{
		year: '2022',
		title: 'Immigration Policy Research Assistant',
		company: 'American University',
		timeline: '2022',
		skills: [
			'Data Analysis', 'Data Visualization', 'Data Cleaning', 'Research',
		],
		responsibilities: [
			'Applied advanced statistical techniques to analyze datasets, identifying key trends, patterns, and correlations',
			'Created compelling data visualizations in R, facilitating data-driven decision-making processes',
			'Developed comprehensive reports and presentations to contribute to evidence-based policy recommendations',
		],
	},
	{
		year: '2021',
		title: 'Software Engineer Intern',
		company: 'Jordan & Cara Odo Foundation',
		timeline: '06/2020 - 08/2020',
		skills: [
			'Python', 'AWS', 'Docker', 'Golang',
		],
		responsibilities: [
			'Built COVID-19 resource tools and search features',
			'Used Docker and Git for streamlined dev workflows',
			'Implemented cloud-based data aggregation',
		],
	},
	{
		year: '2021',
		title: 'Volunteer Data Analyst',
		company: 'Adoptee Hub',
		timeline: '04/2021 - 06/2021',
		skills: ['R', 'Data Analysis'],
		responsibilities: ['Acquired raw data related to adoptions on international, national, and state levels to maintain database'],
	},
];