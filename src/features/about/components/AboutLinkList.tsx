import { SoftLiftButton } from '../../../components/ui/SoftLiftButton';

const contactItems = [
	{
		label: 'download my ',
		color: 'pink',
		href: '/docs/Cabang_Cheyanne_Resume_Dev.pdf',
		emojiSrc: '/emojis/notes.svg',
		download: true,
		children: 'resume',
	},
	{
		label: 'connect with me on ',
		color: 'purple',
		href: 'https://www.linkedin.com/in/ccabang/',
		emojiSrc: '/emojis/shaka.svg',
		children: 'linkedin',
	},
	{
		label: 'send a kind note via ',
		color: 'yellow',
		href: 'mailto:cheyannephongsavath@gmail.com',
		emojiSrc: '/emojis/letter.svg',
		email: true,
		children: 'email',
	},
	{
		label: 'explore my code on ',
		color: 'blue',
		href: 'https://github.com/chvyqnne',
		emojiSrc: '/emojis/cat.svg',
		children: 'github',
	},
	{
		label: 'listen to my playlists on ',
		color: 'green',
		href: 'https://open.spotify.com/user/chvyvnne',
		emojiSrc: '/emojis/greenHeart.svg',
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
