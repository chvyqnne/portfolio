import { useState } from 'react';
import { ExperienceScrollList } from './ExperienceScrollList';
import { ExperienceDetail } from './ExperienceDetail';
import { motion } from 'framer-motion';
import { experience } from '../../../types/experience';
import { pastelColorClasses } from '../../../utils/colorPalette';

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

			if (selectedIndex > newStart + visibleCount - 1) {
				setSelectedIndex(newStart + visibleCount - 1);
			} else if (selectedIndex < newStart) {
				setSelectedIndex(newStart);
			}
		}
	};

	const scrollDown = () => {
		if (canScrollDown) {
			const newStart = scrollStart + 1;
			setScrollStart(newStart);

			if (selectedIndex < newStart) {
				setSelectedIndex(newStart);
			} else if (selectedIndex > newStart + visibleCount - 1) {
				setSelectedIndex(newStart + visibleCount - 1);
			}
		}
	};

	const getColorIndex = (index: number) => {
		return Math.floor((index / experience.length) * pastelColorClasses.length) % pastelColorClasses.length;
	};

	return (
		<div className='flex flex-col gap-6 w-full lg:flex-row lg:items-start mt-20 md:mt-10'>
			<div className='flex flex-col lg:flex-row gap-6'>
				<ExperienceScrollList
					canScrollDown={canScrollDown}
					canScrollUp={canScrollUp}
					colorIndex={getColorIndex(selectedIndex)}
					items={visibleItems}
					onScrollDown={scrollDown}
					onScrollUp={scrollUp}
					onSelect={setSelectedIndex}
					scrollStart={scrollStart}
					selectedIndex={selectedIndex}
				/>
				<div className='text-center text-sm text-gray-600 font-inter mt-2'>
					{scrollStart + 1}–{Math.min(scrollStart + visibleCount, experience.length)} of {experience.length}
				</div>
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					className='lg:mt-4'
					exit={{ opacity: 0, x: -30 }}
					initial={{ opacity: 0, x: 30 }}
					key={selectedIndex}
					transition={{ duration: 0.4 }}
					whileHover={{
						y: -6,
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<ExperienceDetail
						index={getColorIndex(selectedIndex)}
						responsibilities={selected.responsibilities}
						skills={selected.skills}
						timeline={selected.timeline}
					/>
				</motion.div>
			</div>
		</div>
	);
};