export const Square = ({ value, onSquareClick }) => {
	return (
		<button
			className='square p-2 border border-x-2 w-8 h-8 border-black flex  items-center justify-center'
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
};
