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

  onNameChange = (fishtaco) => {
    console.log("Name was changed", fishtaco, fishtaco.target);
    this.setState({fullName: fishtaco.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName: this.state.fullName,
      email: this.state.email,
    };

    this.setState({
      fullName: '',
      email: '',
    });

    // Now we need to do something with the student...
    console.log("Created a new student:", newStudent);
    this.props.addStudentCallback(newStudent);
  }

  render() {
    return (
      <div>
        <form
          className="new-student-form"
          onSubmit={this.onFormSubmit}
          >
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
