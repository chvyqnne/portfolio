import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Button } from '../../../components/ui/Button';

type Props = {
	readonly id: number;
	readonly title: string;
	readonly description: string;
	readonly skills: string[];
	readonly tools: string[];
	readonly image: string;
	readonly timeline: string;
	readonly innerRef?: (el: HTMLDivElement | null) => void;
};

export const ProjectCard = ({
	id,
	title,
	description,
	image,
	skills,
	timeline,
	tools,
	innerRef,
}: Props) => {
	const [showModal, setShowModal] = useState(false);

	return (
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
				<button
					className='group rounded-2xl overflow-hidden border border-black shadow-[10px_10px_0_0_#FF90C6] w-full h-[250px] bg-white'
					onClick={() => { setShowModal(true); }}
					type='button'
				>
					{image ? (
						<img
							alt={title}
							src={image}
							className='object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-zoom-in'
						/>
					) : (
						<div className='w-full h-full flex items-center justify-center text-sm text-gray-400' />
					)}
				</button>
			</motion.div>

			<div className='flex flex-col gap-4'>
				<p className='text-xs font-mono text-gray-600'>
					{[...tools, ...skills].join(' | ')}
				</p>
				<h3 className='text-2xl font-bold font-inter'>{title}</h3>
				<p className='font-inter'>{timeline}</p>
				<p className='text-md font-inter text-gray-800'>{description}</p>
				<Button label='project' link={`/project/${id}`} showArrow={true} />
			</div>

			<AnimatePresence>
				{showModal ? <motion.div
					animate={{ opacity: 1 }}
					className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					onClick={() => { setShowModal(false); }}
				>
					<motion.div
						animate={{ scale: 1 }}
						className='relative'
						exit={{ scale: 0.9 }}
						initial={{ scale: 0.9 }}
						onClick={(e) => { e.stopPropagation(); }}
					>
						<img
							alt={title}
							className='max-w-[90vw] max-h-[90vh] rounded-2xl shadow-lg border border-white'
							src={image}
						/>
						<button
							aria-label='close-image-modal'
							className='absolute top-4 right-4 text-black hover:text-yellow-600'
							onClick={() => { setShowModal(false); }}
							type='button'
						>
							<XMarkIcon className='w-8 h-8' />
						</button>
					</motion.div>
				</motion.div> : null}
			</AnimatePresence>
		</div>
	);
};
