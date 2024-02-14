import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript(){
    console.log('Hello World!')
    return(
        <div>
            <h3>JavaScript</h3>
            <ES5Functions />
            <TernaryOperator />
            <IfElse />
            <BooleanVariables />
            <VariableTypes />
            <VariablesAndConstants />
        </div>
    );
}

export default JavaScript;