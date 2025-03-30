import { Contact } from '../Contact';

export const AboutTextSection = () => {
	return (
		<div id='text-container'>
			<div className='text-3xl'>
				<p>nice to meet you!</p>
				<p>i&apos;m cheyanne!, web app developer</p>
				<p>@ independent project analysis</p>
			</div>
			<div className='flex flex-wrap mt-5 font-dmsans text-lg'>
				<p>
					I graduated from American University with a degree in Computer Science and Data Science and have worked on building web and mobile-friendly tools across the legal, government,
					and nonprofit sectors. Currently at Independent Project Analysis, I contribute to full-stack application development in an Agile environment,
					collaborating closely with cross-functional teams to deliver internal tools that support
					data-driven decision-making. I bring a strong focus on usability, team communication,
					and operational efficiency, with experience working across the stack using technologies like React, Django, and PostgreSQL.
				</p>
			</div>
			<div className='mt-10'>
				<Contact />
			</div>
		</div>
	);
};
