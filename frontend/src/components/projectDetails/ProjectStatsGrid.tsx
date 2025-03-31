import { motion } from 'framer-motion';
import type { ProjectStat } from '../../types/projects';
import { pastelColorClasses } from '../../utils/colorPalette';

type Props = {
	readonly stats: ProjectStat[];
};

export const ProjectStatsGrid = ({ stats }: Props) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
			{stats.map(({ value, label }, index) => {
				const colorClass = pastelColorClasses[index % pastelColorClasses.length];
				
				return (
					<motion.div
						className={`rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow ${colorClass}`}
						key={index}
						whileHover={{ y: -6 }}
					>
						<p className='text-3xl sm:text-4xl font-bold font-dmsans'>
							{value}
						</p>
						<p className='uppercase text-xs font-bold tracking-wide font-inter'>
							{label}
						</p>
					</motion.div>
				);
			})}
		</div>
	);
};
