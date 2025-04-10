/* eslint-disable react/no-unused-prop-types */
import { NavLink } from 'react-router-dom';
import { ContactButton } from '../ui/ContactButton';

type Props = {
	readonly onContactClick: () => void;
};

export const Navbar = ({ onContactClick }: Props) => {
	return (
		<nav className='fixed top-0 left-0 w-full md:py-4 py-2 z-50 backdrop-filter backdrop-blur-lg bg-opacity-70 bg-white'>
			<div className='max-w-6xl mx-auto flex flex-col md:justify-between md:flex-row items-center px-6'>
				<NavLink className='flex flex-row  justify-center items-center gap-2' to='/'>
					<p className='text-[20px] font-inter hover:text-[#FFC2E7]'>cheyanne cabang</p>
					<img
						alt='tulip'
						className='w-6 h-6 emoji-shake'
						src='/emojis/tulip.svg'
					/>
				</NavLink>

				<div className='flex flex-col md:flex-row md:gap-7 gap-4'>
					<div className='flex items-center text-[16px] font-inter'>
						{['about', 'experience', 'work'].map((tab, index) => (
							<div className='flex items-center' key={tab}>
								<NavLink
									className={({ isActive }) =>
										`relative px-2 underline underline-offset-10 ${isActive ? 'text-black hover:text-[#FFC2E7]' : 'hover:text-[#FFC2E7]'
										}`
									}
									to={`/${tab.toLowerCase()}`}
								>
									{({ isActive }: { readonly isActive: boolean }) => (
										<>
											{isActive ? <span className='absolute inset-0 -z-10 w-full h-full bg-[#FFC2E7] opacity-30 blur-sm rounded-full' /> : null}
											{tab}
										</>
									)}
								</NavLink>

								{index < 2 ? <span className='mx-2'>/</span> : null}
							</div>
						))}
					</div>
					<ContactButton onClick={onContactClick} />
					<div />
				</div>
			</div>
		</nav>
	);
};