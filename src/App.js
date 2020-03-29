import React from 'react';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <SearchPage />
            </div>
        </div>
    );
}

export default App;
