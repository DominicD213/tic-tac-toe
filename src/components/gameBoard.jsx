import React from 'react'
import { useState } from 'react'
const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
const GameBoard = ({onSelectedSqaure, activePlayerSymbol}) => {
    const [gameBoard, newGameBoard] = useState(initialBoard);

    function handleSelectSquare (rowIndex,colIndex){
        newGameBoard((prevGameBoard)=>{
            const updateGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateGameBoard
        });
        onSelectedSqaure();
    };
  return <ol id = 'game-board'>
        {gameBoard.map((row, rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        )}
    </ol>
  
}

export default GameBoard