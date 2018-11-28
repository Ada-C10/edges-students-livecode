import React from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const name = this.props.fullName;

    return (
      <section className="student">
        <h3>Student</h3>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {this.props.email}</li>
          <li>Hometown: {this.props.hometown}</li>
          <li>Class: {this.props.classroom}</li>
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
