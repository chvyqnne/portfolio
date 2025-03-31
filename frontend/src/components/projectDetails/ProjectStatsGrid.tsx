import { motion } from 'framer-motion';
import type { ProjectStat } from '../../data/projects';

type Props = {
	readonly stats: ProjectStat[];
};

const statColorMap: string[] = [
	'bg-pink-50 border-pink-200 text-pink-700',
	'bg-yellow-50 border-yellow-200 text-yellow-700',
	'bg-blue-50 border-blue-200 text-blue-700',
	'bg-lime-50 border-lime-200 text-lime-700',
	'bg-indigo-50 border-indigo-200 text-indigo-700',
	'bg-orange-50 border-orange-200 text-orange-700',
	'bg-purple-50 border-purple-200 text-purple-700',
	'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
];

export const ProjectStatsGrid = ({ stats }: Props) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
			{stats.map(({ value, label }, index) => {
				const colorClass = statColorMap[index % statColorMap.length];

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
