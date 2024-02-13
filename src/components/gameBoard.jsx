import React from 'react'

const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
const GameBoard = ({onSelectedSqaure, turns}) => {
    let gameBoard = initialBoard;

    for (let turn of turns){
        const {square , player} = turn;
        const {row , col} = square;

        gameBoard[row][col] = player;
    }
   // const [gameBoard, newGameBoard] = useState(initialBoard);

    //function handleSelectSquare (rowIndex,colIndex){
        //newGameBoard((prevGameBoard)=>{
           //const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            //updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            //return updateGameBoard
        //});
        //onSelectedSqaure();
   //};
  return <ol id = 'game-board'>
        {gameBoard.map((row, rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={() => onSelectedSqaure(colIndex,rowIndex)} disabled = {playerSymbol !== null}>
                                {playerSymbol}
                                </button>
                        </li>
                    ))}
                </ol>
            </li>
        )}
    </ol>
}
export default GameBoard