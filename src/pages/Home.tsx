import { IntroCard } from '../components/home/IntroCard';
import { motion } from 'framer-motion';
import { Footer } from '../components/layout/Footer';
import { NewHereLinks } from '../components/home/NewHereLinks';

export const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='flex overflow-hidden items-center justify-center h-full md:h-screen bg-gradient-to-tr from-fuchsia-50 to-white flex-col gap-10 relative z-10'>
				<motion.div
					animate={{ scale: 1, opacity: 1, y: 0 }}
					initial={{ scale: 0.95, opacity: 0, y: 20 }}
					whileHover={{
						y: -6,
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<IntroCard />
				</motion.div>

				<NewHereLinks />

				<div className='w-[90%]'>
					<Footer />
				</div>
			</div>
		</motion.div>
	);
};
