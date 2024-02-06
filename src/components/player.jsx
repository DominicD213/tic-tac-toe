import React from 'react'
import { useState } from 'react'

const Player = ({playerName,playerSymbol, isActive}) => {
    const [name , newName] = useState(false);
    const [inputName , newInputName] = useState(playerName)
    function updateName (){
        newName((editing) => !editing)
    }

    function handleChange (event) {
        newInputName(event.target.value)
    }
 //event is talking about when something happend in the button, the target is used to
 // get the value that was entered into the input box
  return (
    <li className= {isActive ? 'active' : undefined}>
          <span className="player">
            {!name && (
                <span className="player-name">{inputName}</span>
            )}
            {name && (
                <input type='text' required value={inputName} onChange={handleChange}/>
            )}
            <span className="player-symbol">{playerSymbol}</span>
          </span>  
        <button 
            onClick={updateName}>
            {!name && ('Edit')}
            {name && ('Save')}
        </button>
    </li>
  )
}

export default Player