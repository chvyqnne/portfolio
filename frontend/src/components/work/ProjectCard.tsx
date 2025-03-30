import { motion } from 'framer-motion';
import { Button } from '../Button';

type Props = {
	readonly id: number;
	readonly title: string;
	readonly description: string;
	readonly skills: string[];
	readonly image: string;
	readonly timeline: string;
	readonly innerRef?: (el: HTMLDivElement | null) => void;
};

export const ProjectCard = ({ id, title, description, image, skills, timeline, innerRef }: Props) => (
	<div
		className='grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-12 items-start'
		ref={innerRef}
	>
		<motion.div
			whileHover={{
				y: -6,
				transition: { duration: 0.3, ease: 'easeInOut' },
			}}
		>
			<div className='rounded-2xl overflow-hidden border border-black shadow-[10px_10px_0_0_#FF90C6] w-full h-[250px] bg-white'>
				{image ? (
					<img alt={title} className='object-cover w-full h-full' src={image} />
				) : (
					<div className='w-full h-full flex items-center justify-center text-sm text-gray-400' />
				)}
			</div>
		</motion.div>

		<div className='flex flex-col gap-4'>
			<p className='text-sm font-mono text-gray-600'>{skills.join(' | ')}</p>
			<h3 className='text-3xl font-bold font-inter'>{title}</h3>
			<p className='font-inter'>{timeline}</p>
			<p className='text-lg font-inter text-gray-800'>{description}</p>
			<Button
				label='project'
				link={`/project/${id}`}
				showArrow={true}
			/>
		</div>
	</div>
);
