import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { projects } from '../data/projects';
import { ProjectSummary } from '../components/projectDetails/ProjectSummary';
import { BackLink } from '../components/projectDetails/BackLink';
import { ProjectSectionNav } from '../components/projectDetails/ProjectSectionNav';
import { motion } from 'framer-motion';

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
			<div className='bg-gradient-to-tr from-pink-300 via-yellow-50 to-slate-50 pt-[100px] px-6 md:h-screen'>
				<div className='flex flex-col md:flex-row justify-center gap-4'>
					<div className='md:sticky md:top-[120px] h-fit flex flex-col gap-4'>
						<BackLink to='/work' />
						<ProjectSectionNav sections={project.sections} />
					</div>

					<div className='flex-1 space-y-10 overflow-y-auto max-h-[80vh] px-2 scroll-smooth'>
						<div id='summary'>
							<ProjectSummary
								description={project.description}
								image={project.image}
								link={project.link}
								linkLabel={project.linkLabel}
								role={project.role}
								skills={project.skills}
								timeline={project.timeline}
								title={project.title}
								tools={project.tools}
							/>
						</div>
					</div>
				</div>
				<div className='mt-10'>
					<Footer />
				</div>
			</div>
		</motion.div>
	);
};
