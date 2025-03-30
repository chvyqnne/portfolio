type Props = {
	readonly sections?: readonly { readonly title: string }[];
};

export const ProjectSectionNav = ({ sections }: Props) => {
	return (
		<div className='border border-black rounded-2xl min-w-[250px] bg-white p-6 md:min-h-[70vh] max-h-[80vh] overflow-auto'>
			<ul className='text-xl space-y-6 font-inter'>
				<li>
					<a className='hover:text-yellow-600' href='#summary'>
						Summary
					</a>
				</li>
				{sections?.map((section, index) => (
					<li key={index}>
						<a className='hover:text-yellow-600' href={`#section-${index}`}>
							{section.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
