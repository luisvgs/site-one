import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlkfeL4Z2W75skK39azye8CGRpVqcusBA",
  authDomain: "techmindsacademy-5f7f4.firebaseapp.com",
  projectId: "techmindsacademy-5f7f4",
  storageBucket: "techmindsacademy-5f7f4.appspot.com",
  messagingSenderId: "29989098666",
  appId: "1:29989098666:web:4cbed2406f2a3d7c2e2cd3",
  measurementId: "G-ZCTKJBX4B4",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
getPerformance(app);

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();
