type Props = {
	readonly onClick: () => void;
};

export const ContactButton = ({ onClick }: Props) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='px-4 py-2 text-sm font-semibold text-pink-700 bg-pink-50 border border-pink-200 rounded-xl hover:bg-gradient-to-r hover:from-pink-200 hover:to-rose-400 hover:text-white'
		>
			contact ✧
		</button>
	);
};
