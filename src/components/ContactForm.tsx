import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const ContactForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<button
				className='border rounded-md px-2 py-1 hover:bg-pink-400 hover:text-white hover:border-pink-500'
				onClick={handleOpen}
				type='button'
			>
				contact
			</button>

			{isOpen ? <div className='w-full bg-white border-t border-gray-200 shadow-xl p-4 z-50 animate-slide-up'>
				<form className='max-w-2xl mx-auto flex flex-col gap-3'>
					<div className='flex justify-between items-center'>
						<h2 className='text-lg font-semibold'>Contact Me</h2>
						<button
							className='text-sm text-gray-500 hover:text-pink-500'
							onClick={handleClose}
							type='button'
						>
							<XMarkIcon />
						</button>
					</div>

					<label className='flex flex-col text-sm'>
						Name
						<input
							className='border rounded px-2 py-1'
							onChange={e => { setName(e.target.value); }}
							type='text'
							value={name}
						/>
					</label>

					<label className='flex flex-col text-sm'>
						Email
						<input
							className='border rounded px-2 py-1'
							onChange={e => { setEmail(e.target.value); }}
							type='email'
							value={email}
						/>
					</label>

					<label className='flex flex-col text-sm'>
						Message
						<textarea
							className='border rounded px-2 py-1'
							onChange={e => { setMessage(e.target.value); }}
							value={message}
						/>
					</label>

					<div className='flex justify-end gap-2'>
						<button className='bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600' type='submit'>
							submit
						</button>
						<button
							className='border px-3 py-1 rounded hover:bg-gray-100'
							onClick={handleClose}
							type='button'
						>
							cancel
						</button>
					</div>
				</form>
			</div> : null}
		</div>
	);
};
