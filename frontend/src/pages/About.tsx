import { AboutTextSection } from '../components/about/AboutTextSection';
import { Divider } from '../components/Divider';
import { FunFactsSection } from '../components/about/FunFactsSection';
import { ImageCard } from '../components/about/ImageCard';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';

export const About = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }
			}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='h-full bg-gradient-to-tr from-fuchsia-50 to-white animate-gradient w-full' id='about-background'>
				<div className='flex flex-col my-30 w-full' id='about-content-container'>
					<div className='flex flex-col md:flex-row gap-10 justify-center mt-10 mx-40'>
						<AboutTextSection />
						<ImageCard />
					</div>
					<div className='mt-20 mb-10 mx-30'>
						<Divider />
					</div>
					<FunFactsSection />
					<div className='pt-10'>
						<Footer />
					</div>
				</div>
			</div>
		</motion.div >
	);
};
