function login() {
	window.location.href = './about.html';
}
// function toggleSearchBar() {
// 	const searchBarContainer = document.getElementById("searchBarInput");
// 	searchBarContainer.style.display = (searchBarContainer.style.display === "block") ? "none" : "block";
// }

function toggleSearchBar() {
    const searchBarContainer = document.getElementById("searchBarInput");
    searchBarContainer.style.display = (searchBarContainer.style.display === "block") ? "none" : "block";
}
document.addEventListener('DOMContentLoaded', function () {
    const helpBox = document.querySelector('.help-box');
    const searchBarContainer = document.getElementById('searchBarInput');

    helpBox.addEventListener('mouseover', function () {
        toggleSearchBar();
    });

    helpBox.addEventListener('mouseout', function () {
        toggleSearchBar();
    });

    // Add event listeners for the "Location" text
    const locationText = document.querySelector('.right p');

    locationText.addEventListener('mouseover', function () {
        showLocationDropdown();
    });

    locationText.addEventListener('mouseout', function () {
        hideLocationDropdown();
    });

    function showLocationDropdown() {
        const locationDropdown = document.getElementById('locationDropdown');
        locationDropdown.style.display = 'block';
    }

    function hideLocationDropdown() {
        const locationDropdown = document.getElementById('locationDropdown');
        locationDropdown.style.display = 'none';
    }
});
