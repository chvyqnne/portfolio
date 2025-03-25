import { useState } from "react";
import { FilterSidebar } from "./FilterSidebar";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    allSkills: string[];
    selectedSkills: string[];
    toggleSkill: (skill: string) => void;
    clearAll: () => void;
    projects: { id: number; title: string }[];
    scrollTo: (id: number) => void;
    resultCount: number;
};

export const MobileFilterDrawer = ({
    allSkills,
    selectedSkills,
    toggleSkill,
    clearAll,
    projects,
    scrollTo,
    resultCount,
}: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden w-full mt-6 px-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full bg-pink-400 text-white py-2 px-4 rounded-full border border-black font-semibold hover:bg-pink-600 transition-colors"
            >
                {open ? "Hide Filters" : "Show Filters"}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="drawer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-4 overflow-hidden"
                    >
                        <div className="p-4">
                            <FilterSidebar
                                variant='mobile'
                                allSkills={allSkills}
                                selectedSkills={selectedSkills}
                                toggleSkill={toggleSkill}
                                clearAll={clearAll}
                                projects={projects}
                                scrollTo={scrollTo}
                                resultCount={resultCount}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
