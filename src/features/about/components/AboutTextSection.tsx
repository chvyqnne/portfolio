import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { AboutLinkList } from './AboutLinkList';

const TYPEWRITER_WORDS = [
	'full stack developer',
	'matcha enthusiast',
	'cat lover',
];

export const AboutTextSection = () => {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			id='text-container'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='text-3xl mb-3 min-h-[100px] lg:min-h-[0px]'>
				<p>nice to meet you!</p>
				<p className='text-3xl'>
					i&apos;m cheyanne,&nbsp;
					<span className='bg-gradient-to-r from-rose-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent'>
						<Typewriter
							cursor
							cursorStyle='✧'
							deleteSpeed={30}
							loop={0}
							typeSpeed={50}
							words={TYPEWRITER_WORDS}
						/>
					</span>
				</p>
			</div>

			<div className='text-lg leading-relaxed font-dmsans flex flex-wrap gap-x-1 mt-2 md:mt-0'>
				<p>
					I&apos;m a dev based in Northern Virginia/DC with 1 year of professional experience in
					full-stack development and 4 years spent doing summer and year-round tech internships while in school.
					I&apos;ve been fortunate to explore the different facets of programming, from data science and machine learning
					to developing web apps and databases.
					I am passionate about providing an excellent UX and crafting all of my projects with love! I find it
					extremely rewarding when I can see a project through from start to finish while being
					involved in the planning and design processes.
				</p>
			</div>
			
			<div className='mt-10 text-sm flex flex-col gap-3'>
				<div className='flex flex-row items-center gap-1'>
					<img
						alt='pin emoji'
						className='w-5 h-5 emoji-shake'
						src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4cc.svg'/>
					<p className='text-base font-semibold'>pinned links from my little corner of the internet:</p>
				</div>
				<AboutLinkList />
			</div>
		</motion.div>
	);
};
