import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { SoftLiftButton } from '../SoftLiftButton';

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
			<div className='text-lg leading-relaxed font-dmsans flex flex-wrap gap-x-1 mt-2 md:mt-0'>
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
				<div className='flex flex-row items-center gap-1'>
					<img
						alt='pin emoji'
						className='w-5 h-5 emoji-shake'
						src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4cc.svg'/>
					<p className='text-base font-semibold'>pinned links from my little corner of the internet:</p>
				</div>
				<ul className='list-disc list-inside space-y-2'>
					<li>
						<span>download my </span>
						<SoftLiftButton
							color='pink'
							download
							emojiSrc='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg'
							href='/Cabang_Cheyanne_Resume_Dev.pdf'
						>
							resume
						</SoftLiftButton>
					</li>
					<li>
						<span>connect with me on </span>
						<SoftLiftButton
							color='purple'
							emojiSrc='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f44b.svg'
							href='https://www.linkedin.com/in/ccabang/'
						>
							linkedin
						</SoftLiftButton>
					</li>
					<li>
						<span>send a kind note via </span>
						<SoftLiftButton
							color='yellow'
							email
							emojiSrc='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48c.svg'
							href='mailto:cheyannephongsavath@gmail.com'
						>
							email
						</SoftLiftButton>
					</li>
					<li>
						<span>explore my code on </span>
						<SoftLiftButton
							color='blue'
							emojiSrc='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f431.svg'
							href='https://github.com/chvyqnne'
						>
							github
						</SoftLiftButton>
					</li>
					<li>
						<span>listen to my playlists on </span>
						<SoftLiftButton
							color='green'
							emojiSrc='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f49a.svg'
							href='https://open.spotify.com/user/chvyvnne'
						>
							spotify
						</SoftLiftButton>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};
