import { motion } from 'framer-motion';
import {
	BriefcaseIcon,
	CalendarIcon,
	WrenchScrewdriverIcon,
	LightBulbIcon,
} from '@heroicons/react/24/solid';
import { ImageModal } from './ImageModal';
import { Button } from '../../../components/ui/Button';

type Props = {
	readonly title: string;
	readonly description: string;
	readonly role: string;
	readonly timeline: string;
	readonly skills: string[];
	readonly tools: string[];
	readonly link?: string;
	readonly linkLabel?: string;
	readonly image?: string;
	readonly imageCaption?: string;
};

const summaryColor = 'bg-yellow-50 border-yellow-200 text-yellow-700';

export const ProjectSummary = ({
	title,
	description,
	image,
	imageCaption,
	skills,
	link,
	linkLabel,
	role,
	timeline,
	tools,
}: Props) => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='p-4 space-y-6'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6 }}
		>
			<motion.div
				animate={{ opacity: 1, y: 0 }}
				className='space-y-4'
				initial={{ opacity: 0, y: 20 }}
				transition={{ delay: 0.1 }}
			>
				<p className='font-dmsans font-bold text-3xl'>{title}</p>
				<p className='font-dmsans text-xl'>{description}</p>
			</motion.div>

			<div className='flex flex-col md:flex-row gap-10'>
				<motion.div
					animate={{ opacity: 1, y: 0 }}
					className='flex flex-col gap-6'
					initial={{ opacity: 0, y: 20 }}
					transition={{ delay: 0.2 }}
				>
					<div
						className={`border rounded-2xl font-inter p-6 min-w-[350px] min-h-[300px] text-lg ${summaryColor}`}
					>
						<div className='mb-4'>
							<p className='flex items-center gap-2 text-sm font-semibold uppercase text-yellow-600'>
								<BriefcaseIcon className='h-5 w-5 text-yellow-500' />
								Role
							</p>
							<p>{role}</p>
						</div>

						<div className='mb-4'>
							<p className='flex items-center gap-2 text-sm font-semibold uppercase text-yellow-600'>
								<CalendarIcon className='h-5 w-5 text-yellow-500' />
								Timeline
							</p>
							<p>{timeline}</p>
						</div>

						<div className='mb-4'>
							<p className='flex items-center gap-2 text-sm font-semibold uppercase text-yellow-600'>
								<WrenchScrewdriverIcon className='h-5 w-5 text-yellow-500' />
								Tools
							</p>
							<p>{tools.join(', ')}</p>
						</div>

						<div>
							<p className='flex items-center gap-2 text-sm font-semibold uppercase text-yellow-600'>
								<LightBulbIcon className='h-5 w-5 text-yellow-500' />
								Skills
							</p>
							<p>{skills.join(', ')}</p>
						</div>
					</div>

					{link && linkLabel ?
						<Button
							label={linkLabel}
							link={link}
							showArrow={true}
							variant='yellow'
						/> : null}
					
				</motion.div>

				{image ?
					<ImageModal
						alt={`${title} preview`}
						caption={imageCaption}
						className='h-[400px]'
						src={image}
					/>
					: null}
			</div>
		</motion.div>
	);
};
