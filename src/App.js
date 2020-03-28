import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import users from './db';
import Table from './components/Table/Table';

function App() {
    return (
        <div>
            <Header />
            <Table />
            {console.log(users)}
        </div>
    );
}

export default App;
