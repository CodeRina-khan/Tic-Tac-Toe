import './GameOver.css'
export default function GameOver({ winner }) {
    return (
        <div className="gameOver">
            <div className="winner">
                {winner} WON !!!
            </div>
     </div>
 )
}