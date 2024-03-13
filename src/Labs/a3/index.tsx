import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import ConditionalOutputIfElse from "./ConditionalOutput/ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutput/ConditionalOutputInline";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";

function Assignment3(){
    const { todos } = useSelector((state: LabState) => state.todosReducer);
    return(
        <div>
            <h2>Assignment 3</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                {todo.title}
                </li>
                ))}
            </ul>

            <TodoList />
            <ul className="list-group">
                <TodoItem />
                <TodoItem todo={{done: false, title: 'Buy bread',
                              status: 'IN PROGRESS'}} />
                <TodoItem todo={{done: true, title: 'feed dogs', 
                status: 'COMPLETED'}}/>
            </ul>
            <Add a={2} b={4} />
            {Add({a: 1, b:2})} 
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Styles />
            <ConditionalOutput />
            <ConditionalOutputInline />
            <ConditionalOutputIfElse />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>
    );
}

export default Assignment3;