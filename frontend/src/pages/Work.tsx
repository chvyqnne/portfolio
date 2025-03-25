import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FilterSidebar } from "../components/work/FilterSidebar";
import { ProjectCard } from "../components/work/ProjectCard";
import { MobileFilterDrawer } from "../components/work/MobileFilterDrawer";
import { Footer } from "../components/Footer";
import { projects, Project } from "../data/projects";

const getAllSkills = (projects: Project[]) =>
    [...new Set(projects.flatMap((p: Project) => p.skills))].sort((a, b) =>
        a.localeCompare(b)
    );

export const Work = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const toggleSkill = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    const clearAll = () => setSelectedSkills([]);

    const filteredProjects = selectedSkills.length
        ? projects.filter((p) =>
            selectedSkills.every((s) => p.skills.includes(s))
        )
        : projects;

    const allSkills = getAllSkills(projects);
    const projectRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const scrollToProject = (id: number) => {
        projectRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="flex flex-col md:flex-row w-full min-h-screen bg-gradient-to-t from-pink-100 to-white justify-center pt-[100px] px-4 sm:px-6 md:px-10">
                <div className='flex flex-col'>
                    <div className="flex flex-col md:flex-row w-full max-w-[1400px] gap-10">
                        <div
                            className="flex-1 overflow-y-auto pr-4"
                            style={{
                                maxHeight: "calc(80vh - 140px)",
                                paddingRight: "1rem",
                            }}
                        >
                            <MobileFilterDrawer
                                allSkills={allSkills}
                                selectedSkills={selectedSkills}
                                toggleSkill={toggleSkill}
                                clearAll={clearAll}
                                projects={projects}
                                scrollTo={scrollToProject}
                                resultCount={filteredProjects.length}
                            />
                            <div className="flex flex-col gap-20">
                                {filteredProjects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        description={project.description}
                                        skills={project.skills}
                                        image={project.image}
                                        link={project.link}
                                        innerRef={(el) => (projectRefs.current[project.id] = el)}
                                    />
                                ))}
                            </div>
                        </div>

                        <FilterSidebar
                            allSkills={allSkills}
                            selectedSkills={selectedSkills}
                            toggleSkill={toggleSkill}
                            clearAll={clearAll}
                            projects={projects}
                            scrollTo={scrollToProject}
                            resultCount={filteredProjects.length}
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