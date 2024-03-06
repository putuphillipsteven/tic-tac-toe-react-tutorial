import { Square } from '../square';
import { calculateWinner } from '../../services/utils';

export const Board = ({ xIsNext, squares, onPlay }) => {
	const handleClick = (i) => {
		if (squares[i] || calculateWinner(squares)) return;
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? 'X' : 'O';
		onPlay(nextSquares);
	};

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = `You are the winner!`;
	} else {
		status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}
	return (
		<div className='flex flex-col gap-y-4 items-center'>
			<div className='grid gap-4 grid-cols-3 grid-rows-3'>
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
			<div className='text-center'>
				{winner && <p className='font-bold'>Congratulations {winner} player,</p>}
				<p className='font-bold'>{status}</p>
			</div>
		</div>
	);
};
