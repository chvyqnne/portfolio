import { SoftLiftButton, SoftLiftButtonProps } from './ui/SoftLiftButton';

const SPACER = '✿';

const contactButtons: (SoftLiftButtonProps & { children: string })[] = [
	{
		color: 'pink',
		href: '/Cabang_Cheyanne_Resume_Dev.pdf',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg',
		download: true,
		children: 'resume',
	},
	{
		color: 'purple',
		href: 'https://www.linkedin.com/in/ccabang/',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f44b.svg',
		children: 'linkedin',
	},
	{
		color: 'yellow',
		href: 'mailto:cheyannephongsavath@gmail.com',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48c.svg',
		email: true,
		children: 'email',
	},
	{
		color: 'blue',
		href: 'https://github.com/chvyqnne',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f431.svg',
		children: 'github',
	},
];

export const LinkList = () => {
	return (
		<div className='flex md:flex-row gap-2 items-center text-[14px] font-ibm flex-wrap'>
			{contactButtons.map(({ children, ...props }, index) => (
				<div className='flex items-center gap-2' key={children}>
					<SoftLiftButton {...props}>{children}</SoftLiftButton>
					{index < contactButtons.length - 1 ? <span>{SPACER}</span> : null}
				</div>
			))}

		</div>
	);
};