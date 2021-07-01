//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAvTtMhZ9xcDELbHfMBy7jikHCGZ6_1pvA",
      authDomain: "kwitterapp-6165f.firebaseapp.com",
      databaseURL: "https://kwitterapp-6165f-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-6165f",
      storageBucket: "kwitterapp-6165f.appspot.com",
      messagingSenderId: "1095923430040",
      appId: "1:1095923430040:web:7a3b74d8285b80a37096ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
