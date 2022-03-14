importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAf7riDRLGL8kWw3n2VTwLt2tB5O7HZ7kY",
  authDomain: "memory-game-50a69.firebaseapp.com",
  projectId: "memory-game-50a69",
  storageBucket: "memory-game-50a69.appspot.com",
  messagingSenderId: "312435912146",
  appId: "1:312435912146:web:fab5ac967f8b8f3f0cac0b",
  measurementId: "G-NFVP6RGEB6",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
