import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {/* <Link to="about" className="btn btn-primary">About</Link>| */}
        <div>
          <button onClick={() => browserHistory.push('/inputpage')}>START</button>
        </div>
        <div>
          <button onClick={() => browserHistory.push('/jinputpage')}>jSTART</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
