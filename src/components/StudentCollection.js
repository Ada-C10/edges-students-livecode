import React from 'react';
import './StudentCollection.css';
import Student from './Student';
import NewStudentForm from './NewStudentForm';

// Check the syntax! It's a class, and it inherits from Component (make sure I'm importing the right things so that Component is being accessed correctly)

// Make sure that props are passed in the right way now. They are passed in NOT as a parameter in a function now, but instead they ARE passed into the constructor. We'll want to call super(props) by default inside of the constructor

// Make sure that I have a function called render(). It takes in no parameters. It returns one JSX element. The responsibility of this is to return how this component should render.

// Make sure I am accessing props in the correct way. I access props with this.props.

class StudentCollection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          fullName: "Ada Lovelace",
          isPresentToday: true,
        },
        {
          fullName: "Katherine Johnson",
          email: "kat@nasa.gov",
          isPresentToday: false,
        }
      ]
    }
  }

  // We want a callback in the StudentCollection component that fires when "something happened in the Student Component" ... aka "when Student Component says 'I totally clicked the Mark Present Button'"
  aSpecificStudentWasMarkedPresentButIamTheStudentCollection = (studentIndex) => {
    console.log(`A specific student of ID ${studentIndex} had its marked present button clicked, and now I'm in the student collection component`);

    let updatedStudentData = this.state.students;
    updatedStudentData[studentIndex].isPresentToday = true;

    this.setState({
      students: updatedStudentData
    })
  }

  addStudent = (newStudent) => {
    const students = this.state.students;
    students.push(newStudent);
    this.setState({students: students});
  }

  render() {
    const students = this.state.students;

    const studentCollection = students.map((student, i) => {
      return <Student
        key={i}
        index={i}
        fullName={student.fullName}
        email={student.email}
        isPresent={student.isPresentToday}
        markPresentCallback={ this.aSpecificStudentWasMarkedPresentButIamTheStudentCollection } />
    });

    const header = "header";

    const headerColor = students.length > 1 ? "red-header" : "blue-header";

    return (
      <section>
        <NewStudentForm addStudentCallback={this.addStudent}/>

        <h2 className={header + " " + headerColor}>Students</h2>
        <ul>
          {studentCollection}
        </ul>
      </section>
    );
  }

}

export default StudentCollection;
