import { FactCardGrid } from './FactCardGrid';

export const FunFactsSection = () => {
	return (
		<div className='mx-40' id='facts-section-container'>
			<p className='text-[25px] mb-4 font-bold flex items-center gap-2'>
				<span className='bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent'>
					some fun facts
				</span>
				<span className='kaomoji-dance bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent'>
					٩(⸝⸝ᵕᴗᵕ⸝⸝)و✧*.ﾟ
				</span>
			</p>
			<FactCardGrid
				items={[
					{ label: 'education', content: 'B.S. in Computer Science & Data Science from American University', emoji: '🎓' },
					{ label: 'skills', content: 'Full-stack development, UI/UX design, data analysis, Agile collaboration', emoji: '🛠️' },
					{ label: 'tech stack', content: 'TypeScript, React, Django, Tailwind CSS, PostgreSQL, Go, Python', emoji: '💻' },
					{ label: 'tools', content: 'Git, Docker, AWS, Postman, Figma, Linux, ServiceNow', emoji: '🧰' },
					{ label: 'hometown', content: 'Waiʻanae, Hawaiʻi', emoji: '🌺' },
					{ label: 'languages', content: 'English, learning Mandarin Chinese 中文 + Korean 한국어', emoji: '🗣️' },
					{ label: 'hobbies', content: 'puzzling, hiking, language learning', emoji: '🧩' },
					{ label: 'personality type', content: 'ENFJ – the warm-hearted, organized type', emoji: '🌞' },
					{ label: 'coffee order', content: 'iced matcha latte with vanilla and oat milk', emoji: '🍵' },
				]}
			/>
		</div>
	);
};
