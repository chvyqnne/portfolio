import { useEffect, useState, useCallback } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
	readonly src: string;
	readonly alt?: string;
	readonly caption?: string;
	readonly className?: string;
	readonly containerClassName?: string;
	readonly previewHeight?: number;
};

export const ImageModal = ({
	src,
	alt = 'Image preview',
	caption,
	className = '',
	containerClassName = '',
	previewHeight = 400,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			setIsOpen(false);
		}
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, handleKeyDown]);

	return (
		<>
			<div
				className={`group w-fit ${containerClassName}`}
				onMouseEnter={() => { setIsHovered(true); }}
				onMouseLeave={() => { setIsHovered(false); }}
			>
				<motion.div
					animate={{ opacity: 1, scale: 1 }}
					className='cursor-zoom-in'
					initial={{ opacity: 0, scale: 0.95 }}
					onClick={() => { setIsOpen(true); }}
					whileHover={{ y: -6 }}
				>
					<img
						alt={alt}
						className={`bg-white rounded-2xl border border-black p-4 ${className}`}
						src={src}
						style={{
							boxShadow: '15px 15px 0 #FFEDB0',
							height: `${previewHeight}px`,
							width: 'auto',
						}}
					/>
				</motion.div>
				{caption ? <motion.p
					animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
					className='text-center text-sm text-black mt-2 font-inter'
					initial={{ opacity: 0, y: 6 }}
					transition={{ duration: 0.3 }}
				>
					{caption}
				</motion.p> : null}
			</div>

			<AnimatePresence>
				{isOpen ? <motion.div
					animate={{ opacity: 1 }}
					className='fixed inset-0 z-50 bg-black/60 flex items-center justify-center'
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					onClick={() => { setIsOpen(false); }}
				>
					<motion.div
						animate={{ scale: 1, opacity: 1 }}
						className='relative max-w-5xl w-full px-4'
						exit={{ scale: 0.95, opacity: 0 }}
						initial={{ scale: 0.95, opacity: 0 }}
						onClick={(e) => { e.stopPropagation(); }}
						transition={{ duration: 0.2 }}
					>
						<button
							aria-label='close-image-modal'
							className='absolute top-4 right-4 text-black hover:text-yellow-600'
							onClick={() => { setIsOpen(false); }}
							type='button'
						>
							<XMarkIcon className='w-8 h-8' />
						</button>
						<img
							alt={alt}
							className='w-full max-h-[90vh] rounded-lg border border-white shadow-lg'
							src={src}
						/>
						{caption ? <p className='text-center text-white mt-4 text-base font-inter'>{caption}</p> : null}
					</motion.div>
				</motion.div> : null}
			</AnimatePresence>
		</>
	);
};
