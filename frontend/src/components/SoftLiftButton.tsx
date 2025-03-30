import React from 'react';

export type SoftLiftButtonProps = {
	readonly href: string;
	readonly children: React.ReactNode;
	readonly emojiSrc: string;
	readonly download?: boolean;
	readonly color?: string;
	readonly email?: boolean;
};

export const SoftLiftButton = ({
	href,
	children,
	emojiSrc,
	download = false,
	color = 'pink',
	email = false,
}: SoftLiftButtonProps) => {
	const bgClass = `bg-${color}-50`;
	const borderClass = `border-${color}-200`;
	const textClass = `text-${color}-700 hover:text-${color}-500`;
	const shadowColor = {
		pink: '#F9A8D4',
		purple: '#E1BEE7',
		yellow: '#FDE68A',
		blue: '#BFDBFE',
		green:'#A7F3D0',
	}[color] || '#E1BEE7';

	return (
		<a
			className={`relative inline-block px-3 py-1 rounded-full border transition-transform duration-200 ease-in-out transform hover:-translate-y-1 ${bgClass} ${borderClass} ${textClass}`}
			download={download}
			href={href}
			onMouseEnter={(e) => {
				(e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${shadowColor}`;
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 transparent';
			}}
			rel={!email ? 'noopener noreferrer' : undefined}
			style={{ boxShadow: '0 0 0 transparent', transition: 'box-shadow 0.2s ease-in-out' }}
			target={!email ? '_blank' : undefined}
		>
			<span className='flex items-center'>
				<img
					alt='emoji'
					className='inline w-4 h-4 mr-1 align-text-bottom emoji-shake'
					src={emojiSrc}
				/>
				{children}
			</span>
		</a>
	);
};
