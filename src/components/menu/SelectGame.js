import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getOnGoingGames} from './../../utils/games';
import {setMenuStateGameId} from './../../reducers/menuStateReducer';

const SelectGame = ({setMenuStateGameId}) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const g = await getOnGoingGames();
            setGames(g);
        })();
    }, []);

    return (
        <div style={{
            width: '100%',
            marginTop: '1em'
        }}>
            <select 
                name='games' 
                id='select-game'
                style={{
                    height: '2.5em'
                }}
                onChange={e => setMenuStateGameId(e.target.value)}
            >
                <option value={''}>select game</option>
                {
                    games
                    .filter(g => g.white === null)
                    .map(g => <option key={g.id} value={g.id}>{`${g.black} playing as black`}</option>)
                    .concat(
                        games
                        .filter(g => g.black === null)
                        .map(g => <option key={g.id} value={g.id}>{`${g.white} playing as white`}</option>)
                    )
                }
            </select>
        </div>
    );
};

const mapDispatchToProps = {
    setMenuStateGameId
};

export default connect(
    null,
    mapDispatchToProps
)(SelectGame);