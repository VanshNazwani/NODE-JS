const fs = require("fs");
const os = require("os");
 
// write the file 
// Synchronous... Blocking Request...
fs.writeFileSync('./test.txt','Hey vansh nazwani Im doing node js')

// Asynchronous.. Non-Blocking Request...
fs.writeFile("./test1.txt", "hello Vansh Nazwani", (err) => {}) 

//read the file
const result = fs.readFileSync("./test.txt", "utf-8");
console.log(result);     

// Asunchronous can't return any value always return undefined
const result1 = fs.readFile("./test1.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("error",err);
        
    }
    else{
        console.log(result1);
        
    }
});
 
//***** append the file
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()} Hey Vansh`);

fs.cpSync("./test.txt", "./test1.txt"); // copy the file 
fs.unlinkSync("./test1.txt"); // delete the file 

console.log(fs.statSync("./test.txt"));   // show statistics of a file 
console.log(fs.statSync("./test.txt").isFile());   // return that file is exist or not 

fs.mkdirSync("my-docs/a/b",{recursive: true}); //used to create folder and files 

console.log(os.cpus().length); // retrun the thread size (no. of workers in Thread Pool)


