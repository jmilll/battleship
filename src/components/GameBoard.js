import React, { useEffect, useState } from 'react'

const GameBoard = () =>  {

    // const [board, setBoard] = useState([]);

    let board = [];
    const gridSize = 10;
    
    for (let row = 0; row < gridSize; row++) {
        for (let column = 0; column < gridSize; column++ ) {
            board.push({column, row, occupied: false})
        }
    }
    //console.log(board)
    
    const handleClick = (item) => {
        console.log(item)
    }

    return (
        <div className='gameboard'>
            {board.map(item => {
                return(
                    <div className='cell' key={item.index} onClick={() => handleClick(item)}>
                    </div>
                )
            })}
        </div>
    )
};

export default GameBoard;
