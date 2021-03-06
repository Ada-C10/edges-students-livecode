import React, { Component } from 'react';
import  './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      email: "",
      errorMessages: []
    }
  }

  // QUESTION:
  // How to prevent submission if the name field is empty

  // onNameChange = (fishtaco) => {
  //   console.log("Name was changed", fishtaco, fishtaco.target);
  //   this.setState({fullName: fishtaco.target.value})
  // }
  //
  // onEmailChange = (event) => {
  //   // this.setState({email: event.target.value})
  //   const newState = {};
  //
  //   // Either of these two will work
  //   newState.email = event.target.value;
  //   newState['email'] = event.target.value;
  //
  //   this.setState(newState);
  // }

  // QUESTION:
  // What is in the variables "field" and "value"?
  // Why do we use subscript notation to set the state?
  //   What if we said this.setState({field: value}) instead?
  onInputChange = (event) => {
    console.log("In on input change");

    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    // newState.field = value;  // not the same :(
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (!this.emailValid()) {
      // Maybe display some info to the user?
      this.setState({errorMessages: [...this.state.errorMessages, "email is invalid"]})
      return;
    }

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

    this.setState({errorMessages: []});
  }

  emailValid = () => {
    return this.state.email.match(/\S+@\S+/);
  }

  render() {
    const errorMessages = this.state.errorMessages.map((message) => {
      return <li>{message}</li>;
    });

    return (
      <div>
        <section className="errors">
          <ul>
            {errorMessages}
          </ul>
        </section>
        <form
          className="new-student-form"
          onSubmit={this.onFormSubmit}
          >
          <div>
            <label htmlFor="fullName">Name:</label>
            <input
              name="fullName"
              value={this.state.fullName}
              onChange={this.onInputChange}
              />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.onInputChange}
              className={this.emailValid() ? 'valid' : 'invalid'}
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
