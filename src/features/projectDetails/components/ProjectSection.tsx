import { motion } from 'framer-motion';
import { ProjectStat } from '../../../types/projects';
import { pastelColorClasses } from '../../../utils/colorPalette';


type Props = {
	readonly index: number;
	readonly title: string;
	readonly content: string | ProjectStat[];
};


export const ProjectSection = ({ index, title, content }: Props) => {
	const colorClass = pastelColorClasses[index % pastelColorClasses.length];

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
