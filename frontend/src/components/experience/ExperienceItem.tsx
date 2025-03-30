type ExperienceItemProps = {
	readonly year: string;
	readonly title: string;
	readonly company: string;
	readonly selected: boolean;
	readonly onClick: () => void;
};

export const ExperienceItem = ({ year, title, company, selected, onClick }: ExperienceItemProps) => (
	<div
		className={`grid grid-cols-[90px_1fr] gap-4 cursor-pointer transition-all duration-300 ${selected ? 'text-[#004BCD] font-semibold' : 'text-gray-800'
		}`}
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
		<div className='text-6xl font-cardo font-bold leading-tight'>{year}</div>
		<div className='flex flex-col justify-center ml-12'>
			<p className='text-4xl font-inter font-bold'>{title}</p>
			<p className='text-sm text-gray-600 font-inter'>{company}</p>
		</div>
	</div>
);
