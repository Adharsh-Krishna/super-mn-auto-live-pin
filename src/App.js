import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

//import pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faq from './pages/Faq';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
                        <Route exact path="/faq" component={Faq}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
