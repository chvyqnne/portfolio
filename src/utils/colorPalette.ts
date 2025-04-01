export const pastelColorClasses: string[] = [
	'bg-pink-50 border-pink-200 text-pink-700',
	'bg-yellow-50 border-yellow-200 text-yellow-700',
	'bg-blue-50 border-blue-200 text-blue-700',
	'bg-lime-50 border-lime-200 text-lime-700',
	'bg-teal-50 border-teal-200 text-teal-700',
	'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
	'bg-orange-50 border-orange-200 text-orange-700',
	'bg-indigo-50 border-indigo-200 text-indigo-700',
	'bg-purple-50 border-purple-200 text-purple-700',
];

export const pastelColorMap = {
	pink: 'bg-pink-50 border-pink-200 text-pink-700 hover:text-pink-500',
	purple: 'bg-purple-50 border-purple-200 text-purple-700 hover:text-purple-500',
	yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700 hover:text-yellow-500',
	blue: 'bg-blue-50 border-blue-200 text-blue-700 hover:text-blue-500',
	green: 'bg-green-50 border-green-200 text-green-700 hover:text-green-500',
} as const;

export type PastelColor = keyof typeof pastelColorMap;

export const pastelShadows: Record<PastelColor, string> = {
	pink: '#F9A8D4',
	purple: '#E1BEE7',
	yellow: '#FDE68A',
	blue: '#BFDBFE',
	green: '#A7F3D0',
};
