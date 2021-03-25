import React, { useEffect, useState } from 'react'

const GameBoard = () =>  {

    function fillTiles(xCoord, yCoord, shipLength, rotated) {
        let filled = []
      
        filled.push({x: xCoord, y: yCoord})
      
        for (let i = 1; i < shipLength; i++) {
          !rotated ? 
            filled.push({x: xCoord + i, y: yCoord})
          : filled.push({x: xCoord, y: yCoord + i})
        }
        return filled;
    }

    function findTile(xCoord, yCoord) {
        let tile = board.find(
            (({x}) => x === xCoord) && (({y}) => y === yCoord)
        )
        console.log(tile)
        console.log(board.indexOf(tile))
        tile.occupied = true;
        console.log(board)
        //tile.classList.add('ship-place')
    }

    // const [board, setBoard] = useState([]);


    function test() {
        console.log('test')
    }

    let board = [];
    const gridSize = 10;
    
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++ ) {
            board.push({x, y, occupied: false})
        }
    }
    // for (let row = 0; row < gridSize; row++) {
    //     for (let column = 0; column < gridSize; column++ ) {
    //         board.push({column, row, occupied: false})
    //     }
    // }
    //console.log(board)
    
    const handleClick = (item) => {
        console.log(item)
        console.log(item.x +', '+ item.y)
        //console.log('coord1 x = ' + item.column)
        //console.log('coord2 y = ' + item.row)
    }

    return (
        <div className='gameboard'>
            {board.map(item => {
                return(
                    <div className={'cell '+ board.indexOf(item)} data-value={board.indexOf(item)} key={item.index} onClick={() => handleClick(item)}>
                    </div>
                )
            })}
            <button onClick={() => findTile(0,4)}>Test cruiser</button>
        </div>
    )
};

export default GameBoard;
