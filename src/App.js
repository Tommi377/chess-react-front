import React from 'react';
import BoardFrame from './components/board/BoardFrame';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Notification from './components/notification/Notification';
import LogOut from './components/LogOut';

function App() {
    return (
        <div style={{
            minHeight: '100vh',
            minWidth: '100vw',
            backgroundColor: 'black',
            backgroundImage: 'url("42mswQ0-matrix-wallpaper-hd.jpg")',
            backgroundSize: 'cover'
        }}>
            <div style={{
                minWidth: '100vw',
                minHeight: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Login />
                <Menu />
                <BoardFrame />
                <LogOut />
                <Notification />
            </div>
        </div>
    );
}

export default App;
