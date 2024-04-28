import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/*import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDX1MEOYulstVVUzSznnWLl8NoVB4dkAHY",
  authDomain: "amorchiquito-cd6f5.firebaseapp.com",
  projectId: "amorchiquito-cd6f5",
  storageBucket: "amorchiquito-cd6f5.appspot.com",
  messagingSenderId: "459254990684",
  appId: "1:459254990684:web:ea4a750f156440e0ba2399",
};

initializeApp(firebaseConfig);*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
