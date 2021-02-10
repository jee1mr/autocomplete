// Imports
import React, { Component } from 'react';

// App Imports
import ClassBased from 'modules/AutoComplete/examples/ClassBased';
import FunctionBased from 'modules/AutoComplete/examples/FunctionBased';
import './style.css';

// Component
export default class App extends Component {
  // Render
  render() {
    return (
      <div className="container">
        <ClassBased />
        <h3>Function Based Component:</h3>
        <FunctionBased />
      </div>
    );
  }
}
