import { useState } from 'react';
import Player from '../Players/Players';
import TicTacToeBoard from '../tic-tac-toe-board/tic-tac-toe-board';
import './GameBoard.css';
import GameOver from '../GameOver/GameOver';

export default function GameBoard() {
    const [activePlayer, setActivePlayer] = useState('X');

    const [turns, setTurns] = useState([]);

    const [winner, setWinner] = useState();

    const [players, setPlayers] = useState(
        {
            'X': 'Player 1',
            'O': 'Player 2'
        });
    

    function getWinner(playerSymbol) {
        console.log(playerSymbol+"won");
        setWinner(players[playerSymbol]);
    }

    function rematch() {
        setTurns([]);
        setActivePlayer('X');
        setWinner(undefined);
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


    function handlePlayerNameChange(symbol, newName) {
        setPlayers((previousPlayer) => { return { ...previousPlayer, [symbol]: newName } });
    }

    let isDraw = turns.length == 9;

    return (
		<>
			{winner || isDraw ?
				<GameOver winner={winner} rematch={rematch} />
			:	null}
			<div className="gameboard">
				<div className="players">
					<Player
						initialname="Player 1"
						isActive={activePlayer == 'X'}
						symbol="X"
						handlePlayerNameChange={handlePlayerNameChange}
					/>
					<Player
						initialname="Player 2"
						isActive={activePlayer == 'O'}
						symbol="O"
						handlePlayerNameChange={handlePlayerNameChange}
					/>
				</div>
				<div className="board">
					<TicTacToeBoard
						turns={turns}
						findWinner={getWinner}
						changePlayer={handlePlayerChange}
					/>
				</div>
			</div>
		</>
	);
}