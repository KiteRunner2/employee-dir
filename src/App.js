import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import users from './db';
// import Table from './components/Table/Table';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <SearchPage />
                {console.log(users)}
            </div>
        </div>
    );
}

export default App;
