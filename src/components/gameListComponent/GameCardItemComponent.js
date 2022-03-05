import React from 'react';

const GameCardItemComponent = ({gameItems} )=> {

    return (
        <div>
        {gameItems.map((option) => (
            <span key={Math.random()}>{option.group}</span>
           
        ))}
        </div>
    );
};

export default GameCardItemComponent;