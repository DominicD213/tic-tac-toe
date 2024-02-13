import React from 'react'

const Log = ({turns}) => {
  return (
    <div>
      <ol className='log'>
        {turns.map(turns => <li key = {`${turns.square.row} ${turns.square.column}`}> 
        {turns.player} selected {turns.square.row}, {turns.square.column}
        </li>)}
      </ol>
    </div>
  )
}

export default Log