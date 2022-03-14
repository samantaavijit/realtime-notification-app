// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const REPLACE_WITH_YOUR_VAPID_KEY =
  "BEZrojX3kD5tAUW0T2VvwDVniq_tllhJ0gsIi0x_h3SJVPGW_modLn9f0WoX4jA3Y1c6zYoFx5EZlh2mSGtg6DE";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf7riDRLGL8kWw3n2VTwLt2tB5O7HZ7kY",
  authDomain: "memory-game-50a69.firebaseapp.com",
  projectId: "memory-game-50a69",
  storageBucket: "memory-game-50a69.appspot.com",
  messagingSenderId: "312435912146",
  appId: "1:312435912146:web:fab5ac967f8b8f3f0cac0b",
  measurementId: "G-NFVP6RGEB6",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: REPLACE_WITH_YOUR_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
        return currentToken;
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        return null;
      }
    })
    .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        return err;
    });
};
