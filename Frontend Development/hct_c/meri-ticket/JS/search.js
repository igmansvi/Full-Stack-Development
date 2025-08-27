console.log("script is working...")
function search() {
    const userInput = document.getElementById("searchBarInputgiven").value.toLowerCase();

    // defing keywords and their corresponding sections
    const keywords = {
        'theatre': 'theatre1',
        'music': 'music1',
        'workshop': 'workshop1',
        'pay': 'payment.html',
        'book':'payment.html',
        'contact': 'contactus.html',
        'about': 'about.html',
        'event': 'event.html',
        'movie':'theatre1',
        'login':'login.html',
        'signin':'signup.html',
        'help':'browse',
        'home':'home.html',
        'about':'about.html'
        //keywords can be added as much as i can
    };
    const target = keywords[userInput];

    if (target) {
        if (target.endsWith('.html')) {
            const pageUrl = target;
            console.log("Redirecting to:", pageUrl);//to check script is working
            window.location.href = pageUrl;
        } else {
            const otherUrl = `event.html?section=#${target}`;
            console.log("Redirecting to:", otherUrl); // to check script is working
            window.location.href = otherUrl;
        }
    } else {
        alert("No matching section or page found for the given keyword!");
    }
}
console.log('mouse event click passed')
console.log('waiting for enter pressed')
document.getElementById("searchBarInputgiven").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
    }
});