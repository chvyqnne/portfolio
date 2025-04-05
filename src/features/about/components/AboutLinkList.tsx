import { SoftLiftButton } from '../../../components/ui/SoftLiftButton';

const contactItems = [
	{
		label: 'download my ',
		color: 'pink',
		href: '/Cabang_Cheyanne_Resume_Dev.pdf',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg',
		download: true,
		children: 'resume',
	},
	{
		label: 'connect with me on ',
		color: 'purple',
		href: 'https://www.linkedin.com/in/ccabang/',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f44b.svg',
		children: 'linkedin',
	},
	{
		label: 'send a kind note via ',
		color: 'yellow',
		href: 'mailto:cheyannephongsavath@gmail.com',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f48c.svg',
		email: true,
		children: 'email',
	},
	{
		label: 'explore my code on ',
		color: 'blue',
		href: 'https://github.com/chvyqnne',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f431.svg',
		children: 'github',
	},
	{
		label: 'listen to my playlists on ',
		color: 'green',
		href: 'https://open.spotify.com/user/chvyvnne',
		emojiSrc: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f49a.svg',
		children: 'spotify',
	},
] as const;

export const AboutLinkList = () => {
	return (
		<ul className='list-disc list-inside space-y-2'>
			{contactItems.map((item) => (
				<li key={item.children.toString()}>
					<span>{item.label}</span>
					<SoftLiftButton {...item}>{item.children}</SoftLiftButton>
				</li>
			))}
		</ul>
	);
};
