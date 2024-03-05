import { Square } from '../square';

export const Board = () => {
	return (
		<div className='grid gap-4 grid-cols-3 grid-rows-3'>
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
			<Square />
		</div>
	);
};
