import React,{ useState } from "react";

const DataTable = () => {

  // the initial state with objects containing the student data/properties.
    const initialData = [
        {id: 1, firstName: "Dart", lastName: "Vader", age: 100, birthDate: "1921-01-01", country: "USA", city: "Los Angeles" },
        {id: 2, firstName: "Åsa", lastName: "Jonsson", age: 50, birthDate: "1971-04-15", country: "Sweden", city: "Växjö" },
        {id: 3, firstName: "Shalini", lastName: "Jonsson", age: 28, birthDate: "1993-03-29", country: "Sweden", city: "Växjö" },
        {id: 4, firstName: "Arvid", lastName: "Larsson", age: 45, birthDate: "1976-10-07", country: "Sweden", city: "Ronneby" },
        {id: 5, firstName: "Towa", lastName: "Jämsborn", age: 56, birthDate: "1965-04-17", country: "Sweden", city: "Kalmar" }
    ];
    
    const [studentList, setStudentList] = useState(initialData);
    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties
    const [showDetails, setShowDetails] = useState(false);
    const studentDefaultData = {id: 0, firstName: "", lastName: "", age: 0, birthDate: "", country: "", city: "" }
    const [student, setStudent] = useState(studentDefaultData);
// functionconponent that returns table header
const TableHeader = () => {
    return (
    <thead className="table-light">
        <td>Id</td>
        <td>FirstName</td>
        <td>LastName</td>
        <td>Age</td>
        <td>Action</td>
    </thead>
    );
};
// functionconponent 
const TableRow = (props) => {
    return(
    <tbody>
        {
            props.studentList.map((student) => (
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
                <td><TableAction student={student} /></td>
            </tr>
                ) )
        }
    </tbody>
    );
};
// functionconponent action 
const TableAction = (props) => {

    const displayData = () => {
        setShowDetails(true);
        console.log("Show something",props.student);
        setStudent(props.student);
    };

    return (<button type="button" className="btn btn-primary" onClick={displayData} >Details</button>);

};
// functionconponent 
const ShowStudentDetails = () => {

    if(showDetails){
        return(
        <div className="card" style={{width:'400px'}}>
          <div className="card-header bg-info text-white">
              Student Information
          </div>
          <div className="card-body">
              <h5 className="card-title"> {student.country }: {student.city }</h5>
              <p className="card-text">ID: {student.id}</p>
              <p className="card-text">Name: {student.firstName} {student.lastName}</p>
              <p className="card-text">BirthDate: {student.birthDate}</p>
          </div>
          <div className="card-footer">
              <button type="button" className="btn btn-info" onClick={()=> {setShowDetails(false); setStudent(studentDefaultData)}}>Hide info</button>
          </div>
      </div>
        );
    return ("");
};

    return (
        <div className="container"> 
            <h3>Student List</h3>
            <table className="table table-striped">
                <TableHeader/> 
                <TableRow studentList={studentList} />
            </table>
            <br/>
            <ShowStudentDetails />
        </div>
    );
};

export default DataTable;
