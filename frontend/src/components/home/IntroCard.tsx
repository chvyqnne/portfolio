import { Contact } from '../Contact';

export const IntroCard = () => {
	return (
		<div
			className='bg-white rounded-2xl py-20 px-30 min-w-[700px] flex flex-col justify-center border gap-5'
			style={{ boxShadow: '15px 15px 0 #E1BEE7' }}
		>
			<div className='flex flex-row gap-2'>
				<p className='text-[35px] font-ptSerif font-bold text-[#C862D8] whitespace-nowrap'>
					hi i&apos;m cheyanne!
				</p>
				<img
					alt='tulip'
					className='emoji-shake'
					src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f337.svg'
				/>
			</div>

			<div className='flex flex-row gap-2 items-center'>
				<img
					alt='woman-working-emoji'
					className='emoji-shake'
					src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f469-1f3fb-200d-1f4bb.svg'
				/>
				<p className='font-ibm text-[20px] leading-snug'>
					full stack engineer by day
					<br />
					boba enthusiast by night
				</p>
			</div>

			<div className='flex flex-row gap-2 items-center'>
				<img
					alt='sunrise-emoji'
					className='emoji-shake'
					src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f324.svg'
				/>
				<p className='font-ibm text-[20px]'>au grad based in the dmv</p>
			</div>

			<Contact />
		</div>
	);
};