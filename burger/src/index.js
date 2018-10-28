import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'

firebase.initializeApp({apiKey: "AIzaSyAjovfnX7-siC6oHVe-b1qsCSHEwR_g3Cs",
authDomain: "burger-queen-35f47.firebaseapp.com",
databaseURL: "https://burger-queen-35f47.firebaseio.com",
projectId: "burger-queen-35f47",
storageBucket: "burger-queen-35f47.appspot.com",
messagingSenderId: "611708104239"
})


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
