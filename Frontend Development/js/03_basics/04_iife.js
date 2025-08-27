// Immediately Invoked Function Expressions (IIFE)

function chai() {
    console.log(`DB connected`);
}
// chai();

(function chai() {
    console.log(`DB connected`);
}) (); //--automatically invoked Named_IIFE
// ; needed to end invoked function

// ( ()=>{
//     console.log(`DB connected`);
// } ) ();

( (name) => {
    console.log(`Hello, ${name}`);
} ) ("Mansvi");