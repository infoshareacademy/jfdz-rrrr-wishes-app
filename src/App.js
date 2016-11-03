import React, { Component } from 'react';
import logo from './images/logo.png';
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
                <Link to="/">Login -test/ </Link>
                <Link to="/calendar"> Calendar -test/ </Link>
                <Link to="/counter"> Counter -test/ </Link>
                <Link to="/courses"> Courses -test/ </Link>
                <Link to="/team"> Team -test/ </Link>
            </p>
        </div>
        <div className="App-intro">
            {this.props.children}
        </div>
      </div>
    );
  }
}
//test
export default connect(mapStateToProps)(App);
