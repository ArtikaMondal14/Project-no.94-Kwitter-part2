const firebaseConfig = {
      apiKey: "AIzaSyDjL27bAro17xKvuDlrz-XEKcCZ8weQRmU",
      authDomain: "kwitter-11b81.firebaseapp.com",
      databaseURL: "https://kwitter-11b81-default-rtdb.firebaseio.com",
      projectId: "kwitter-11b81",
      storageBucket: "kwitter-11b81.appspot.com",
      messagingSenderId: "836908897246",
      appId: "1:836908897246:web:10f4ddcca8f4e5bc62034f"
    };// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
