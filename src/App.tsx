import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <header className="ttt-header">
          <img src='../game-logo.png' />
          <h1>Tic Tac Toe</h1>
        </header> 
        <section className="game-board">
          Game Board
        </section>
      </section>
    </>
  )
}

export default App
