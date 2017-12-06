
import * as firebase from 'firebase';
import {Alert} from 'react-native';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCKlOiIw5IbXbxWEPFyRUg-nx6PX8qLAB8",
  authDomain: "rnproject-ce73e.firebaseapp.com",
  databaseURL: "https://rnproject-ce73e.firebaseio.com",
  projectId: "rnproject-ce73e",
  storageBucket: "rnproject-ce73e.appspot.com",
  messagingSenderId: "739855839716"
};
//initialize 
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

//Object for call API
 var  ApiCall = {

    createUser(email,password) {
   /////////////////////////////////////////////////////User SignIn////////////////////////////////////////////////

        return firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
            Alert.alert (errorMessage);
        });

////////////////////////////////////////////////////Create User///////////////////////////////////////////////

        // return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        // .catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     if (errorCode == 'auth/weak-passwordyufgufuf') {
        //         return  errorMessage;
        //     } else {
        //         return  errorMessage;
        //     }
        // });
    }

    
}
module.exports = ApiCall;