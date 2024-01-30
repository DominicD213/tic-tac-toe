import Player from "./components/player"
function App() {

  return <main>
    <div id="game-container">
      <ol id='players'>
        <Player playerSymbol='X'>Player 1</Player>
        <Player playerSymbol='O'>Player 2</Player>
      </ol>
    </div>
  </main>
}

export default App
