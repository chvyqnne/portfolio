import { motion } from 'framer-motion';
import { pastelColorClasses } from '../../utils/colorPalette';

type FactCard = {
	label: string;
	content: string;
	kaomoji?: string;
};

type FactCardGridProps = {
	readonly items: FactCard[];
};

export const FactCardGrid = ({ items }: FactCardGridProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
			{items.map(({ label, content, kaomoji }, index) => {
				const colorClass = pastelColorClasses[index % pastelColorClasses.length];

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
