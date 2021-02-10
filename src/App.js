// Imports
import React, { Component } from 'react';

// App Imports
import ClassBased from 'modules/AutoComplete/examples/ClassBased';
import FunctionBased from 'modules/AutoComplete/examples/FunctionBased';
import './style.css';

// Component
export default class App extends Component {
  // Constructor
  constructor(props) {
    super(props);
  }

  // Render
  render() {
    return (
      <div className="container">
        <ClassBased />
        <FunctionBased />
      </div>
    );
  }
}
