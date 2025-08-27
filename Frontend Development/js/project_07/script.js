const submit = document.querySelector('#submitBtn');
const searchContainer = document.querySelector('.search-container');
const profileContainer = document.querySelector('.profile-container');
const container = document.querySelector('.container');
let userData;

function displayData(data) {
    document.querySelector('.profile').innerHTML = `<img src=${data.avatar_url} alt=${data.name}_avatar>`;
    document.querySelector('.data').innerHTML = `
    <p>Name: ${data.name}</p>
    <p>UserName: ${data.login}</p>
    <p>Profile link: <a href=${data.html_url}>${data.html_url}</a></p>
    <p>Repository link: <a href=${data.repos_url}>Click here to visit repos!</a></p>
    `;
    searchContainer.classList.add('moved-up');
    profileContainer.style.display = 'block';
    container.classList.add('active');
}

submit.addEventListener('click', (e) => {
    const requestUrl = `https://api.github.com/users/${userInput.value}`;
    console.log(`Request sent: ${requestUrl}`);
    const response = fetch(requestUrl);
    response.then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data);
        displayData(data);
    })
    response.catch((error) => {
        console.log(error);
    });
    response.finally(() => {
        console.log("requestClosed");
    });
});