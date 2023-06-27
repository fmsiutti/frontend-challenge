'use strict'
console.log('this is happening at least')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);

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