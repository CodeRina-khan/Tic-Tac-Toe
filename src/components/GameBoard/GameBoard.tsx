import { useState } from 'react';
import Player from '../Players/Players';
import TicTacToeBoard from '../tic-tac-toe-board/tic-tac-toe-board';
import './GameBoard.css';
import GameOver from '../GameOver/GameOver';

export default function GameBoard() {
    const [activePlayer, setActivePlayer] = useState('X');

    const [turns, setTurns] = useState([]);

    const [winner, setWinner]= useState();

    function getWinner(player) {
        console.log('called');
        setWinner(player);
    }

    function handlePlayerChange(rowIndex, colIndex){
        setActivePlayer((prePlayer) => prePlayer == 'X' ? 'O' : 'X');
        setTurns((previousTurns) => {
            let currPlayer = 'X';
            if (previousTurns.length > 0 && previousTurns[0].player == 'X') {
                currPlayer = 'O';
            }
            let updatedTurns = [{ move: { rowIndex, colIndex } , player: currPlayer},...previousTurns];
            return updatedTurns;
        })
    }

    return (
        <>
         {winner ? <GameOver winner={winner} /> : null}
        <div className="gameboard">
			<div className="players">
				<Player
					initialname="Player 1"
					isActive={activePlayer == 'X'}
					symbol="X"
				/>
				<Player
					initialname="Player 2"
					isActive={activePlayer == 'O'}
					symbol="O"
				/>
            </div>
			<div className="board">
				<TicTacToeBoard
					turns={turns}
					findWinner = {getWinner}
					changePlayer={handlePlayerChange}
				/>
			</div>
		</div>
        </>
	);
}