'use strict';

function init() {
    var currConnectedUser = localStorage.getItem('User Name');
    if (currConnectedUser) {
        onSuccessfulLogin(currConnectedUser)
    } else {
        var elsToHide = document.querySelectorAll('.secret-container, .logout, .goto-admin');
        elsToHide.forEach(function (el) { el.classList.add('hide') });
    }
    var elPassword = document.querySelector('.password-input');
    elPassword.addEventListener("keyup", function (ev) {
        if (ev.key === 'Enter') onDoLogin();
    });
}

function onDoLogin() {
    var loginData = document.querySelector('.username-input').value;
    var passData = document.querySelector('.password-input').value;
    var userLogin = doLogin(loginData, passData);
    if (userLogin) onSuccessfulLogin(userLogin) 
    else {
        // TODO: Add animtaion
        console.log('login failed');
    };
}

function onSuccessfulLogin(userLogin) {
    document.querySelector('.login-container').classList.add('hide');
    document.querySelector('.secret-container').classList.add('center');
    document.querySelector('.greeting').innerText = `Welcome, ${userLogin.userName}`;
    var elsToShow = document.querySelectorAll('.secret-container, .logout, .greeting')
    elsToShow.forEach(function(el) {el.classList.remove('hide')})
    if (userLogin.isAdmin) {
        document.querySelector('.goto-admin').classList.remove('hide');
    }
}

function onDoLogout() {
    document.querySelector('.secret-container').classList.remove('center');
    document.querySelector('.login-container').classList.remove('hide');
    var elsToHide = document.querySelectorAll('.greeting, .logout, .secret-container, .goto-admin');
    elsToHide.forEach(function (el) { el.classList.add('hide') })
    doLogout();
}