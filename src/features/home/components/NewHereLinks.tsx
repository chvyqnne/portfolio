import { NavLink } from 'react-router-dom';

export const NewHereLinks = () => {
	return (
		<div className='text-center mx-4 mt-4 text-lg font-inter text-gray-700 italic'>
			new here? check out my{' '}
			<NavLink
				className='inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors'
				to='/work'
			>
				projects
			</NavLink>
			,{' '}
			<NavLink
				className='inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors'
				to='/experience'
			>
				experience
			</NavLink>
			, or learn more{' '}
			<NavLink
				className='inline-flex items-center font-semibold underline underline-offset-4 decoration-pink-400 hover:text-pink-500 transition-colors'
				to='/about'
			>
				about me
			</NavLink>
			<span aria-label='flower' className='emoji-shake ml-1' role='img'>
				🌸
			</span>
		</div>
	);
};
