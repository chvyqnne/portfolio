import { Divider } from '../../components/layout/Divider';
import { motion } from 'framer-motion';
import { Footer } from '../../components/layout/Footer';
import { AboutTextSection } from './components/AboutTextSection';
import { FunFactsSection } from './components/FunFactsSection';
import { ImageCard } from './components/ImageCard';

export const About = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='bg-gradient-to-tr from-fuchsia-50 to-white animate-gradient w-full h-full' id='about-background'>
				<div className='flex flex-col w-full' id='about-content-container'>
					<div className='flex flex-col lg:flex-row gap-10 justify-center mt-20 mx-6 md:mx-40 md:mt-10'>
						<AboutTextSection />
						<motion.div
							whileHover={{
								y: -6,
								transition: { duration: 0.3, ease: 'easeInOut' },
							}}
						>
							<ImageCard />
						</motion.div>
					</div>
					<div className='my-10 mx-6 md:mx-30'>
						<Divider />
					</div>
					<FunFactsSection />
					<div className='mt-10 mx-6 md:mx-30'>
						<Footer />
					</div>
				</div>
			</div>
		</motion.div>
	);
};
