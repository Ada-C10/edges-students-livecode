import React from 'react';

class NameDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Cowboy Ada',
      shouldDisplayName: true,
    };
  }

  onButtonClick = (event) => {
    this.setState({
      shouldDisplayName: !this.state.shouldDisplayName,
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    let displayText = "I don't think I should display your name";

    if (this.state.shouldDisplayName) {
      displayText = `Hi! Your name is ${this.state.name}`;
    }

    return (
      <section>
        <h2> { displayText } </h2>
        <button onClick={ this.onButtonClick }>Click Me to Turn off Displaying Name</button>
        <input type="text" onChange={ this.onNameChange } value={ this.state.name } />
      </section>
    );
  }

}

export default NameDisplay;
