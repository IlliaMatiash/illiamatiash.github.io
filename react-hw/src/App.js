import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/Home';
import Characters from './charactersRickAndMorty/characters';





const App = (props) => {
    return ( 
        <Router>
            <Route path ='/' component = {Characters} />
        </Router>
        
)};

export default App;