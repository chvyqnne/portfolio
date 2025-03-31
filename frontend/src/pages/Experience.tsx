import { motion } from 'framer-motion';
import { ExperiencePanel } from '../components/experience/ExperiencePanel';
import { Footer } from '../components/Footer';

export const Experience = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='flex flex-col md:flex-row w-screen h-full md:h-screen overflow-hidden bg-gradient-to-tr from-fuchsia-50 to-white items-center justify-center px-4 md:px-10 mt-20'>
				<div className='flex flex-col'>
					<ExperiencePanel />
					<div className='mt-10'>
						<Footer
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
