import { ArrowUpRight } from 'lucide-react';

type Props = {
	readonly link: string;
	readonly label: string;
	readonly variant?: 'pink' | 'yellow';
	readonly showArrow?: boolean;
	readonly newTab?: boolean;
};

const variantMap = {
	pink: 'hover:bg-pink-500 hover:text-white',
	yellow: 'hover:bg-yellow-400 hover:text-black',
};

export const Button = ({ link, label, variant = 'pink', showArrow, newTab = false }: Props) => {
	const hoverClasses = variantMap[variant];

	return (
		<a
			className={`bg-white inline-flex items-center font-ibm gap-1 px-4 py-2 border border-black rounded-full text-xs transition-colors w-fit ${hoverClasses}`}
			href={link}
			{...(newTab && {
				target: '_blank',
				rel: 'noopener noreferrer',
			})}
		>
			{label}

			{showArrow ?
				<ArrowUpRight size={16} />
				: null
			}
		</a>
	);
};
