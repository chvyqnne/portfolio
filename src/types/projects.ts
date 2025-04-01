export type ProjectSection = {
	title: string;
	type: 'text' | 'image' | 'code' | 'stats';
	content: string | ProjectStat[];
};

export type ProjectStat = {
	label: string;
	value: string;
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
	link?: string;
	linkLabel?: string;
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
		tools: ['React', 'TypeScript', 'Tailwind CSS'],
		skills: ['Design Systems', 'UX', 'Scalability'],
		image: '/images/portfolioSpec.png',
		imageCaption: 'The original Figma design for this site!',
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
- Made all content data-driven to support scalability and easy updates
- Designed a flexible project structure using a section-based data model to support multiple content types like text, stats, and images
- Built dynamic rendering logic that maps section types to reusable UI components, making the layout highly extensible`,
			},
			{
				title: 'Stats',
				type: 'stats',
				content: [
					{ value: '1', label: 'Designer, developer, and architect' },
					{ value: '20+', label: 'Reusable components built from scratch' },
					{ value: '100%', label: 'Data-driven content structure' },
					{ value: '∞', label: 'Future content supported (blog, case studies)' },
					{ value: '1 month', label: 'To design, develop, test, and iterate' },
					{ value: 'End-to-end', label: 'From vision to build to polish' },
				],
			},
			{
				title: 'Impact',
				type: 'text',
				content: `- **Improved perceived performance** through lightweight build setup with Vite and asset optimization, reducing initial load time
- **Enhanced maintainability** by modularizing layout and component structure, streamlining future content additions
- **Reinforced personal branding** with a consistent visual language and tone, helping differentiate my portfolio from generic developer sites
- **Reduced friction** in content updates by designing a flexible, section-based project detail system that supports text, images, and more
- **Future-proofed the site** by decoupling layout from content, enabling support for blog posts, charts, case studies, and new formats without code changes`,
			},
			{
				title: 'Reflection',
				type: 'text',
				content:
		'This was a deeply personal and technical project. I challenged myself to apply design thinking from the ground up, from Figma mockups to fluid animations, while also refining my React and TypeScript skills. It helped me realize that while I enjoy shaping product and visual experience, I’m more drawn to organizing, managing, and aligning project direction than shipping pixels alone. This portfolio reflects both my technical foundation and my evolving career path.\n\nBuilding this site taught me a lot about reusability, scalability, and maintainability. I designed a system that separates structure from content, making it easy to extend and update. I also deepened my understanding of UX, component architecture, and long-term design thinking. The process showed me that good design isn’t just aesthetic — it’s about structure, intention, and clarity.',
			},
		],
	},
	{
		id: 2,
		title: 'Copy & Split Data Tool',
		description:
		'A backend tool built in Go to automate the splitting, tracking, and copying of large eDiscovery datasets. It uses concurrency to improve speed, a SQLite database for persistent job state, and websockets for live dashboard updates.',
		timeline: '10/2023 - 04/2024',
		role: 'Lead Developer & PM',
		tools: [
			'Go', 'SQLite', 'HTML', 'JavaScript', 'CSS', 'Robocopy',
		],
		skills: [
			'Concurrency', 'Web Development', 'Databases', 'System Design',
		],
		image: '/images/copyTool.png',
		imageCaption: 'System diagram',
		sections: [
			{
				title: 'Overview',
				type: 'text',
				content:
				'I built this internal tool to automate how large eDiscovery datasets were copied and batched. The tool streamlines what was previously a manual, error-prone task — significantly improving copy speed, traceability, and overall reliability. It was recognized with the **Best OKR Project** (Objectives and Key Results) award in both Q1 and Q2 of 2024 at my previous company, Innovative Driven.',
			},
			{
				title: 'Goals',
				type: 'text',
				content: `**Project Goals:**
- Automate the creation and assignment of file batches for processing
- Speed up file copy workflows using concurrent execution
- Improve reliability and auditability through job tracking

**Personal Goals:**
- Lead both development and technical design
- Apply Go’s concurrency model (goroutines, channels)
- Design a custom SQLite schema to persist job, file, and batch metadata`,
			},
			{
				title: 'Implementation',
				type: 'text',
				content: `- Designed a local SQLite database to track job runs, batch assignments, file metadata, and status logs
- Built a Go-based web server to host the frontend, manage routes, and handle batch creation and job distribution
- Used websockets to enable real-time feedback for users via a dashboard: metrics included files processed, size, errors, and elapsed time
- Implemented concurrent workers (goroutines) that executed \`Robocopy\` jobs in parallel to improve throughput and isolate errors
- Created a lightweight UI with HTML, JS, and CSS for starting jobs and monitoring batch progress`,
			},
			{
				title: 'Stats',
				type: 'stats',
				content: [
					{ value: '96%', label: 'Faster copy times' },
					{ value: '4 TB+', label: 'Size of files processed' },
					{ value: '10+', label: 'Concurrent workers' },
					{ value: '6 months', label: 'From design to delivery' },
					{ value: '2', label: 'Company-wide awards won'},
				],
			},
			{
				title: 'Impact',
				type: 'text',
				content: `- **Optimized average file copy time by 96%**, especially for large, multi-volume jobs
- **Standardized the job pipeline** using schemas and logs stored in SQLite
- **Increased observability** through a live dashboard with real-time metrics, error feedback, and visual progress tracking
- **Eliminated manual missteps** in file grouping and batch creation`,
			},
			{
				title: 'Reflection',
				type: 'text',
				content:
				'This was a deeply technical and rewarding project. I got to wear both the developer and PM hats, and learned a lot about systems thinking, database schema design, and Go’s power for concurrency and server-side development. If I could improve one thing, I’d rebuild the interface as a local desktop GUI to better handle firewall and permissions constraints. I’d also introduce structured user testing to polish the interface and reduce cognitive load.',
			},
		],
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
		image: '/images/libraryDashboard.jpg',
		imageCaption: 'Live dashboard with animated gauges on AU Library website',
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
				content: `- Built a modular JavaScript function to fetch data from the Alma API
				- Parsed XML subfields to extract availability data for each item
				- Used DevExpress to render animated SVG gauges with a custom red-orange-green palette
				- Applied responsive layout techniques to support all screen sizes
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
];
