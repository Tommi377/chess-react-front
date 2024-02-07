import React from 'react';
import Square from '../components/board/Square';
import {listIndexToPos} from './posIndex';

const squaresIntoElements = squares => {
    squares = squares.map((s, i) => {return {...s, i}});
    let s = [];
    for(let i = 56; i >= 0; i -= 8){
        s = s.concat(squares.slice(i, i + 8));
    }
    return s.map((e) => {
        const pos = listIndexToPos(e.i);
        return <Square key={pos} image={e.image} moves={e.moves} pos={pos} status={e.status}/>
    });
};

export default squaresIntoElements;