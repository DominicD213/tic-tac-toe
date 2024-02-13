import Player from "./components/player"
import GameBoard from "./components/gameBoard"
import Log from "./components/log";
import { useState } from "react"

function deriveActivePlayer (logData){
  let currentPlayer = 'X';
  if (logData.length > 0 && logData[0].player === 'X'){
      currentPlayer = 'O';
    }
    return currentPlayer
}

function App() {
  const [logData, newLogData] = useState([]);
  //const [activePlayer, newActivePlayer] = useState('X');
  
  const activePlayer = deriveActivePlayer(logData);

  function handleSelectedPlayer (rowIndex, colIndex) {
    //newActivePlayer((currentlyActive)=> (currentlyActive === 'X' ? 'O':'X' ));
    newLogData((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurn = [{square: {row: rowIndex, column: colIndex}, player : currentPlayer },
        ...prevTurns
      ];
      return updateTurn;
    });
  }
  return <main>
    <div id="game-container">
      <ol id='players' className="highlight-player">
        <Player playerSymbol='X' playerName ='Player 1' isActive={activePlayer === 'X'}></Player>
        <Player playerSymbol='O' playerName ='Player 2' isActive={activePlayer === 'O'}></Player>
      </ol>
       <GameBoard onSelectedSqaure={handleSelectedPlayer} turns = {logData}/>
    </div>
    <Log turns={logData}/>
  </main>
}

export default App
