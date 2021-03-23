const Ship = (length, rotated) => {
    const shipLength = length;
    const rotated = rotated;

    let hitPoints = shipLength;

    const hit = () => {
        hitPoints--;
    }

    const isSunk = () => {
        hitPoints === 0? true : false;
    }
};

export default Ship;