'use strict';

var gUsers = createUsers();

function createUsers() {
    return [
        createUser('Ron','ronpass', true),
        createUser('Elsa','elsapass', false),
        createUser('Omer','omerpass', false)
        ]
}

function createUser(userName, password, isAdmin) {
    return {userName: userName, password: password, isAdmin: isAdmin, lastLogin: null}
}

function doLogin(loginData, passData) {
    var loginSuccess = gUsers.find(function(user) {
        return (loginData === user.userName && passData === user.password);
    })
    if (loginSuccess) {
        loginSuccess.lastLogin = Date.now();
        clearLocalStorage();
        saveLogin(loginSuccess);
    }
    return loginSuccess;
}

function saveLogin(user) {
    localStorage.setItem('User Name', user.userName);
    localStorage.setItem('Last Login', user.lastLogin);
}

function clearLocalStorage() {
    localStorage.clear();
}

function doLogout() {
    clearLocalStorage();
}