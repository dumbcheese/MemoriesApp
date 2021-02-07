import React from 'react';
import {Container} from '@material-ui/core';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth.js';





function App(){
    
    return(
        <Router>
            <Container maxwidth="lg">
                <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />

                    </Switch>
            </Container>
        </Router>
    );
}


export default App;