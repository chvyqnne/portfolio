import { pastelColorClasses } from '../../../utils/colorPalette';

type ExperienceItemProps = {
	readonly year: string;
	readonly title: string;
	readonly company: string;
	readonly selected: boolean;
	readonly onClick: () => void;
	readonly colorIndex: number;
};

export const ExperienceItem = ({
	year,
	title,
	company,
	selected,
	onClick,
	colorIndex,
}: ExperienceItemProps) => {
	const colorClass = pastelColorClasses[colorIndex];
	const textColor = colorClass.split(' ')[2]; 

	const selectedClasses = selected
		? `${textColor} font-semibold`
		: 'text-black';

	return (
		<div
			className={`grid md:grid-cols-[80px_1fr] md:gap-4 cursor-pointer transition-all duration-300 ${selectedClasses}`}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onClick();
				}
			}}
			role='button'
			tabIndex={0}
		>
			<div
				className={`text-6xl font-cardo font-bold leading-tight ${selected ? textColor : 'text-gray-800'}`}>
				{year}
			</div>

			<div className='flex flex-col justify-center md:ml-12'>
				<p className={`text-4xl font-inter font-bold w-full ${selected ? textColor : 'text-gray-800'}`}>{title}</p>
				<p className='italic text-sm text-gray-600 font-inter'>{company}</p>
			</div>
		</div>
	);
};
