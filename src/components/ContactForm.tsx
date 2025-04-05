/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import { send } from '@emailjs/browser';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {
	readonly onClose: () => void;
};

export const ContactForm = ({ onClose }: Props) => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const env = import.meta.env;

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email, message } = form;
		if (!name || !email || !message) return;

		try {
			await send(
				env.VITE_EMAILJS_SERVICE_ID,
				env.VITE_EMAILJS_TEMPLATE_ID,
				{ name, email, message },
				env.VITE_EMAILJS_PUBLIC_KEY,
			);
			setStatus('success');
			setForm({ name: '', email: '', message: '' });
		} catch {
			setStatus('error');
		}
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		void handleSubmit(e);
	};

	useEffect(() => {
		if (status === 'success') {
			const timeout = setTimeout(() => {
				onClose();
				setStatus('idle');
			}, 3000);
			return () => { clearTimeout(timeout); };
		}
	}, [status, onClose]);

	const isFormValid = form.name && form.email && form.message;

	return (
		<div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-full px-4'>
			<motion.div
				animate={{ opacity: 1, y: 0 }}
				className='max-w-2xl mx-auto rounded-xl bg-gradient-to-tr from-fuchsia-50 to-white border border-pink-200 shadow-md p-6 backdrop-blur-md'
				exit={{ opacity: 0, y: 20 }}
				initial={{ opacity: 0, y: 30 }}
				transition={{ duration: 0.4, ease: 'easeOut' }}
			>
				<form className='flex flex-col gap-5' onSubmit={handleFormSubmit}>
					<div className='flex justify-between items-center'>
						<h2 className='text-lg font-semibold text-pink-700'>
							Contact Me <span className='kaomoji-dance ml-1'>٩(◕‿◕｡)۶</span>
						</h2>
						<button
							aria-label='close-contact-form'
							className='text-sm text-pink-500 hover:text-pink-700 transition-colors'
							onClick={onClose}
							type='button'
						>
							<XMarkIcon className='w-5 h-5' />
						</button>
					</div>

					<label className='flex flex-col text-sm text-pink-800'>
						Name
						<input
							className='mt-1 border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300'
							name='name'
							onChange={handleChange}
							required
							type='text'
							value={form.name}
						/>
					</label>

					<label className='flex flex-col text-sm text-pink-800'>
						Email
						<input
							className='mt-1 border border-pink-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300'
							name='email'
							onChange={handleChange}
							required
							type='email'
							value={form.email}
						/>
					</label>

					<label className='flex flex-col text-sm text-pink-800'>
						Message
						<textarea
							className='mt-1 border border-pink-200 rounded px-3 py-2 resize-none h-24 focus:outline-none focus:ring-2 focus:ring-pink-300'
							name='message'
							onChange={handleChange}
							required
							value={form.message}
						/>
					</label>

					{status === 'success' ? <p aria-live='polite' className='text-green-600 text-sm'>
						Thank you for sending your message! I’ll reach back out soon. (＾▽＾)
					</p> : null}
					{status === 'error' ? <p aria-live='polite' className='text-red-500 text-sm'>
						Something went wrong. Please try again later. (；⌣̀_⌣́)
					</p> : null}

					<div className='flex justify-end gap-3'>
						<button
							className='bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 disabled:opacity-50 transition'
							disabled={!isFormValid}
							type='submit'
						>
							submit
						</button>
						<button
							className='border border-pink-300 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-100 transition'
							onClick={onClose}
							type='button'
						>
							cancel
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};
