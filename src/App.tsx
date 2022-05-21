import React, {useState} from 'react';
import {Header} from './components/layut/Header';
import {Map} from './components/Map/Map';

import './App.css';
import {SearchContext} from './contexts/search.context';

export const App = () => {
    const [search, setSearch] = useState('');
    return (
        <>
            <SearchContext.Provider value={{search, setSearch}}>
                <Header/>
                <Map/>
            </SearchContext.Provider>
        </>
    );
}