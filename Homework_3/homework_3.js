
import {deleteAndReadTodo, changeTodoStatus, readSingleTodo, addTodo, readTodos } from "./file-service.js";


readTodos("./db/todos.json");

/*
addTodo("./db/todos.json", "Study node js", false)

addTodo("./db/todos.json", "Go to the gym", false)

addTodo("./db/todos.json", "Clean the room", true)
*/

deleteAndReadTodo("./db/todos.json", 2);


changeTodoStatus("./db/todos.json", 1);


readSingleTodo("./db/todos.json",3)