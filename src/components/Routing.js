import {BrowserRouter as Router, Route} from 'react-router-dom'
import Authentication from './Authentication';
import Header from './Dashboard/SemanticElements/header'
import React from 'react';
const Routing=()=>{
    return(
        <Router>
            <Route exact path="/" component={Header} />
            <Route exact path="/signup" component={Authentication} />
        </Router>
    )
}
export default Routing;