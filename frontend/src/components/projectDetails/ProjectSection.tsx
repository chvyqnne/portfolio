import { motion } from 'framer-motion';

type Props = {
	readonly index: number;
	readonly title: string;
	readonly content: string;
};

const colorMap: Record<string, string> = {
	overview: 'bg-pink-50 border-pink-200 text-pink-700',
	goals: 'bg-yellow-50 border-yellow-200 text-yellow-700',
	implementation: 'bg-blue-50 border-blue-200 text-blue-700',
	reflection: 'bg-lime-50 border-lime-200 text-lime-700',
	impact: 'bg-indigo-50 border-indigo-200 text-indigo-700',
};

export const ProjectSection = ({ index, title, content }: Props) => {
	const normalizedTitle = title.toLowerCase();
	const colorClass = colorMap[normalizedTitle] || 'bg-white border-black text-black';

	const parseBoldText = (text: string) => {
		const parts = text.split(/(\*\*.*?\*\*)/g);
		return parts.map((part, idx) =>
			part.startsWith('**') && part.endsWith('**') ? (
				<strong className='font-semibold' key={idx}>
					{part.replace(/\*\*/g, '')}
				</strong>
			) : (
				part
			),
		);
	};

	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className={`border rounded-2xl p-6 space-y-4 ${colorClass}`}
			id={`section-${index}`}
			initial={{ opacity: 0, y: 20 }}
			transition={{ delay: 0.1 * index }}
		>
			<p className='text-2xl font-bold font-dmsans'>{title}</p>
			<div className='font-inter text-lg space-y-2'>
				{content.split('\n').map((line, idx) => {
					return (
						<p className='whitespace-pre-line' key={idx}>
							{parseBoldText(line)}
						</p>
					);
				})}
			</div>
		</motion.div>
	);
};
