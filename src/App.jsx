import Player from "./components/player"
import GameBoard from "./components/gameBoard"
import { useState } from "react"
function App() {
  const [activePlayer, newActivePlayer] = useState('X');
  
  function handleSelectedPlayer () {
    newActivePlayer((currentlyActive)=>currentlyActive === 'X' ? 'O':'X' )
  }
  return <main>
    <div id="game-container">
      <ol id='players' className="highlight-player">
        <Player playerSymbol='X' playerName ='Player 1' isActive={activePlayer === 'X'}></Player>
        <Player playerSymbol='O' playerName ='Player 2' isActive={activePlayer === 'O'}></Player>
      </ol>
       <GameBoard onSelectedSqaure={handleSelectedPlayer} activePlayerSymbol={activePlayer}/>
    </div>
  </main>
}

export default App
