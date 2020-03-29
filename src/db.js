import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyBGBD3EK_RUcwGt5gBNUAmjf7gPRtgraw8',
    authDomain: 'burger-b4f13.firebaseapp.com',
    databaseURL: 'https://burger-b4f13.firebaseio.com',
    projectId: 'burger-b4f13',
    storageBucket: 'burger-b4f13.appspot.com',
    messagingSenderId: '165448603267',
    appId: '1:165448603267:web:15a63fe4cf3f21094aedb6',
    measurementId: 'G-TNZS7K2KLN'
  })
  .firestore()
