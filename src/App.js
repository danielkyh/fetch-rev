import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import BusinessSubscribers from './components/BusinessSubscribers/BusinessSubscribers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="grey-text text-darken-3">
          <div className="row">
            <div className="logo-container blue-grey lighten-5">
              <Link to="/">
                <img className="logo" src="//s21644.pcdn.co/wp-content/uploads/2017/11/FR_ID_Lock-Up_RGB_Full-Color.svg" alt="Fetch Rev Logo"/>
              </Link>
            </div>
          </div>
          < Route exact path="/" component={Home} />
          < Route path="/business/:id" component={BusinessSubscribers} />
        </div>
      </Router>
    );
  }
}

export default App;
