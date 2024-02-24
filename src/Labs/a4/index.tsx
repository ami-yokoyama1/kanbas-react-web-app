import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";

function Assignment4(){
    function sayHello(){
        alert("Hello");
    }
    return(
        <div>
            <h2>Assignment 4</h2>
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