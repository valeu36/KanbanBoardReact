import React from 'react';

import Board from './components/board/board.component';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App container'>
				<Board />
			</div>
		);
	}
}

export default App;
