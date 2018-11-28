import React from 'react';
import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {

  const name = props.fullName;

  return (
    <section className="student">
      <h3>Student</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {props.email}</li>
        <li>Hometown: {props.hometown}</li>
        <li>Class: {props.classroom}</li>
      </ul>
    </section>
  )
};

Student.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string,
};

Student.defaultProps = {
  email: 'no email on file',
}


export default Student;
