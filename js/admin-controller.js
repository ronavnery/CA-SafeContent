'use strict';

function init() {
    var currUser = localStorage.getItem('User Name')
    gUsers.forEach(function(user) {
        if (user.userName === currUser && !user.isAdmin) {
            window.location.href('index.html');
        }
    })
}