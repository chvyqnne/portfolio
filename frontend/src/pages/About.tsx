import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export const AboutTextSection = () => {
	const paragraph = `
  I graduated from American University with a degree in Computer Science and Data Science and have worked on building web and mobile-friendly tools across the legal, government, and nonprofit sectors.
  Currently at Independent Project Analysis, I contribute to full-stack application development in an Agile environment, collaborating closely with cross-functional teams to deliver internal tools that support data-driven decision-making.
  I bring a strong focus on usability, team communication, and operational efficiency, with experience working across the stack using technologies like React, Django, and PostgreSQL.
`;
	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			id='text-container'
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<div className='text-3xl h-[100px]'>
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
							words={['full stack developer', 'boba enthusiast', 'cat lover']}
						/>
					</span>
				</p>
			</div>
			<div className='text-lg leading-relaxed font-dmsans flex flex-wrap gap-x-1'>
				{paragraph.trim().split(' ').map((word, index) => (
					<motion.span
						className='transition-colors py-0.5 rounded-md hover:bg-gradient-to-r from-pink-100 via-fuchsia-200 to-indigo-100'
						key={index}
						whileHover={{ backgroundColor: '#fce7f3' }}
					>
						{word}
					</motion.span>
				))}
			</div>
			<div className='mt-10 text-sm flex flex-col gap-3'>
				<p className='text-base font-semibold'>📌 pinned links from my little corner of the internet:</p>
				<ul className='list-disc list-inside space-y-2'>
					<li>
						<span>download my </span>
						<a
							className='relative inline-block px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 hover:text-pink-500 transition before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent hover:before:border-gradient-to-r hover:before:from-pink-300 hover:before:via-fuchsia-300 hover:before:to-pink-300 before:animate-border-spin'
							download
							href='/Cabang_Cheyanne_Resume_Dev.pdf'
						>
							<img
								alt='resume emoji'
								className='inline w-4 h-4 mr-1 align-text-bottom emoji-shake'
								src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg'
							/>
							resume
						</a>
					</li>
					<li>
						<span>connect with me on </span>
						<a
							className='relative inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 hover:text-purple-500 transition before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent hover:before:border-gradient-to-r hover:before:from-purple-300 hover:before:via-pink-300 hover:before:to-purple-300 before:animate-border-spin'
							href='https://www.linkedin.com/in/ccabang/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<img
								alt='wave emoji'
								className='inline w-4 h-4 mr-1 align-text-bottom emoji-shake'
								src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f44b.svg'
							/>
							linkedin
						</a>
					</li>
					<li>
						<span>send a kind note via </span>
						<a
							className='relative inline-block px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 hover:text-yellow-500 transition before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent hover:before:border-gradient-to-r hover:before:from-yellow-300 hover:before:via-pink-200 hover:before:to-yellow-300 before:animate-border-spin'
							href='mailto:cheyannephongsavath@gmail.com'
						>
							<img
								alt='email emoji'
								className='inline w-4 h-4 mr-1 align-text-bottom emoji-shake'
								src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48c.svg'
							/>
							email
						</a>
					</li>
					<li>
						<span>explore my code on </span>
						<a
							className='relative inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 hover:text-blue-500 transition before:absolute before:inset-0 before:rounded-full before:border-2 before:border-transparent hover:before:border-gradient-to-r hover:before:from-blue-300 hover:before:via-fuchsia-200 hover:before:to-blue-300 before:animate-border-spin'
							href='https://github.com/chvyqnne'
							rel='noopener noreferrer'
							target='_blank'
						>
							<img
								alt='cat emoji'
								className='inline w-4 h-4 mr-1 align-text-bottom emoji-shake'
								src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f431.svg'
							/>
							github
						</a>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};
