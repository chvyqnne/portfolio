import { pastelColorClasses } from '../../utils/colorPalette';

type ExperienceDetailProps = {
	readonly timeline: string;
	readonly skills: string[];
	readonly responsibilities: string[];
	readonly index: number;
};

export const ExperienceDetail = ({
	timeline,
	skills,
	responsibilities,
	index,
}: ExperienceDetailProps) => {
	const colorClass = pastelColorClasses[index];

	return (
		<div
			className={`rounded-2xl w-full md:min-w-[400px] md:max-w-[420px] max-h-[60vh] md:min-h-full flex flex-col justify-start border gap-5 p-6 md:p-8 ${colorClass}`}
		>
			<div className='mb-2'>
				<p className={`text-md ${colorClass.split(' ')[2]} font-bold font-inter uppercase`}>
					Timeline
					<span className='kaomoji-dance ml-2'>
						ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
					</span></p>
				<p className='text-md font-inter'>{timeline}</p>
			</div>
			<div className='mb-2'>
				<p className={`text-md ${colorClass.split(' ')[2]} font-inter font-bold uppercase`}>
					Skills
					<span className='kaomoji-dance ml-2'>
						⋆𐙚₊˚⊹♡
					</span>
				</p>
				<div className='flex flex-wrap gap-2 mt-1'>
					{skills.map((skill, i) => {
						const skillColorClass = pastelColorClasses[(index + i + 1) % pastelColorClasses.length];

						return (
							<span
								className={`inline-block text-sm border font-semibold px-3 py-1 rounded-full ${skillColorClass}`}
								key={i}
							>
								{skill}
							</span>
						);
					})}
				</div>
			</div>
			<div>
				<p className={`text-md ${colorClass.split(' ')[2]} font-inter font-bold uppercase`}>
					Responsibilities 
					<span className='kaomoji-dance ml-2'>
						° ᡣ𐭩 . ° .ֶֶָָ֢֢
					</span>
				</p>
				<ul className='list-disc list-inside text-md font-inter space-y-1'>
					{responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
				</ul>
			</div>
		</div>
	);
};