import {BrowserRouter as Router, Route} from 'react-router-dom'
import Authentication from './Authentication';
import React from 'react';
const Routing=()=>{
    return(
        <Router>
            <Route exact path="/" component={Authentication} />
            <Route exact path="/signup" component={Authentication} />
        </Router>
    )
}
export default Routing;