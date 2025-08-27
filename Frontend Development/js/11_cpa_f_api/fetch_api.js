// fetch-api
// api - application programming interface

// fetch-api - a interface for fetching (send/recieve) resources
// -request | -response {objects}

// const url = '';
// const getApiData = async () => {
//     let response = await fetch(url);
//     console.log(response);
// }
// getApiData();
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
// fetch_api.js:12 Response {type: 'basic', url: 'http://127.0.0.1:5500/11_cpa_f_api/index.html', redirected: false, status: 200, ok: true, …}

// AJAX - asynchronous JS and XML
// JSON - JavaScript Object Notation
// json() method: a second promise that resolves with the result of parsing the response body text as JSON.

// const url = 'https://api.github.com/users/igmansvi';
// const getApiData = async () => {
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
// }
// getApiData();
// function getApiData() {
//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
// }
// getApiData();

// HTTP_headers {
    // HTTP request verb - action_method
    // - GET, POST, PUT, DELETE, CONNECT, TRACE, PATCH

    // Response Status Code - request_completion_code
    // -informational response - (100-199)
    // -successful response - (200-299)
    // -redirection message - (300-399)
    // -client-error response - (400-499)
    // -server-error response - (500-599)
// }