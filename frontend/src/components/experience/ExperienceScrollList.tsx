import { useEffect, useRef } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { ExperienceItem } from "./ExperienceItem";
import { motion } from "framer-motion";

type ExperienceScrollListProps = {
    items: {
        year: string;
        title: string;
        company: string;
    }[];
    scrollStart: number;
    selectedIndex: number;
    onSelect: (index: number) => void;
    onScrollUp: () => void;
    onScrollDown: () => void;
    canScrollUp: boolean;
    canScrollDown: boolean;
    onWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
};

export const ExperienceScrollList = ({
    items,
    scrollStart,
    selectedIndex,
    onSelect,
    onScrollUp,
    onScrollDown,
    canScrollUp,
    canScrollDown,
    onWheel,
}: ExperienceScrollListProps) => {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = listRef.current;
        if (!current) return;

        const handleTouch = () => {
            let startY = 0;

            const onTouchStart = (e: TouchEvent) => {
                startY = e.touches[0].clientY;
            };

            const onTouchMove = (e: TouchEvent) => {
                const deltaY = startY - e.touches[0].clientY;
                if (deltaY > 10) onScrollDown();
                if (deltaY < -10) onScrollUp();
            };

            current.addEventListener("touchstart", onTouchStart);
            current.addEventListener("touchmove", onTouchMove);

            return () => {
                current.removeEventListener("touchstart", onTouchStart);
                current.removeEventListener("touchmove", onTouchMove);
            };
        };

        handleTouch();
    }, [onScrollDown, onScrollUp]);

    return (
        <div className="w-full md:w-1/2 p-2 flex flex-col">
            <div className="flex justify-center mb-4">
                <button onClick={onScrollUp} disabled={!canScrollUp} className={`hover:text-[#004BCD] ${!canScrollUp ? "opacity-30 cursor-not-allowed" : ""}`}>
                    <ArrowUp />
                </button>
            </div>
            <div className="flex flex-col gap-6 overflow-hidden mb-4" ref={listRef} onWheel={onWheel}>
                {items.map((item, index) => {
                    const actualIndex = scrollStart + index;
                    return (
                        <motion.div
                            whileTap={{ scale: 0.97 }}
                        >
                            <ExperienceItem
                                key={actualIndex}
                                year={item.year}
                                title={item.title}
                                company={item.company}
                                selected={actualIndex === selectedIndex}
                                onClick={() => onSelect(actualIndex)}
                            />
                        </motion.div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-4">
                <button onClick={onScrollDown} disabled={!canScrollDown} className={`hover:text-[#004BCD] ${!canScrollDown ? "opacity-30 cursor-not-allowed" : ""}`}>
                    <ArrowDown />
                </button>
            </div>
        </div>
    );
};
