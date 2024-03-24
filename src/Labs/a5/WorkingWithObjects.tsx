import React, { useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

  const [module, setModule] = useState({
    id:1, name: "Inro to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "M101",
  });
  const MODULE_URL = "http://localhost:4000/a5/module"

  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>

      <a href={`${MODULE_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/> <br />

      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/> <br />

      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value)})}
        value={assignment.score}/>



      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Status
      </a>
      <input type="text" 
        onChange={() => setAssignment({ ...assignment,
            completed: !false})}/>

      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a> <br />

      <a href="http://localhost:4000/a5/module">
        Get Module
      </a>

      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a> <br />

      <a href="http://localhost:4000/a5/assignment/score">
        Get Assignment Score
      </a> <br />

      <a href="http://localhost:4000/a5/assignment/completed">
        Get Assignment Status
      </a> <br />

      <a href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;