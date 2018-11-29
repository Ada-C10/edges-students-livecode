import React from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends React.Component {

  constructor(props) {
    super(props);
  }

  markPresentClickHandler = (e) => {
    console.log("The Mark Present Button was clicked!");
    this.props.markPresentCallback(this.props.index);
  }

  render() {

    const name = this.props.fullName;
    const presentText = this.props.isPresent ? "Present" : "Absent";

    return (
      <section className="student">
        <h3>Student</h3>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {this.props.email}</li>
          <div>
            { presentText } today
            <button
              disabled={ this.props.isPresent }
              onClick={ this.markPresentClickHandler } >
              Mark Present
            </button>
          </div>
        </ul>
      </section>
    )

  }
}


Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
};

Student.defaultProps = {
  email: 'no email on file',
}


export default Student;
