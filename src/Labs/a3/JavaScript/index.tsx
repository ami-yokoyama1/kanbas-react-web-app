import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import FilterFunction from "./arrays/FilterFunction";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import ForLoops from "./arrays/ForLoops";
import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript(){
    console.log('Hello World!')
    return(
        <div>
            <h3>JavaScript</h3>
            <TemplateLiterals />
            <FilterFunction />
            <FindIndex />
            <FindFunction />
            <JsonStringify />
            <MapFunction />
            <ForLoops />
            <AddingAndRemovingDataToFromArrays />
            <ArrayIndexAndLength />
            <WorkingWithArrays />
            <FunctionParenthesisAndParameters />
            <ImpliedReturn />
            <ArrowFunctions />
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