import React from 'react'
import { useState } from 'react'

const Player = ({children,playerSymbol}) => {
    const [name , newName] =  useState(false);

    function updateName (){
        newName((editing) => !editing)
    }

  return (
    <li>
          <span className="player">
            {!name && (
                <span className="player-name">{children}</span>
            )}
            {name && (
                <input type='text' required value={children}/>
            )}
            <span className="player-symbol">{playerSymbol}</span>
          </span>  
        <button onClick={updateName}>
            {!name && ('Edit')}
            {name && ('Save')}
        </button>
    </li>
  )
}

export default Player