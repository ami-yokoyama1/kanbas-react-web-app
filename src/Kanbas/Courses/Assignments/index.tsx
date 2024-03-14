import React, {useState} from "react";
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { cid } = useParams();
  const [assignmentList, setAssignmentList] = useState<any[]>(assignments);
  const [assignment, setAssignment] = useState({
    _id: "0",
    name: "New Assignment",
    course: cid || "",
  });
  const addAssignment = (assignment: any) => {
    const newAssignment = { ...assignment,
      _id: new Date().getTime().toString() };
    const newAssignmentList = [newAssignment, ...assignmentList];
    setAssignmentList(newAssignmentList);
  };
  const deleteAssignment = (assignmentId: string) => {
    const newAssignmentList = assignmentList.filter(
      (assignment) => assignment._id !== assignmentId );
    setAssignmentList(newAssignmentList);
  };
  const updateModule = () => {
    const newAssignmentList = assignmentList.map((m) => {
      if (m._id === assignment._id) {
        return assignment;
      } else {
        return m;
      }
    });
    setAssignmentList(newAssignmentList);
  };



  
  return (
    <>
      {/* {<!-- Add buttons and other fields here -->} */}
      <div className="flex-fill">
      <div className="parent">
            <input type="search" className="form-control w-25"
            placeholder="Search for Assignment"/>
            <span className="float-end">
                <button className="group">+Group</button>
                <button className="assignment">+Assignment</button>
                <button className="..."><FaEllipsisV className="ms-2"/></button>
            </span>
        </div><hr />


        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">

              <li className="list-group-item">
                <button onClick={() => { addAssignment(assignment) }}>
                  Add
                </button>
                <button onClick={updateModule}>
                  Update
                </button>

                <input value={assignment.name}
                  onChange={(e) => setAssignment({
                    ...assignment, name: e.target.value })}
                />
              </li>

              {assignmentList
                .filter((assignment) => assignment.course === cid)
                .map((assignment, index) => (
                <li key={index} className="list-group-item">
                    <button
                      onClick={(event) => { setAssignment(assignment); }}>
                      Edit
                    </button>
                    <button
                      onClick={() => deleteAssignment(assignment._id)}>
                      Delete
                    </button>

                  <FaEllipsisV className="me-2" />
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                </li>))}
            </ul>
          </li>
        </ul>

        {/* <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> ASSIGNMENTS
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                </li>))}
            </ul>
          </li>
        </ul> */}


      </div>
      
    </>
);}
export default Assignments;