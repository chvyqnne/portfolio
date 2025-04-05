type Props = {
	readonly onClick: () => void;
};

export const ContactButton = ({ onClick }: Props) => {
	return (
		<button
			className='border rounded-md px-2 py-1 hover:bg-pink-400 hover:text-white hover:border-pink-500'
			onClick={onClick}
			type='button'
		>
			contact
		</button>
	);
};
