import { motion } from 'framer-motion';

const colorMap: Record<string, string> = {
	education: 'bg-pink-50 border-pink-200 text-pink-700',
	skills: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
	'tech stack': 'bg-purple-50 border-purple-200 text-purple-700',
	tools: 'bg-yellow-50 border-yellow-200 text-yellow-700',
	hometown: 'bg-orange-50 border-orange-200 text-orange-700',
	languages: 'bg-blue-50 border-blue-200 text-blue-700',
	hobbies: 'bg-lime-50 border-lime-200 text-lime-700',
	'personality type': 'bg-indigo-50 border-indigo-200 text-indigo-700',
	'drink order': 'bg-teal-50 border-teal-200 text-teal-700',
};

type FactCard = {
	label: string;
	content: string;
	kaomoji?: string;
};

type FactCardGridProps = {
	readonly items: FactCard[];
};

export const FactCardGrid = ({ items}: FactCardGridProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
			{items.map(({ label, content, kaomoji }) => {
				const colorClass = colorMap[label.toLowerCase()] || 'bg-white border-gray-200 text-gray-700';

				return (
					<motion.div
						className={`rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow ${colorClass}`}
						key={label}
						whileHover={{ y: -6 }}
					>
						<p className='uppercase text-xs font-bold tracking-wide'>
							{label} {kaomoji ? <span className='ml-1 kaomoji-dance'>{kaomoji}</span> : null}
						</p>
						<p className='text-sm mt-1 font-dmsans leading-snug'>
							{content}
						</p>
					</motion.div>
				);
			})}
		</div>
	);
};
