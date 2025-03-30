import { useState , useRef } from 'react';
import { motion } from 'framer-motion';
import { FilterSidebar } from '../components/work/FilterSidebar';
import { ProjectCard } from '../components/work/ProjectCard';
import { MobileFilterDrawer } from '../components/work/MobileFilterDrawer';
import { Footer } from '../components/Footer';
import { projects, Project } from '../data/projects';

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
			selectedSkills.every((s) => p.skills.includes(s) || p.tools.includes(s)),
		)
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
			<div className='flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-t from-pink-100 to-white justify-center pt-[100px] px-4 sm:px-6 md:px-10'>
				<div className='flex flex-col'>
					<div className='flex flex-col md:flex-row w-full max-w-[1400px] gap-10'>
						<div
							className='flex-1 overflow-y-auto pr-4'
							style={{
								maxHeight: 'calc(80vh - 140px)',
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
							<div className='flex flex-col gap-20'>
								{filteredProjects.map((project) => (
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
								))}
							</div>
						</div>

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
					</div>
					<div className='mt-20'>
						<Footer
							contact={true}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};