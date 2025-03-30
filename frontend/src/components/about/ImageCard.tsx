export const ImageCard = () => {
	return (
		<div
			className='bg-white rounded-2xl w-[300px] h-[400px] flex-shrink-0 flex flex-col justify-center items-center border gap-5'
			id='image-container'
			style={{ boxShadow: '15px 15px 0 #E1BEE7' }}
		>
			<img alt='headshot' src='./public/headshot.jpg' />
		</div>
	);
};