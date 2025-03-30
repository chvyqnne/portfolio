export const Contact = () => {
	return (
		<div className='flex md:flex-row gap-3 items-center text-[14px] font-ibm flex-wrap'>
			<img
				alt='books-emoji'
				className='emoji-shake w-6 h-6'
				src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f5d2.svg'
			/>
			<p className='underline underline-offset-4 hover:text-[#FFC2E7]'>
				<a download href='/Cabang_Cheyanne_Resume_Dev.pdf'>resume</a>
			</p>
			/
			<img
				alt='wave-emoji'
				className='emoji-shake w-6 h-6'
				src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f44b.svg'
			/>
			<p className='underline underline-offset-4 hover:text-[#FFC2E7]'>
				<a href='https://www.linkedin.com/in/ccabang/' rel='noopener noreferrer' target='_blank'>
					linkedin
				</a>
			</p>
			/
			<img
				alt='letter-emoji'
				className='emoji-shake w-6 h-6'
				src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48c.svg'
			/>
			<p className='underline underline-offset-4 hover:text-[#FFC2E7]'>
				<a href='mailto:cheyannephongsavath@gmail.com'>
					email
				</a>
			</p>
			/
			<img
				alt='cat-emoji'
				className='emoji-shake w-6 h-6'
				src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f431.svg'
			/>
			<p className='underline underline-offset-4 hover:text-[#FFC2E7]'>
				<a href='https://github.com/chvyqnne' rel='noopener noreferrer' target='_blank'>
					github
				</a>
			</p>
		</div>
	);
};