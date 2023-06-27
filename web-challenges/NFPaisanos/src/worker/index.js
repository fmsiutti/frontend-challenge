'use strict'

// Import the functions you need from the SDKs you need
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCcs3ZXPhpSoCHC2Y0L6BJRlzxrvUiiwU",
  authDomain: "nftmarketplace-4c634.firebaseapp.com",
  projectId: "nftmarketplace-4c634",
  storageBucket: "nftmarketplace-4c634.appspot.com",
  messagingSenderId: "68028829036",
  appId: "1:68028829036:web:e44ebd5bc745e0f6bab749"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

  // Request the push notification permission from browser
  Notification.requestPermission().then(result => {
    if (result === 'granted'){
      console.log('here')
      messaging.getToken({
        vapidKey: "BCnhGW4N32RtZYTH27_1zMfrfYMuixyYJxcJv-OQcJoKZkMQmPHjXIjcgDUdbUSH2Z5RICd1wn3c2cMjsvWiO3s",
      }).then(fcm_token => {
        if (fcm_token) {
          console.log({fcm_token});
        }
      })
    }
  })


self.addEventListener('push', function (event) {
  var data = event.data.json();

  const title = data.Title;
  data.Data.actions = data.Actions;
  const options = {
    body: data.Message,
    data: data.Data
  };
  event.waitUntil(self.registration.showNotification(title, options));
})

self.addEventListener('notificationclick', function (event) {})

self.addEventListener('notificationclose', function (event) {})