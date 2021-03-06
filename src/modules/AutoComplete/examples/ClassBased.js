// Imports
import React, { Component } from 'react';

// App Imports
import { filterUsers } from 'modules/AutoComplete/api';
import AutoComplete from 'modules/AutoComplete/AutoComplete';

// Component
class ClassBased extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      suggestionList: [],
    };
  }

  // Handle Select
  handleSelect = (value) => {
    this.setState({
      selected: value,
      suggestionList: [],
    });
  };

  // Fetch Suggestions
  filterSuggestions = async (value) => {
    try {
      const data = await filterUsers(value);
      if (data.data) {
        this.setState({
          suggestionList: data.data.map((item) => item.name),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Render
  render() {
    return (
      <div>
        <h3>Class Based Component</h3>
        <p>You have selected: {this.state.selected ? this.state.selected : 'None'}</p>
        <div>Start typing...</div>
        <AutoComplete
          suggestionList={this.state.suggestionList}
          onSelect={this.handleSelect}
          onChange={this.filterSuggestions}
        />
      </div>
    );
  }
}

export default ClassBased;
