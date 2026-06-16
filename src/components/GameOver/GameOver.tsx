import './GameOver.css'
export default function GameOver({ winner, rematch }) {
    return (
        <div className="gameOver">
            <h1>GAME OVER!!!</h1>
            <div className="winner">
              {winner ? `${winner} WON !!!` : "Match Draw"}
            </div>
            <button className='rematch' onClick={rematch}>Rematch</button>
     </div>
 )
}