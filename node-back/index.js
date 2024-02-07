const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

const initialGame = {
    yourTurn: true,
    yourColor: 'white',
    pieces: [
        {
            type: 'K',
            pos: 'a1',
            moves: ["a2", "b1", "b2"]
        },
        {
            type: 'x',
            pos: 'e6',
            moves: []//["e5", "e7", "d5", "d6", "d7", "f5", "f6", "f7"]
        }
    ],
    description: 'foo',
    isEnd: false
};
const game2 = {
    yourTurn: false,
    yourColor: 'white',
    pieces: [
        {
            type: 'K',
            pos: 'a2',
            moves: []//["a1", "b1", "b2", 'a3', 'b3']
        },
        {
            type: 'k',
            pos: 'e6',
            moves: []//["e5", "e7", "d5", "d6", "d7", "f5", "f6", "f7"]
        }
    ],
    description: 'foo',
    isEnd: false
};
const game3 = {
    yourTurn: true,
    yourColor: 'white',
    pieces: [
        {
            type: 'K',
            pos: 'a2',
            moves: ["a1", "b1", "b2", 'a3', 'b3']
        },
        {
            type: 'k',
            pos: 'e5',
            moves: []//["e5", "e7", "d5", "d6", "d7", "f5", "f6", "f7"]
        }
    ],
    description: 'foo',
    isEnd: false
};
let game = initialGame;



app.use(cors());

app.use(express.static('./../build'));

app.use((req, res, next) => {
    console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
    next();
});


app.get('/api/games', (req, res) => {
    res.json([
        {
            id: 'a123',
            white: 'joku',
            black: 'toinen'
        },
        {
            id: 'a234',
            white: 'kolmas',
            black: null
        },
        {
            id: 'a345',
            white: null,
            black: 'neljäs'
        }
    ]);
});

app.post('/api/games', (req, res) => {
    const {type, color} = req.query;

    if(!type || !color){
        res.status(400).end();
        return;
    }

    game = initialGame;

    res.status(204).end();
});

app.put('/api/games', (req, res) => {
    const g = req.query.game;

    if(!g){
        res.status(400).end();
        return;
    }

    game = initialGame;

    res.status(204).end();
});


app.post('/api/users', (req, res) => {
    let name, password;
    switch(req.query.action){
        case 'create':
            name = req.query.name;
            password = req.query.password;
            res.status(!name || !password ? 400 : 204);
            break;
        case 'login':
            name = req.query.name;
            password = req.query.password;
            res.status(!name || !password ? 400 : 204);
            break;
        case 'guest':
            res.status(204);
            break;
        case 'logout':
            res.status(204);
            game = initialGame;
            break;
        default:
            res.status(400);
            break;
    }
    if(res.statusCode === 400){
        res.write('foo!');
    }
    res.end();
});


app.get('/api/board', (req, res) => {
    if(req.query.turnOnly === 'true'){
        res.json(game.yourTurn);
    }else{
        res.json(game);
    }
});

app.post('/api/board', (req, res) => {
    const command = req.query.command;
    if(!command){
        res.status(400).end();
    }else if(command === 'surrender'){
        game = {
            yourTurn: Math.random() < 0.5,
            yourColor: 'white',
            pieces: [
                {
                    type: 'k',
                    pos: 'e6',
                    moves: ["e5", "e7", "d5", "d6", "d7", "f5", "f6", "f7"]
                }
            ],
            description: 'you lost!',
            isEnd: true
        };
        res.end();
    }else{
        game = game2;
        res.end();
    }
});


app.get('/move', (req, res) => {
    game = game3;
    res.send('done');
});


app.get('/authenticate', (req, res) => {
    res.status(204).end();
})



const server = http.createServer(app);

server.listen(3001, () => {
    console.log('server running at http://localhost:3001');
});