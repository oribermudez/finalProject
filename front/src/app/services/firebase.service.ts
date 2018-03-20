import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD6sztAJOwAVKrUNv7lWTHw750MTqwxaMA",
    authDomain: "improve-1521380413550.firebaseapp.com",
    databaseURL: "https://improve-1521380413550.firebaseio.com",
    projectId: "improve-1521380413550",
    storageBucket: "improve-1521380413550.appspot.com",
    messagingSenderId: "885021489160"
  };
  firebase.initializeApp(config);
export default firebase;

@Injectable()
export class FirebaseService {

  constructor() { }

}
