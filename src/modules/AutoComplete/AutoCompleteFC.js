// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// App Imports
import './style.css'

// Component
const AutoCompleteFC = ({ suggestionList, onChange, onSelect, limit }) => {
  // State
  const [value, setValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(true)

  // Handle select suggested text
  const handleSelect = (val) => {
    setValue(val)
    setShowSuggestions(false)
    if (onSelect) {
      onSelect(val)
    }
  }

  // Handle change in value
  const handleChange = (e) => {
    setValue(e.target.value)
    setShowSuggestions(true)
    if (onChange) {
      onChange(e.target.value)
    }
    // When all the text is cleared
    if (!e.target.value) {
      handleSelect('')
    }
  }

  return (
    <div className="autoc-container">
      {/* Input Box */}
      <input
        id="autofc-val"
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

// Property Types
AutoCompleteFC.propTypes = {
  suggestionList: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  limit: PropTypes.number,
}

// Default Props
AutoCompleteFC.defaultProps = {
  limit: 10,
}

export default AutoCompleteFC
