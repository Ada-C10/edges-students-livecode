import React from 'react';
import './StudentCollection.css';
import Student from './Student';

const StudentCollection = () => {

  const students = [
    {
      fullName: "Ada Lovelace",
    },
    {
      fullName: "Katherine Johnson",
      email: "kat@nasa.gov",
    }
  ];

  const studentCollection = students.map((student, i) => {
    return <Student key={i} fullName={student.fullName} email={student.email} />
  });

  const header = "header";

  const headerColor = students.length > 1 ? "red-header" : "blue-header";

  return (
    <section>
      <h2 className={header + " " + headerColor}>Students</h2>
      <ul>
        {studentCollection}
      </ul>
    </section>
  );
};

export default StudentCollection;
