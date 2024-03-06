import './App.css';
import { Game } from './components/game';

function App() {
	return (
		<div className='p-4 bg-gray-300 max-h-svh min-h-svh flex flex-col gap-y-4 items-center justify-center'>
			<div className='header'>
				<h1 className='font-bold font-mono text-2xl'>Tic-Tac-Toe App</h1>
			</div>
			<div className='body'>
				<Game />
			</div>
		</div>
	);
}

export default App;
