function add(a,b) {
    return a+b;    
}

module.export = "add"; // export function to modules.js

function sub(a,b) {
    return a-b;
    
}

module.export = "sub";


// *** used to export multiply functions at same time by creating an object



// module.exports = {
//     addfn : add,
//     subfn : sub,
// }