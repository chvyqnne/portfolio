import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FactCardGrid } from './FactCardGrid';
import { Typewriter } from 'react-simple-typewriter';

export const FunFactsSection = () => {
	const [dismissed, setDismissed] = useState(false);
	const [hasInteracted, setHasInteracted] = useState(false);
	const [bubbleText, setBubbleText] = useState<'psst' | 'gotit' | 'back'>('psst');
	const [typed, setTyped] = useState(false);
	const [activeMessage, setActiveMessage] = useState('psst... hover over me');
	
	const backMessages = [
		'back for more?',
		'oh no, you again?',
		'*stares*',
		'surely not again',
		'you like this too much',
		'fine. i guess.',
		'sigh',
		'i’m done.',
	];

	const kaomojiList = [
		'٩(⸝⸝ᵕᴗᵕ⸝⸝)و✧*.ﾟ',
		'(；⌣̀_⌣́)',
		'ಠ_ಠ',
		'(；一_一)',
		'(눈_눈)',
		'（－＿－；）',
		'(ಥ﹏ಥ)',
		'(ノಠ益ಠ)ノ彡┻━┻',
	];

	const [backIndex, setBackIndex] = useState(0);

	useEffect(() => {
		if (bubbleText !== 'psst') {
			setTyped(false);
		}

		const typeDuration = activeMessage.length * 45;
		const dismissDelay = 3000;

		const typeTimer = setTimeout(() => {
			setTyped(true);
		}, typeDuration);

		const dismissTimer =
		bubbleText === 'gotit' || bubbleText === 'back'
			? setTimeout(() => {
				setDismissed(true);
				setHasInteracted(true);
			}, typeDuration + dismissDelay)
			: undefined;

		return () => {
			clearTimeout(typeTimer);
			if (dismissTimer) clearTimeout(dismissTimer);
		};
	}, [bubbleText, activeMessage]);


	const handleMouseEnter = () => {
		if (hasInteracted) {
			const nextIndex = (backIndex + 1) % backMessages.length;
			setBackIndex(nextIndex);
			setActiveMessage(backMessages[nextIndex]);
			setBubbleText('back');
			setDismissed(false);
			setTyped(false);
		} else {
			setBubbleText('gotit');
			setActiveMessage('I knew you\'d get it!');
		}
	};

	return (
		<div className='mx-6 md:mx-40' id='facts-section-container'>
			<div className='relative inline-block w-fit mb-6'>
				<p className='text-[25px] font-bold flex items-center gap-2'>
					<span className='bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent whitespace-nowrap'>
						some fun facts
					</span>

					<span className='relative inline-block'>
						<AnimatePresence>
							{!dismissed ? <motion.div
								animate={{ opacity: 1, y: -12, x: 12 }}
								className='absolute italic -top-7 left-0 md:left-5 ml-1 bg-white border border-pink-200 rounded-xl px-3 py-2 text-sm text-rose-400 shadow-md whitespace-nowrap z-10'
								exit={{ opacity: 0, y: -4 }}
								initial={{ opacity: 0, y: -4, x: 4 }}
								transition={{ duration: 0.5 }}
							>
								{typed ? activeMessage : (
									<Typewriter
										cursor
										deleteSpeed={0}
										loop={0}
										typeSpeed={45}
										words={[activeMessage]}
									/>
								)}
								<div className='absolute -bottom-1 left-4 rotate-35 w-4 h-4 bg-white border-b border-fuchsia-200 z-[-1]' />
							</motion.div> : null}
						</AnimatePresence>

						<span
							className='kaomoji-dance bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent cursor-pointer'
							onMouseEnter={handleMouseEnter}
						>
							{bubbleText === 'back'
								? kaomojiList[backIndex] || kaomojiList[kaomojiList.length - 1]
								: '٩(⸝⸝ᵕᴗᵕ⸝⸝)و✧*.ﾟ'}
						</span>

					</span>
				</p>
			</div>

			<FactCardGrid
				items={[
					{ label: 'education', content: 'B.S. in Data Science & Computer Science from American University in Washington, DC', kaomoji: '(๑•̀ㅂ•́)و✧' },
					{ label: 'skills', content: 'Full-stack development, data analysis & visualization', kaomoji: '┗(＾0＾)┓' },
					{ label: 'tech stack', content: 'TypeScript, JavaScript, React, React-Query, Django, Tailwind CSS, HTML/CSS, SQL, Go, Python', kaomoji: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧' },
					{ label: 'tools', content: 'Git, Docker, AWS, Postman, Figma, Linux, ServiceNow', kaomoji: '(•̀ᴗ•́)و ̑̑' },
					{ label: 'hometown', content: 'Nānākuli, Hawaiʻi', kaomoji: '(*´∀｀)ﾉ🌺' },
					{ label: 'languages', content: 'English, learning Mandarin Chinese 中文 + Korean 한국어', kaomoji: '( ˘▽˘)っ♨' },
					{ label: 'hobbies', content: 'puzzling, hiking, language learning', kaomoji: 'ヾ(＾∇＾)' },
					{ label: 'personality type', content: 'ENFJ: the Protagonist', kaomoji: '(づ｡◕‿‿◕｡)づ' },
					{ label: 'drink order', content: 'iced matcha latte with vanilla and oat milk', kaomoji: '₍˶ᵔ ᵕ ᵔ˶₎🍵' },
				]}
			/>
		</div>
	);
};
