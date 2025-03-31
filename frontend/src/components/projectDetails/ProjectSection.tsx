import { motion } from 'framer-motion';
import { ProjectStat } from '../../data/projects';

type Props = {
	readonly index: number;
	readonly title: string;
	readonly content: string | ProjectStat[];
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

	const parseRichText = (text: string) => {
		const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
		return parts.map((part, idx) => {
			if (part.startsWith('**') && part.endsWith('**')) {
				return (
					<strong className='font-semibold' key={idx}>
						{part.replace(/\*\*/g, '')}
					</strong>
				);
			}
			if (part.startsWith('`') && part.endsWith('`')) {
				return (
					<code
						className='bg-black/10 text-sm text-gray-800 px-1 py-0.5 rounded font-mono'
						key={idx}
					>
						{part.replace(/`/g, '')}
					</code>
				);
			}
			return part;
		});
	};


	if (typeof content !== 'string') {
		return null;
	}

	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className={`border rounded-2xl p-6 space-y-4 ${colorClass}`}
			id={`section-${index}`}
			initial={{ opacity: 0, y: 20 }}
			whileHover={{
				y: -6,
				transition: { duration: 0.3, ease: 'easeInOut' },
			}}
		>
			<p className='text-2xl font-bold font-dmsans'>{title}</p>
			<div className='font-inter text-lg space-y-2'>
				{content.split('\n').map((line: string, idx: number) => (
					<p className='whitespace-pre-line' key={idx}>
						{parseRichText(line)}
					</p>
				))}
			</div>
		</motion.div>
	);
};
