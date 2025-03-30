import { IntroCard } from '../components/home/IntroCard';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import { NavLink } from 'react-router-dom';

export const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			className='relative'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='flex overflow-hidden items-center justify-center h-screen bg-gradient-to-tr from-fuchsia-100 to-white flex-col gap-10 relative z-10'>
				<motion.div
					whileHover={{
						y: -6,
						transition: { duration: 0.3, ease: 'easeInOut' },
					}}
				>
					<IntroCard />
				</motion.div>

				<div className='text-center mt-4 text-lg font-inter text-gray-700 italic'>
					new here? check out my{' '}
					<NavLink
						className='inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors'
						to='/work'
					>
						projects
					</NavLink>
					,{' '}
					<NavLink
						className='inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors'
						to='/experience'
					>
						experience
					</NavLink>
					, or learn more {' '}
					<NavLink
						className='inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors'
						to='/about'
					>
						about me
					</NavLink>
					<span aria-label='flower' className='emoji-shake ml-1' role='img'>
						🌸
					</span>
				</div>
				<div className='w-[90%]'>
					<Footer />
				</div>
			</div>
		</motion.div>
	);
};
