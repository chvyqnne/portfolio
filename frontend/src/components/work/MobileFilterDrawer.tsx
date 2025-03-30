import { useState } from 'react';
import { FilterSidebar } from './FilterSidebar';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	readonly allSkills: string[];
	readonly allTools: string[];
	readonly selectedSkills: string[];
	readonly toggleSkill: (skill: string) => void;
	readonly clearAll: () => void;
	readonly projects: { id: number; title: string }[];
	readonly scrollTo: (id: number) => void;
	readonly resultCount: number;
};

export const MobileFilterDrawer = ({
	allSkills,
	allTools,
	selectedSkills,
	toggleSkill,
	clearAll,
	projects,
	scrollTo,
	resultCount,
}: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<div className='md:hidden w-full mt-6 px-4'>
			<button
				className='w-full bg-pink-400 text-white py-2 px-4 rounded-full border border-black font-semibold hover:bg-pink-600 transition-colors'
				onClick={() => { setOpen(!open); }}
				type='button'
			>
				{open ? 'Hide Filters' : 'Show Filters'}
			</button>

			<AnimatePresence>
				{open ? <motion.div
					animate={{ opacity: 1, height: 'auto' }}
					className='mt-4 overflow-hidden'
					exit={{ opacity: 0, height: 0 }}
					initial={{ opacity: 0, height: 0 }}
					key='drawer'
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div className='p-4'>
						<FilterSidebar
							allSkills={allSkills}
							allTools={allTools}
							clearAll={clearAll}
							projects={projects}
							resultCount={resultCount}
							scrollTo={scrollTo}
							selectedSkills={selectedSkills}
							toggleSkill={toggleSkill}
							variant='mobile'
						/>
					</div>
				</motion.div> : null}
			</AnimatePresence>
		</div>
	);
};
