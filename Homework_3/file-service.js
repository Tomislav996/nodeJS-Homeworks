import fs from "fs";
import { type } from "os";
import { v4 as uuidv4 } from 'uuid';
// SYNCRONOUS FS OPERATIONS
const writeToFile = (path, data) => {
    fs.writeFileSync(path, data);
};

const appendToFile = (path, data) => {
    fs.appendFileSync(path, data)
};


const readFromFile = (path) => {
    const content = fs.readFileSync(path, { encoding: "utf-8" });

    return content
};


// TODOS LOGIC
export const readTodos = (path) => {
    // Pri chitanje na json fajlot ni frakja
    // stingificiran json
    const todos = readFromFile(path);

    //go parsirame stringificiraniot json
    const parsedTodos = JSON.parse(todos);


    return parsedTodos
}

export const addTodo = (path, todoName, isTodoDone) => {
    const todo = {
        id: uuidv4(),
        name: todoName,
        done: isTodoDone
    }

    const allTodos = readTodos(path);
    allTodos.push(todo);



    writeToFile(path, JSON.stringify(allTodos, null, 2))
};

 export let deleteAndReadTodo = (path,id) => {
    let deletedTodo = null;
    let allTodos = readTodos(path);
    if(!validateIndex(id,allTodos)) {
       return console.log("Todo not found/invalid input");
    }
    if(id === 1){
        deletedTodo = allTodos.splice(0,1);
        writeToFile(path, JSON.stringify(allTodos, null, 2))
        console.log(deletedTodo);
    }
    else{
        deletedTodo = allTodos.splice(id - 1,1);
        writeToFile(path, JSON.stringify(allTodos, null, 2))
        console.log(deletedTodo);
    }
 }

  export const changeTodoStatus = (path,id) => {
    let allTodos = readTodos(path);
    if(!validateIndex(id,allTodos)) {
        return console.log("Todo not found/invalid input");
    }
    if(id === 1){
        allTodos[0].done = true;
        writeToFile(path, JSON.stringify(allTodos, null, 2))
    }
    else {
        allTodos[id -1].done = true;
        writeToFile(path, JSON.stringify(allTodos, null, 2))
    }
  }

 export const readSingleTodo = (path,id) => {
    let allTodos = readTodos(path);
    if(!validateIndex(id,allTodos)) {
        return console.log("Todo not found/invalid input");
    }
    if(id === 1){
        console.log(allTodos[0])
    }
    else{
        console.log(allTodos[id-1]);
    }
 }





 let validateIndex = (id,array)=>{
  if(id <= 0 || id > array.length || typeof(id) != "number") {
        return false;
    }
 return true;
 }
