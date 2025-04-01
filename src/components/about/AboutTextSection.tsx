import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { ContactList } from './ContactList';

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
			<div className='text-3xl mb-3'>
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
					I&apos;m a Software Engineer based in DC with 2 years of professional experience in
					full-stack development. I was born and raised in a rural small town on
					the west coast of Oʻahu, Hawaiʻi. After graduating from American University with my degree in Data Science +
					Computer Science, I’ve been honing my skills as a full-stack developer with various
					side projects and through my work at Independent Project Analysis. I am passionate
					about providing an excellent UX and creating all of my projects with love! I find it
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
				<ContactList />
			</div>
		</motion.div>
	);
};
