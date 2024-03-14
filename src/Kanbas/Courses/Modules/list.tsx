import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { cid } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
    <div className="buttons">
        <button className="button collapse-all">Collapse All</button>
        <button className="button view-progress">View Progress</button>
        <select id="button3">
            <option selected value="PA">Publish All</option>
        </select>
        <button className="module">+ Module</button>
        <button className="..."><FaEllipsisV className="ms-2"/></button>
      </div>
      
    <ul className="list-group wd-modules">
    <li className="list-group-item">
    <button
          onClick={() => dispatch(addModule({ ...module, course: cid }))}>
          Add
        </button>
        <button
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>

      {moduleList
        .filter((module) => module.course === cid)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

            ...
            {module.name}
            <p>{module.description}</p>
            <p>{module._id}</p>
            ...
          </li>))}
    </ul>
    </>
  );
}
export default ModuleList;