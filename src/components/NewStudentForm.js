import React, { Component } from 'react';
import  './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form className="new-student-form">
          <div>
            <label htmlFor="fullName">Name:</label>
            <input name="fullName" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input name="email" />
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
