const fs = require("fs");
const path = require("path");

let firstFile = "homework_2.txt";
let descripiton = "Homework 02 in Basic Node";
let finishedText = "FINISHED!";

let createFile = (file, text) => {
    fs.appendFileSync(`${file}`, `${text}`)
}

let appendToFile = (file, text) => {
    fs.appendFileSync(`${file}`, `\n${text}`)
}

createFile(firstFile, descripiton);
appendToFile(firstFile,finishedText);

/*
let data = fs.readFileSync(`../homework_2/homework_2.txt`,`utf-8`);
console.log(data);
*/

let pathToSave = path.join(__dirname, `${firstFile}`);

let readFile = fs.readFileSync(`${pathToSave}`,`utf8`);

console.log(readFile);

