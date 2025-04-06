import { motion } from 'framer-motion';
import { Footer } from '../../components/layout/Footer';
import { ExperiencePanel } from './components/ExperiencePanel';

export const Experience = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='flex flex-col lg:flex-row w-full h-full lg:h-screen overflow-hidden bg-gradient-to-tr from-fuchsia-50 to-white items-center justify-center lg:px-10 px-5'>
				<div className='flex flex-col'>
					<ExperiencePanel />
					<div className='mt-10'>
						<Footer />
					</div>
				</div>
			</div>
		</motion.div>
	);
};
