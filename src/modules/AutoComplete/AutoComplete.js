// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// App Imports
import './style.css'

class AutoComplete extends Component {
  // Constructor
  constructor(props) {
    super(props)
    // Initial State
    this.state = {
      value: '',
      showSuggestions: true,
    }
  }

  // Handle select suggested text
  handleSelect = (val) => {
    this.setState({
      value: val,
      showSuggestions: false,
    })
    // Callback
    if (this.props.onSelect) {
      this.props.onSelect(val)
    }
  }

  // Handle change in value
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      showSuggestions: true,
    })
    // Callback
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
    // When all the text is cleared
    if (!e.target.value) {
      this.handleSelect('')
    }
  }

  // Render
  render() {
    return (
      <div className="autoc-container">
        {/* Input Box */}
        <input
          id="autoc-val"
          className="autoc-input"
          type="text"
          onChange={handleChange}
          value={value}
          autoComplete="off"></input>

        {/* Suggestion List */}
        {(showSuggestions && value && suggestionList && suggestionList.length && (
          <div className="autoc-dropdown">
            {suggestionList.slice(0, limit).map((suggestion, index) => (
              <div className="item" key={index} onClick={() => handleSelect(suggestion)}>
                {suggestion}
              </div>
            ))}
          </div>
        )) ||
          null}
      </div>
    )
  }
}

// Property Types
AutoComplete.propTypes = {
  suggestionList: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  limit: PropTypes.number,
}

// Default Props
AutoComplete.defaultProps = {
  limit: 10,
}

export default AutoComplete
