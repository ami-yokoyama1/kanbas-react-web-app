import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import courses from "../Database/courses.json";
import CourseNavigation from "./Navigation";
import ModuleList from "./Modules/list";
import { HiMiniBars3 } from "react-icons/hi2";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";

function Courses({ courses }: { courses: any[]; }){
    const {cid} = useParams();
    const course = courses.find((course) => course._id === cid);
    return(
        <>
            <h2 className="burger"><HiMiniBars3 /> Course {course?.name}</h2>
            <CourseNavigation />
            <div>
                <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{ left: "320px", top: "50px" }} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<ModuleList />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
                </div>
            </div>
        </>
    )
}
export default Courses;