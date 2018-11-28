import React, { Component } from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import NameDisplay from './components/NameDisplay';

class App extends Component {
  render() {

    const headerStuff = <h1>My new header!</h1>;

    return (
      <div className="App">
        {headerStuff}
        <NameDisplay />
        <StudentCollection />
      </div>
    );
  }
}

export default App;
