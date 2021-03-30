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
        let domTile = document.querySelectorAll('.cell')
        let tile = board.find(
            (({x}) => x === xCoord) && (({y}) => y === yCoord)
        )
        console.log(tile)
        console.log(board.indexOf(tile))
        tile.occupied = true;
        //console.log(board)
        //tile.classList.add('ship-place')
        domTile[board.indexOf(tile)].classList.add('selected')
    }

    function shipPlaced(xCoord, yCoord, length, rotated) {
        let domTile = document.querySelectorAll('.cell')
        let tile = board.find(
            (({x}) => x === xCoord) && (({y}) => y === yCoord)
        )
        console.log(tile)
        console.log(board.indexOf(tile))
        tile.occupied = true;
        //console.log(board)
        //tile.classList.add('ship-place')
        if (!rotated) {
            for (let i = 0; i < length; i++) {
                domTile[board.indexOf(tile)+i].classList.add('ship-placed')  
            }
        } else {
            for (let i = 0; i < length; i++) {
                domTile[board.indexOf(tile)+(10*i)].classList.add('ship-placed')  
            }
        }  
    }

    function indexShipPlaced(index, shipLength, rotated) {
        let domTiles = document.querySelectorAll('.cell')

        if (!rotated) {
            for (let i = 0; i < shipLength; i++) {
                domTiles[index + i].classList.add('ship-placed')  
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                domTiles[index + (i * 10)].classList.add('ship-placed')  
            }
        }  
    }

    function test() {
        console.log('test');
    }

    let board = [];
    const gridSize = 10;
    
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++ ) {
            board.push({x, y, occupied: false})
        }
    }
    
    const handleClick = (item) => {
        const index = board.indexOf(item);
        console.log(item)
        console.log(item.x +', '+ item.y)
        console.log('tile index ' + board.indexOf(item))
        indexShipPlaced(index, 3, true)
        //shipPlaced(item.x, item.y, 3, false)
        //findTile(item.x, item.y)
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
            <button onClick={() => shipPlaced(1, 4, 4, false)}>Place Battleship</button>
            <button onClick={() => shipPlaced(3, 5, 4, true)}>Place Battleship R</button>
        </div>
    )
};

export default GameBoard;
