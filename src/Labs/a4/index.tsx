import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment4(){
    const { todos } = useSelector((state: LabState) => state.todosReducer);
    function sayHello(){
        alert("Hello");
    }
    return(
        <div>
            <h2>Assignment 4</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
                ))}
            </ul>
            <ReduxExamples />
            <ParentStateComponent />
            <ArrayStateVariable />
            <ObjectStateVariable />
            <DateStateVariable />
            <StringStateVariables />
            <BooleanStateVariables />
            <Counter />
            <EventObject />
            <PassingFunctions theFunction={sayHello} />
            <ClickEvent />
            <PassingDataOnEvent />
        </div>
    );
}

export default Assignment4;