import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCW_zfvSvB_kmqDee7-_Y7Znxf_hwilWwo",
  authDomain: "academic-virtual-advising.firebaseapp.com",
  databaseURL: "https://academic-virtual-advising-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
