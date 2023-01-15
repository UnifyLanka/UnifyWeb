//web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCQ8tq4SlRj__qka6YWuxuJ_dgJDyWMhQM",
   authDomain: "unifylk.firebaseapp.com",
   projectId: "unifylk",
   storageBucket: "unifylk.appspot.com",
   messagingSenderId: "229829563122",
   appId: "1:229829563122:web:7525b5a6c8be9c8045766b"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
 db.settings({ timestampsInSnapshots: true });