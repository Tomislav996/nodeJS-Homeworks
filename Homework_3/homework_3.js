
import {deleteTodo, readTodo, addTodo, readTodos } from "./file-service.js";


readTodos("./db/todos.json");


addTodo("./db/todos.json", "Study node js", false)

addTodo("./db/todos.json", "Go to the gym", false)

addTodo("./db/todos.json", "Clean the room", true)


deleteTodo("./db/todos.json", 2);
readTodo("./db/todos.json", 2);
