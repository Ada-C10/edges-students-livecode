import React, { Component } from 'react';
import  './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: ""
    }
  }

  onNameChange = (event) => {
    console.log("Name was changed", event);
    this.setState({fullName: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    return (
      <div>
        <form className="new-student-form">
          <div>
            <label htmlFor="fullName">Name:</label>
            <input
              name="fullName"
              value={this.state.fullName}
              onChange={this.onNameChange}
              />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.onEmailChange}
              />
          </div>
          <input
            type="submit"
            value="Add Student"
          />
        </form>
      </div>
    );
  }
}

export default NewStudentForm;
