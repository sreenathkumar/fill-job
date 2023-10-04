const loginBtn = document.getElementById("login-btn");

// login function
function login() {
    console.log("login");
}

// logout function
function logout(params) {
    console.log("logout");
}

// singup function
function signup(params) {
    console.log("signup");
}

// function to check if user is logged in or not
function auth() {
    console.log("checkLogin");
}

// fuction to fill up data in the form
function fillData() {
    console.log("fillData");
}

// fuction which will be called when popup is opened
function popup() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "from": "popup" });
    });
}

document.addEventListener("DOMContentLoaded", function () {

});