import { useState } from "react";
import { Footer } from "../Footer";
import { ExperienceScrollList } from "./ExperienceScrollList";
import { ExperienceDetail } from "./ExperienceDetail";
import { motion } from "framer-motion";
import { experience } from "../../data/experience";

export const ExperiencePanel = () => {
    const [scrollStart, setScrollStart] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const visibleCount = 4;

    const visibleItems = experience.slice(scrollStart, scrollStart + visibleCount);
    const selected = experience[selectedIndex];

    const canScrollUp = scrollStart > 0;
    const canScrollDown = scrollStart + visibleCount < experience.length;

    const scrollUp = () => {
        if (canScrollUp) {
            const newStart = scrollStart - 1;
            setScrollStart(newStart);
            setSelectedIndex(newStart);
        }
    };

    const scrollDown = () => {
        if (canScrollDown) {
            const newStart = scrollStart + 1;
            setScrollStart(newStart);
            setSelectedIndex(newStart);
        }
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY > 0) scrollDown();
        if (e.deltaY < 0) scrollUp();
    };

    return (
        <div className="flex flex-col md:flex-row w-screen h-screen overflow-hidden bg-gradient-to-t from-blue-200 to-white items-center justify-center px-4 md:px-10">
            <div className="flex flex-col gap-4 w-full max-w-6xl">
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    <ExperienceScrollList
                        items={visibleItems}
                        scrollStart={scrollStart}
                        selectedIndex={selectedIndex}
                        onSelect={setSelectedIndex}
                        onScrollUp={scrollUp}
                        onScrollDown={scrollDown}
                        canScrollUp={canScrollUp}
                        canScrollDown={canScrollDown}
                        onWheel={handleWheel}
                    />
                    <div className="text-center text-sm text-gray-600 font-inter mt-2">
                        {scrollStart + 1}–{Math.min(scrollStart + visibleCount, experience.length)} of {experience.length}
                    </div>
                    <motion.div
                        className='mt-4'
                        key={selectedIndex}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{
                            y: -6,
                            transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                    >
                        <ExperienceDetail
                            timeline={selected.timeline}
                            skills={selected.skills}
                            responsibilities={selected.responsibilities}
                        />
                    </motion.div>
                </div>
                <div className="mt-10 md:mt-20">
                    <Footer
                        contact={true}
                    />
                </div>
            </div>
        </div>
    );
};