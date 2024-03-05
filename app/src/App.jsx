import './App.css';
import { Board } from './components/board';

function App() {
	return (
		<div className='p-4 bg-gray-300 max-h-svh min-h-svh flex flex-col items-center justify-start'>
			<div className='header'>
				<h1 className='font-bold font-mono text-2xl'>Tic-Tac-Toe App</h1>
			</div>
			<div className='body'>
				<Board />
			</div>
		</div>
	);
}

export default App;
