import React, { Component } from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';
import NameDisplay from './components/NameDisplay';

class App extends Component {
  render() {

    return (
      <div className="App">
        <StudentCollection />
      </div>
    );
  }
}

export default App;
