import firebase from 'firebase';


// const { configure } = require("@testing-library/react");

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
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            // Get Instance ID token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>", currentToken);
                } else {

                    console.log('No Instance ID token available. Request permission to generate one.');

                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        }
    })
}