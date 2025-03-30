import React from 'react';

type InfoGridItem = {
	label: string
	content: string
};

type InfoGridProps = {
	readonly items: InfoGridItem[]
};

export const InfoGrid = ({ items }: InfoGridProps) => {
	return (
		<div className='grid grid-cols-[200px_1fr] gap-10 mt-5'>
			{items.map(({ label, content }) => (
				<React.Fragment key={label}>
					<p className='underline underline-offset-4 text-xl'>{label}</p>
					<p className='font-dmsans text-lg'>{content}</p>
				</React.Fragment>
			))}
		</div>
	);
};
