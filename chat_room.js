const firebaseConfig = { apiKey: "AIzaSyBI7gTmoN1C7VGyciSybtUKV5nwoCtFRGA",
authDomain: "kwitterdessvin.firebaseapp.com",
databaseURL: "https://kwitterdessvin-default-rtdb.firebaseio.com",
projectId: "kwitterdessvin",
storageBucket: "kwitterdessvin.appspot.com",
messagingSenderId: "524978239770",
appId: "1:524978239770:web:a80cf5be1b289aa90d54a3" };




firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");
document.getElementById("User_name").innerHTML="Welcome "+username+"!";
function addroom()
{
      roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        purpose : "adding roomname"
    });
    
    localStorage.setItem("roomname", roomname);

    window.location = "chat_page.html";
    
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname="+Room_names);
row="<div class='room_name' id=" +Room_names+" onclick='redricttoroomname(this.id)' >#"+Room_names+" </div><hr>"; 
document.getElementById("output").innerHTML += row;
document.getElementById("roomname").innerHTML="";
      //End code
      });});}
getData();
function redricttoroomname(name){
      localStorage.setItem("roomname", name);

      window.location = "chat_page.html";
}
function logout(){
localStorage.removeItem("roomname");
localStorage.removeItem("username");
window.location="index.html";

}