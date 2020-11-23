import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDnN6vpFh5AQocsBkuIfPcw2GXada-_9kk",
  authDomain: "antonio-gasco-portfolio.firebaseapp.com",
  databaseURL: "https://antonio-gasco-portfolio.firebaseio.com",
  projectId: "antonio-gasco-portfolio",
  storageBucket: "antonio-gasco-portfolio.appspot.com",
  messagingSenderId: "700640760914",
  appId: "1:700640760914:web:6a538133483a76b9d77b8b",
  measurementId: "G-6VNZPS57G6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
