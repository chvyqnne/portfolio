type Props = {
	readonly allSkills: string[];
	readonly allTools: string[];
	readonly selectedSkills: string[];
	readonly toggleSkill: (skill: string) => void;
	readonly clearAll: () => void;
	readonly projects: { id: number; title: string }[];
	readonly scrollTo: (id: number) => void;
	readonly resultCount: number;
	readonly variant?: 'desktop' | 'mobile';
};

export const FilterSidebar = ({
	allSkills,
	allTools,
	selectedSkills,
	toggleSkill,
	clearAll,
	projects,
	scrollTo,
	resultCount,
	variant = 'desktop',
}: Props) => {
	const baseClasses =
        'max-h-[900px] overflow-y-auto border bg-pink-100 p-6 flex-col justify-between shadow-[10px_10px_0_0_#FF90C6] rounded-2xl';

	const variantClasses =
        variant === 'desktop'
        	? 'hidden md:flex w-[350px] sticky top-20'
        	: 'block w-full';


	return (
		<div className={`${baseClasses} ${variantClasses}`}>
			<div className='space-y-6'>
				<h3 className='font-bold text-md font-inter'>
					— just for fun (੭˃ᴗ˂)੭⋆˚⟡˖ ࣪
				</h3>

				<div>
					<p className='text-lg font-semibold mb-2'>Projects</p>
					<ul className='bg-white border border-black rounded-xl p-4 max-h-[100px] overflow-x-auto'>
						{projects.map((p) => (
							<li key={p.id}>
								<button
									className='text-sm font-inter text-left text-gray-800 hover:text-pink-500 transition-colors'
									onClick={() => { scrollTo(p.id); }}
									type='button'
								>
									{p.title}
								</button>
							</li>
						))}
					</ul>
				</div>
                
				<div>
					<p className='text-lg font-semibold mb-2'>Tools</p>
					<div className='flex flex-wrap gap-2 bg-white border border-black rounded-xl p-4 mb-6 max-h-[100px] overflow-x-auto'>
						{allTools.map((tool) => (
							<button
								className={`text-xs px-3 py-1 rounded-full hover:bg-pink-300 font-inter border ${
									selectedSkills.includes(tool)
										? 'bg-pink-400 text-white border-black'
										: 'bg-white text-gray-800'
								}`}
								key={tool}
								onClick={() => { toggleSkill(tool); }}
								type='button'
							>
								{tool}
							</button>
						))}
					</div>
				</div>

				<div>
					<p className='text-lg font-semibold mb-2'>Skills</p>
					<div className='flex flex-wrap gap-2 bg-white border border-black rounded-xl p-4 max-h-[100px] overflow-x-auto'>
						{allSkills.map((skill) => (
							<button
								className={`text-xs px-3 py-1 rounded-full hover:bg-pink-300 font-inter border ${selectedSkills.includes(skill)
									? 'bg-pink-400 text-white border border-black'
									: 'bg-white text-gray-800'
								}`}
								key={skill}
								onClick={() => { toggleSkill(skill); }}
								type='button'
							>
								{skill}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className='flex items-center justify-between mt-6'>
				<button
					className='bg-pink-400 text-white text-xs px-4 py-1 border border-black rounded-full hover:bg-pink-600'
					onClick={clearAll}
					type='button'
				>
					Clear All
				</button>
				<span className='text-sm font-inter text-gray-700'>
					Results: {resultCount}
				</span>
			</div>
		</div>
	);
};
