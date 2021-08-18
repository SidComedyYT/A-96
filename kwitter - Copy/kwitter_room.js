  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBDdFwMmTwzzVv4WBRDugPGpX7c25F4liQ",
    authDomain: "practice-94-9d4bb.firebaseapp.com",
    databaseURL: "https://practice-94-9d4bb-default-rtdb.firebaseio.com",
    projectId: "practice-94-9d4bb",
    storageBucket: "practice-94-9d4bb.appspot.com",
    messagingSenderId: "407327641515",
    appId: "1:407327641515:web:7da99ec3154448ab090cee",
    measurementId: "G-DQPGZFETPD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = " <div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + Room_names +"</div><hr>";
document.getElementById("output").innetHTML += row;
      //End code 
      });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page/html";
}
function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
  }
  