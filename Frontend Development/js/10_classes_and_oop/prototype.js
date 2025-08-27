let myName = "    ";
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "webShooter",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.m4vi = () => {
    console.log(
        "i am here!"
    );
}
Array.prototype.here = () => {
    console.log(
        "i am here!"
    );
}
// heroPower.m4vi();
// myHeros.m4vi();
// heroPower.here();

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`trueLength: ${this.trim().length}`);
}
"mansvi     ".trueLength();
console.log('length: ',"mansvi     ".length);