import { useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { ExperienceItem } from './ExperienceItem';
import { motion } from 'framer-motion';

type ExperienceScrollListProps = {
	readonly items: {
		year: string;
		title: string;
		company: string;
	}[];
	readonly scrollStart: number;
	readonly selectedIndex: number;
	readonly onSelect: (index: number) => void;
	readonly onScrollUp: () => void;
	readonly onScrollDown: () => void;
	readonly canScrollUp: boolean;
	readonly canScrollDown: boolean;
	readonly onWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
	readonly colorIndex: number;
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
	colorIndex,
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

			current.addEventListener('touchstart', onTouchStart);
			current.addEventListener('touchmove', onTouchMove);

			return () => {
				current.removeEventListener('touchstart', onTouchStart);
				current.removeEventListener('touchmove', onTouchMove);
			};
		};

		handleTouch();
	}, [onScrollDown, onScrollUp]);

	return (
		<div className='w-full md:w-1/2 p-4 flex flex-col'>
			<div className='flex justify-center mb-4'>
				<button
					aria-label='Scroll up'
					className={`hover:text-[#004BCD] ${!canScrollUp ? 'opacity-30 cursor-not-allowed' : ''}`}
					disabled={!canScrollUp}
					onClick={onScrollUp}
					type='button'
				>
					<ArrowUp />
				</button>
			</div>
			<div className='flex flex-col gap-6 overflow-auto mb-4' onWheel={onWheel} ref={listRef}>
				{items.map((item, index) => {
					const actualIndex = scrollStart + index;
					return (
						<motion.div
							key={actualIndex}
							whileHover={{ y: -6 }}
							whileTap={{ scale: 0.97 }}
						>
							<ExperienceItem
								colorIndex={colorIndex}
								company={item.company}
								onClick={() => { onSelect(actualIndex); }}
								selected={actualIndex === selectedIndex}
								title={item.title}
								year={item.year}
							/>
						</motion.div>
					);
				})}
			</div>
			<div className='flex justify-center mt-4'>
				<button
					aria-label='Scroll down'
					className={`hover:text-[#004BCD] ${!canScrollDown ? 'opacity-30 cursor-not-allowed' : ''}`}
					disabled={!canScrollDown}
					onClick={onScrollDown}
					type='button'
				>
					<ArrowDown />
				</button>
			</div>
		</div>
	);
};
