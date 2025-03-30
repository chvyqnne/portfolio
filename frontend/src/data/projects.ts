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
	imageCaption: string;
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
		imageCaption: 'The original Figma design for this site!',
		link: '#',
		linkLabel: 'link',
		sections: [
			{
				title: 'Overview',
				type: 'text',
				content:
			'I designed and developed a personal portfolio website to showcase my work, skills, and background as a developer. Built from scratch with a focus on clean layout, animated transitions, and component reusability, this site acts as both a technical playground and a professional presence.',
			},
			{
				title: 'Goals',
				type: 'text',
				content: `**Project Goals:**
- Create an interactive, visually polished space to present my projects and career background
- Ensure fast performance and responsiveness across devices
- Support extensibility for future content (e.g. blog posts, project case studies)

**Personal Goals:**
- Deepen my skills in Tailwind CSS, React, and motion libraries
- Practice component composition and separation of concerns
- Apply animation and visual storytelling techniques to web UI`,
			},
			{
				title: 'Implementation',
				type: 'text',
				content: `- Built the site with React and TypeScript, using Vite for bundling and Tailwind CSS for styling
- Designed all layout and motion elements in Figma before implementation
- Created reusable components for project summaries, details, navigation, and UI elements
- Used Framer Motion for smooth animations and transitions across pages and components
- Implemented a custom gradient background with pastel boba-float animation to reflect my design personality
- Made all content data-driven to support scalability and easy updates`,
			},
			{
				title: 'Impact',
				type: 'text',
				content: `- **Improved perceived performance** through lightweight build setup with Vite and asset optimization, reducing initial load time
- **Enhanced maintainability** by modularizing layout and component structure, streamlining future content additions
- **Reinforced personal branding** with a consistent visual language and tone, helping differentiate my portfolio from generic developer sites
- **Reduced friction** in content updates by designing a flexible, section-based project detail system that supports text, images, and more`,
			},
			{
				title: 'Reflection',
				type: 'text',
				content:
			'This was a deeply personal and technical project. I challenged myself to apply design thinking from the ground up — from Figma mockups to fluid animations — while also refining my React and TypeScript skills. It also helped me realize that while I enjoy shaping product and visual experience, I’m more drawn to organizing, managing, and aligning project direction than shipping pixels alone. This portfolio now reflects both my technical foundation and my evolving career path.',
			},
		],
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
		imageCaption: '',
		link: '#',
		linkLabel: 'link',
	},
	{
		id: 3,
		title: 'Tech Availability Dashboard',
		description:
		'Real-time widget for American University Library that visualizes the live availability of technology items like laptops and cameras using animated gauges. Focused on accessibility, responsiveness, and seamless API integration.',
		timeline: '02/2021 – 07/2021',
		role: 'Developer',
		tools: [
			'JavaScript', 'HTML/CSS', 'Bootstrap', 'DevExpress',
		],
		skills: [
			'API Integration', 'Responsive Design', 'Data Visualization', 'Accessibility',
		],
		image: '/projects/libraryDashboard.jpg',
		imageCaption: '',
		link: 'https://www.american.edu/library/services/laptops.cfm',
		linkLabel: 'View Live',
		sections: [
			{
				title: 'Overview',
				type: 'text',
				content:
			'I developed a real-time technology availability widget for the American University Library while working there part-time. The dashboard displays the live availability of high-demand equipment such as laptops and cameras using animated gauges. My goal was to provide immediate visual feedback on availability while ensuring accessibility and responsiveness across all devices.',
			},
			{
				title: 'Goals',
				type: 'text',
				content: `**Project Goals:**
				- Provide quick, visual access to tech item availability for students and staff
				- Ensure a responsive layout and full accessibility (W3C/Section 508 compliant)
				- Integrate with the Alma API to reflect real-time equipment status
				
				**Personal Goals:**
				- Improve frontend development skills with JavaScript, HTML, and CSS
				- Learn how to parse and manipulate XML data from a live API
				- Manage and complete an end-to-end technical project on my own`,
			},
			{
				title: 'Implementation',
				type: 'text',
				content: `- Built a modular JavaScript function (\`techAvailRequest\`) to fetch data from the Alma API
				- Parsed XML subfields to extract availability data for each item
				- Used DevExpress to render animated SVG gauges with a custom red-orange-green palette
				- Applied responsive layout techniques with flexbox and \`flex-wrap\` to support all screen sizes
				- Structured content with semantic HTML and minimal CSS to avoid style conflicts with the main site
				- Conducted QA testing with the university’s systems administrator to meet integration and accessibility requirements`,
			},
			{
				title: 'Impact',
				type: 'text',
				content: `
				- **Reduced timeline risk** by independently designing and implementing the dashboard, avoiding delays caused by library IT dependencies.
				- **Improved quality** by collaborating with the university’s systems administrator to meet accessibility (W3C/Section 508) and responsive design standards.
				- **Lowered cost of maintenance** by writing clean, modular JavaScript and automating API interactions, minimizing future developer involvement.
				- **Enhanced visibility** into equipment usage through animated gauges, reducing student uncertainty and improving decision-making during peak hours.`,
			},
			{
				title: 'Reflection',
				type: 'text',
				content: 'This was my first real solo development project, and I faced a lot of learning curves. I had no experience with XML or third-party UI libraries, and initially struggled to understand how to extract the data I needed. I even tried building my own gauges before switching to DevExpress, which gave me the professional look and interactivity I wanted. Although progress felt slow at times, I came out of this project with stronger debugging skills, a deeper understanding of APIs, and the confidence to build something that is still live and used by students today.',
			},
		],
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
		imageCaption: '',
		link: '#',
		linkLabel: 'link',
	},
];
