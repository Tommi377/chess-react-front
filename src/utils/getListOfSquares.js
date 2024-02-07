import {posToListIndex} from './posIndex';

const getListOfSquares = listOfPieces => {
    const squares = [];
    for(let i = 0; i < 64; i++){
        squares.push({
            type: null,
            image: null,
            moves: [],
            status: null
        });
    }
    const images = {
        k: 'bKingHd.png',
        K: 'wKingHd.png',
        q: 'bQueenHd.png',
        Q: 'wQueenHd.png',
        p: 'bPawnHd.png',
        P: 'wPawnHd.png',
        n: 'bKnightHd.png',
        N: 'wKnightHd.png',
        r: 'bRookHd.png',
        R: 'wRookHd.png',
        b: 'bBishopHd.png',
        B: 'wBishopHd.png',
        x: 'bPawnHd.png',
        X: 'wPawnHd.png',
    };

    listOfPieces.forEach(p => {
        squares[posToListIndex(p.pos)] = {
            type: p.type,
            moves: p.moves,
            image: images[p.type],
            status: null
        };
    });

    return squares;
}

export default getListOfSquares;