// if
// <, >, <=, >=, ==, !=, ===, !==

const isUserLogged = true
if(2 === "2") {
    console.log("executed");
}

if(isUserLogged) {
    console.log(`logged in!`);
}

const temp = 51;
// if(temp > 30) {
//     console.log("tmp > 30");
// } else if(temp > 40) {
//     console.log("tmp > 40");
// } else {
//     console.log("tmp < 30");
// }

// if(temp > 54) console.log("tmp > 30"),  console.log("tmp > 40"); --!reduces readibility

const debitCard = false
if(isUserLogged && debitCard) {
    console.log("Access Granteed");
} else if(isUserLogged && !debitCard) {
    console.log("debit card needed")
} else {
    console.log("Denied");
}