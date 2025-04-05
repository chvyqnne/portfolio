import { useParams } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { projects } from '../types/projects';
import { ProjectSummary } from '../components/projectDetails/ProjectSummary';
import { BackLink } from '../components/projectDetails/BackLink';
import { ProjectSectionNav } from '../components/projectDetails/ProjectSectionNav';
import { motion } from 'framer-motion';
import { ProjectSection } from '../components/projectDetails/ProjectSection';
import { ProjectStatsGrid } from '../components/projectDetails/ProjectStatsGrid'; // ✅ new import

export const ProjectDetails = () => {
	const { id } = useParams();
	const project = projects.find((p) => p.id === Number(id));

	if (!project) {
		return (
			<div className='pt-[100px] px-10'>
				<p className='text-xl font-inter mb-3'>Project not found.</p>
				<BackLink to='/work' />
			</div>
		);
	}

	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='bg-gradient-to-tr from-pink-300 via-yellow-50 to-slate-50 pt-[40px] lg:pt-[60px] md:px-6'>
				<div className='flex flex-col md:flex-col lg:flex-row justify-center gap-4 mx-6 md:mx-30'>
					<div className='md:sticky md:top-[120px] h-fit flex flex-col gap-4'>
						<BackLink to='/work' />
						<ProjectSectionNav sections={project.sections} />
					</div>

					<div className='flex-1 space-y-10 md:overflow-y-auto md:max-h-[80vh] px-2 scroll-smooth'>
						<div id='summary'>
							<ProjectSummary
								description={project.description}
								image={project.image}
								imageCaption={project.imageCaption}
								link={project.link}
								linkLabel={project.linkLabel}
								role={project.role}
								skills={project.skills}
								timeline={project.timeline}
								title={project.title}
								tools={project.tools}
							/>
						</div>

						{project.sections?.map((section, index) => {
							if (section.type === 'stats' && Array.isArray(section.content)) {
								return (
									<div id={`section-${index}`} key={index}>
										<h2 className='text-2xl font-bold font-dmsans mb-4'>{section.title}</h2>
										<ProjectStatsGrid stats={section.content} />
									</div>
								);
							}

							if (section.type === 'text' || section.type === 'image' || section.type === 'code') {
								return (
									<ProjectSection
										content={section.content}
										index={index}
										key={index}
										title={section.title}
									/>
								);
							}

							return null;
						})}
					</div>
				</div>
				<div className='mt-10 mx-6'>
					<Footer />
				</div>
			</div>
		</motion.div>
	);
};
