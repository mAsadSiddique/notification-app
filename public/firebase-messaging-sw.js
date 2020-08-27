importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyCRNJPlbxK5yba82KQmjvdia28BYvxzXdY",
    authDomain: "notificationapp-9a9d6.firebaseapp.com",
    databaseURL: "https://notificationapp-9a9d6.firebaseio.com",
    projectId: "notificationapp-9a9d6",
    storageBucket: "notificationapp-9a9d6.appspot.com",
    messagingSenderId: "294825414708",
    appId: "1:294825414708:web:112d8a2e4e8c9ffaad3a61"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();