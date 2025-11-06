function test(callback) {
    console.log('callback function');
    callback();
}

// function success(user) {
//     console.log(`email is sent successfully to ${user}`);
// }

function sendEmail(user, success) {
    console.log(`sending email to ${user}`);
    setTimeout(() => {
        console.log('email sent');
        success(user);
    }, 3000)
}

const user = 'mansvi';
// sendEmail(user, success);

// anonymous function as callback
// sendEmail(user, () => {
//     console.log('success');
// })

const orderItem = (item, time, failure, success) => {
    if(time > 3000) {
        failure(item);
    } else {
        success(item);
    }
}

const failure = (item) => {
    console.log(`failed to prepare ${item}`);
}

const success = (item) => {
    console.log(`${item} prepared successfully`)
}

orderItem('food', 2000, failure, success);