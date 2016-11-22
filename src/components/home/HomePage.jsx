import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="about" className="btn btn-primary">About</Link>|
        <Link to="dashboard" className="btn btn-primary">START</Link>
        <div>
          <button>START</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
