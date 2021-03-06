import React, { useEffect, useState } from 'react'
import Ship from './Ship'

const ShipFactory = () => {

    const shipList = [
        {
            name: 'carrier',
            size: 5,
            rotate: false,
            hp: 5,
            sunk: false,
    
        },
        {
            name: 'battleship',
            size: 4,
            rotate: false,
            hp: 4,
            sunk: false,
        },
        {
            name: 'cruiser',
            size: 3,
            rotate: false,
            hp: 3,
            sunk: false,
        },
        {
            name: 'submarine',
            size: 3,
            rotate: false,
            hp: 3,
            sunk: false,
        },
        {
            name: 'destroyer',
            size: 2,
            rotate: false,
            hp: 2,
            sunk: false,
        },
    ]


    const handleClick = (item) => {
        console.log(item)
    }

    return (
        <div>
            {shipList.map(item => {
                return(
                    <Ship className='ship' key={item.name}
                        handleClick={handleClick}
                        name={item.name}
                        size={item.size}
                        rotate={item.rotate}
                        hp={item.hp}
                        sunk={item.sunk}
                    />


                    // <div className='cell' key={item.index} onClick={() => handleClick(item)}>
                    // </div>
                )
            })}
        </div>
    )
}

export default ShipFactory

