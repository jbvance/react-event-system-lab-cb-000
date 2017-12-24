import React, { Component } from 'react';

class EyesOnMe extends Component {
  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  handleFocus = () => {
    console.log('Good!');
  };

  render() {
    return (
      <div>
        <button onBlur={this.handleBlur} onFocus={this.handleFocus}>
          Click Me
        </button>
      </div>
    );
  }
}

export default EyesOnMe;
