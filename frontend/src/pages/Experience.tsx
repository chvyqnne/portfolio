import { motion } from 'framer-motion';
import { ExperiencePanel } from '../components/experience/ExperiencePanel';

export const Experience = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<ExperiencePanel />
		</motion.div>
	);
};
