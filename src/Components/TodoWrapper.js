import React, {useState} from "react"
import { TodoForm } from "./TodoForm"
import { v4 as uuidv4 } from "uuid"
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () =>{
    const[todos,setTodos] = useState([])
    
    //adding todo to array
    const addTodo = todo => {
        setTodos([...todos,{id:uuidv4(), task: todo, completed: false, isEditing: false},])
        
    }

    const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...
    todo, completed: !todo.completed} : todo))
    }

    //deleting todo
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    //editing todo
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing : !todo.isEditing}:todo))
    }
    //editing task
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}:todo))
    }
    return(
        //displays all the tasks entered in previously
        <div className="TodoWrapper">
            <h1>Tasks to complete</h1>
            <TodoForm addTodo = {addTodo}></TodoForm>
                {todos.map((todo, index) => (
                 todo.isEditing ?(
                        <EditTodoForm editTodo={editTask} task = {todo} />
                    )
                    : (
                    <Todo task = {todo} key={index} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} editTodo={editTodo}/>
                    )
                    
                ))}
        </div>
    )
}