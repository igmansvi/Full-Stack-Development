if(true) {
    let a = 10
    var b = 11
    const c = 12
}
// console.log(a); -local
// console.log(b); -global
// console.log(c); -local

function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

// addone(1);
function addone(num) {
    return num+1;
}
// addtwo(2); --!scope hoisting
const addtwo = function(num) {
    return num+2;
}