import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    user: state.user
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div  className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Wishes-app :)</h2>
            <p>
                <Link to="/">Home -test/ </Link>
                <Link to="/users"> Users -test/ </Link>
                <Link to="/counter"> Counter -test/ </Link>
                <Link to="/courses"> Courses -test/ </Link>
                <Link to="/students"> Students test/ </Link>
            </p>
        </div>
        <p className="App-intro">

        </p>
          
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
