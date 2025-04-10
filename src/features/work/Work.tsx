import { useState , useRef } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../../components/layout/Footer';
import { projects, Project } from '../../types/projects';
import { FilterSidebar } from './components/FilterSidebar';
import { MobileFilterDrawer } from './components/MobileFilterDrawer';
import { ProjectCard } from './components/ProjectCard';

const getAllSkills = (projectList: Project[]) => {
	const tools = [...new Set(projectList.flatMap((p) => p.tools))].sort((a, b) => a.localeCompare(b));
	const skills = [...new Set(projectList.flatMap((p) => p.skills))].sort((a, b) => a.localeCompare(b));
	return { tools, skills };
};

export const Work = () => {
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

	const toggleSkill = (skill: string) => {
		setSelectedSkills((prev) =>
			prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
		);
	};

	const clearAll = () => { setSelectedSkills([]); };

	const filteredProjects = selectedSkills.length
		? projects.filter((p) =>
			selectedSkills.some((s) => p.skills.includes(s) || p.tools.includes(s))		)
		: projects;

	const { tools, skills } = getAllSkills(projects);

	const projectRefs = useRef<Record<number, HTMLDivElement | null>>({});

	const scrollToProject = (id: number) => {
		projectRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-tr from-fuchsia-50 to-white justify-center lg:pt-8 px-4 sm:px-6 lg:px-10'>
				<div className='flex flex-col mt-25 md:mt-0'>
					<div className='flex flex-col lg:flex-row w-full max-w-[1400px] gap-10'>
						<div
							className='flex-1 overflow-y-auto pr-4'
							style={{
								maxHeight: 'calc(80vh - 10px)',
								paddingRight: '1rem',
							}}
						>
							<MobileFilterDrawer
								allSkills={skills}
								allTools={tools}
								clearAll={clearAll}
								projects={projects}
								resultCount={filteredProjects.length}
								scrollTo={scrollToProject}
								selectedSkills={selectedSkills}
								toggleSkill={toggleSkill}
							/>
							<div className='flex flex-col gap-20 min-h-[100px]'>
								{filteredProjects.length > 0 ? (
									filteredProjects.map((project) => (
										<ProjectCard
											description={project.description}
											id={project.id}
											image={project.image}
											innerRef={(el) => (projectRefs.current[project.id] = el)}
											key={project.id}
											skills={project.skills}
											timeline={project.timeline}
											title={project.title}
											tools={project.tools}
										/>
									))
								) : (
									<div className='text-center text-gray-500 font-inter text-lg pt-10'>
										No matching projects found (｡•́︿•̀｡)
									</div>
								)}
							</div>
						</div>
						<motion.div
							animate={{ scale: 1, opacity: 1, y: 0 }}
							initial={{ scale: 0.95, opacity: 0, y: 20 }}
							whileHover={{
								y: -6,
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
						>
							<FilterSidebar
								allSkills={skills}
								allTools={tools}
								clearAll={clearAll}
								projects={projects}
								resultCount={filteredProjects.length}
								scrollTo={scrollToProject}
								selectedSkills={selectedSkills}
								toggleSkill={toggleSkill}
							/>
						</motion.div>
					</div>
					<div className='mt-10 lg:mt-20'>
						<Footer
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};