import React from 'react';

class NameDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'this is the name set in the initial state',
      shouldDisplayName: true,
    };
  }

  render() {
    let displayText = "I don't think I should display your name";

    if (this.state.shouldDisplayName) {
      displayText = `Hi! Your name is ${this.state.name}`;
    }

    return (
      <h2> { displayText } </h2>
    );
  }

}

export default NameDisplay;
