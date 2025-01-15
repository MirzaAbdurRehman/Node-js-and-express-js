// Problem Soling for asynchronous programming

// let firstName = "Umair";   // First way   with promises
// let lastName = "";

// const setLastname =  new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         lastName  = "Jaswal"
//         resolve()
//      },2000)
// })

// setLastname.then(() =>{
//     console.log(`${firstName} ${lastName}`);
// })

// console.log('Hello');

let firstName = "Abid";
let lastName = "";

// Function to set the last name
const setLastname = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastName = "Ahsan";
            resolve();
        }, 2000);
    });
};

// Async function to display the full name
const displayFullName = async () => {
    await setLastname(); // Wait for the promise to resolve
    console.log(`${firstName} ${lastName}`); // Display the full name
};

// Call the function
displayFullName();




