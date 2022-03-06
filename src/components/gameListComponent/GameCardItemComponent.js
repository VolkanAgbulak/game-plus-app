import React from 'react';

const GameCardItemComponent = ({item} )=> {

    return (
            <span className="game-item">{item.title}</span>
    );
};

export default GameCardItemComponent;