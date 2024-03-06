import { useState } from 'react';
import { Board } from '../board';

export const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	const handlePlay = (nextSquares) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	};

	const jumpTo = (nextMove) => {
		setCurrentMove(nextMove);
	};

	const handleReset = () => {
		setHistory([Array(9).fill(null)]);
		setCurrentMove(0);
	};
	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = `Go to move #${move}`;
		} else {
			description = `Go to game start`;
		}
		return (
			currentMove >= 1 && (
				<li key={move}>
					<button
						className='px-2 py-1 rounded-lg text-sm bg-yellow-200'
						onClick={() => jumpTo(+move)}
					>
						{description}
					</button>
				</li>
			)
		);
	});
	return (
		<div className='game flex flex-col gap-y-4'>
			<div className='game-board'>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className='game-info'>
				<ol className='flex flex-col gap-y-2 items-center'>{moves}</ol>
			</div>
			<div className='game-reset flex flex-col gap-y-2 items-center'>
				{currentMove >= 1 && (
					<button className='px-2 py-1 rounded-lg text-sm bg-red-200' onClick={handleReset}>
						Reset
					</button>
				)}
			</div>
		</div>
	);
};
