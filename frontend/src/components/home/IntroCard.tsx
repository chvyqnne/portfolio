import { Typewriter } from 'react-simple-typewriter';
import { Contact } from '../Contact';

export const IntroCard = () => {
	return (
		<div
			className='bg-white rounded-2xl py-20 md:mt-0 mt-20 px-5 md:px-15 w-full max-w-[300px] md:min-w-[600px] flex flex-col justify-center border gap-5'
			style={{ boxShadow: '15px 15px 0 #E1BEE7' }}
		>
			<div className='flex flex-row gap-2 items-center'>
				<p className='text-[30px] font-inter md:whitespace-nowrap text-indigo-400'>
					<Typewriter
						cursor
						cursorStyle='✧'
						delaySpeed={500}
						deleteSpeed={50}
						loop={1}
						typeSpeed={100}
						words={['hi i\'m cheyanne!']}
					/>
				</p>
				<img
					alt='tulip'
					className='emoji-shake w-7 h-7'
					src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f337.svg'
				/>
			</div>

			<div className='flex flex-row gap-2 items-center'>
				<img
					alt='woman-working-emoji'
					className='emoji-shake w-7 h-7'
					src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f469-1f3fb-200d-1f4bb.svg'
				/>
				<p className='font-ibm text-[18px]'>
					full stack engineer
				</p>
			</div>

			<div className='flex flex-row gap-2 items-center'>
				<img
					alt='sunrise-emoji'
					className='emoji-shake  w-7 h-7'
					src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f324.svg'
				/>
				<p className='font-ibm text-[18px]'>AU grad based in the DMV</p>
			</div>
			<Contact />
		</div>
	);
};