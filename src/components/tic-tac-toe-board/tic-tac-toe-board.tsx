import { useState } from 'react';
import './tic-tac-toe-board.css';
import { WINNING_COMBINATIONS } from '../../winning-combination';

export default function TicTacToeBoard({ changePlayer, turns, findWinner }) {
	let initialState = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	const board = [...initialState.map((innerArray)=>[...innerArray])];

	for (let turn of turns) {
		console.log(turn.player);
		board[turn.move.rowIndex][turn.move.colIndex] = turn.player;
		console.log(board);
	}

	for (let combination of WINNING_COMBINATIONS) {
		const firstWinSymbol = board[combination[0].row][combination[0].column];
		const secondWinSymbol =
			board[combination[1].row][combination[1].column];
		const thirdWinSymbol = board[combination[2].row][combination[2].column];
		if (
			firstWinSymbol &&
			firstWinSymbol == secondWinSymbol &&
			secondWinSymbol == thirdWinSymbol
		) {
			findWinner(firstWinSymbol);
			break;
		}
	}

	// function handleBoardChange(rowIndex, colIndex) {
	//     setBoard((previousState) => {
	//         let updatedState = [...previousState.map(innerArray =>
	//             [...innerArray]
	//         )];
	//         updatedState[rowIndex][colIndex] = activePlayer;
	//         return updatedState
	//     })
	//}

	return (
		<ol className="board-container">
			{board.map((row, rowIndex) => (
				<ol className="board-row" key={rowIndex}>
					{row.map((player, idx) => (
						<li key={idx}>
							<button
								className="player-move"
								onClick={() => changePlayer(rowIndex, idx)}
								disabled={player !== null}
							>
								{player}
							</button>
						</li>
					))}
				</ol>
			))}
		</ol>
	);
}
