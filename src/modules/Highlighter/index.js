// Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// App Imports
import './style.css';

// Component
export class Highlighter extends Component {
  // Render
  render() {
    const { text, matchText } = this.props;
    const matchIndex = text.indexOf(matchText);

    // No match
    if (matchIndex === -1) {
      return <span>{text}</span>;
    }

    return (
      <>
        {/* Additional text */}
        <span>{text.slice(0, matchIndex)}</span>
        {/* Matched Text */}
        <span className="highlight">{text.slice(matchIndex, matchIndex + matchText.length)}</span>
        {/* Additional text */}
        <span>{text.slice(matchIndex + matchText.length)}</span>
      </>
    );
  }
}

// Property Types
Highlighter.propTypes = {
  text: PropTypes.string.isRequired,
  matchText: PropTypes.string.isRequired,
};

// Default Properties
Highlighter.defaultProps = {
  matchText: '',
};

export default Highlighter;
