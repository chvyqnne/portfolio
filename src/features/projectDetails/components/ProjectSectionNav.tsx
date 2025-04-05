import { useEffect, useState } from 'react';
import { pastelColorClasses } from '../../../utils/colorPalette';

type Props = {
	readonly sections?: readonly { readonly title: string }[];
};

export const ProjectSectionNav = ({ sections }: Props) => {
	const [activeSection, setActiveSection] = useState<string>('summary');

	useEffect(() => {
		const sectionIds = ['summary', ...sections?.map((_, index) => `section-${index}`) ?? []];
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((entry) => entry.isIntersecting);
				if (visible?.target.id) {
					setActiveSection(visible.target.id);
				}
			},
			{ rootMargin: '-30% 0px -60% 0px', threshold: 0.1 },
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => { observer.disconnect(); };
	}, [sections]);

	return (
		<div className='border border-black rounded-2xl min-w-[250px] bg-white p-6 md:min-h-[70vh] max-h-[80vh] overflow-auto'>
			<ul className='text-xl space-y-6 font-inter'>
				<li>
					<a
						className={`block px-3 py-1 rounded-md transition-colors ${
							activeSection === 'summary' ? 'bg-gray-100 text-gray-800' : 'hover:text-yellow-600'
						}`}
						href='#summary'
					>
						Summary
					</a>
				</li>
				{sections?.map((section, index) => {
					const sectionId = `section-${index}`;
					const isActive = activeSection === sectionId;
					const colorClass = pastelColorClasses[(index) % pastelColorClasses.length];

					return (
						<li key={index}>
							<a
								className={`block px-3 py-1 rounded-md transition-colors ${
									isActive ? colorClass : 'hover:text-yellow-600'
								}`}
								href={`#${sectionId}`}
							>
								{section.title}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};