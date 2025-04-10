import { LinkList } from '../ui/LinkList';
import { Divider } from './Divider';

type FooterProps = {
	readonly contact?: boolean;
};

export const Footer = ({
	contact,
}: FooterProps) => {
	return (
		<div>
			<Divider />
			<div className='w-full text-end md:pr-14 md:pt-10 pb-10 py-4 font-inter text-xs'>
				{contact ? (<LinkList />) : null}
				<p>made with ❤️ by @chvyn</p>
			</div>
		</div>
	);
};