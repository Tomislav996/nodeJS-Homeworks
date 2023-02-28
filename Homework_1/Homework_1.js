

let users = [{role: "admin", fullname: "John Doe", username: "John02", password: "123qwe"},
{role: "client", fullName: "Bob Bobski", username: "Bob92", password: "zxczxc"},
{role:"moderator", fullname:"Max Smith", username:"Max89", password: "123456" },
{role: "client", fullName: "Jane Smith", username: "Jane95", password: "qwerty"}];


            let checkIfUserExists = (name, pass) => {
                let userFound = false;
                
                for(let element of users) {
                    if(element.username === name && element.password === pass) {
                        userFound = true;
                        break;
                    } 
                }
                if(userFound == true){
                    console.log(`User ${name} is logged in`)
                }
                else {
                    console.log(`User ${name} not found`)
                }
            }



            checkIfUserExists("Max89", "123456");
