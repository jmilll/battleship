import React, { useEffect, useState } from 'react'

const Ship = (props) => {

console.log(props)
    //const shipLength = length;
    //const rotated = rotated;

    //let hitPoints = shipLength;

    // const hit = () => {
    //     hitPoints--;
    // }

    // const isSunk = () => {
    //     hitPoints === 0? true : false;
    // }

    const createShip = () => {
        let parts = [];
        for (let i = 0; i < props.size; i++) {
            parts.push(<div className='ship-part' data-name={props.name + i} key={i} />)        
        }
        return parts;
    }

    return (
        <div>
            <p> {props.name}</p>
            <div className='ship-container' onClick={() => props.handleClick(props.name)}>
                {createShip()}
            </div>
        </div>
    )
};

export default Ship;