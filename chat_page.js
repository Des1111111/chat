const firebaseConfig = { apiKey: "AIzaSyBI7gTmoN1C7VGyciSybtUKV5nwoCtFRGA",
authDomain: "kwitterdessvin.firebaseapp.com",
databaseURL: "https://kwitterdessvin-default-rtdb.firebaseio.com",
projectId: "kwitterdessvin",
storageBucket: "kwitterdessvin.appspot.com",
messagingSenderId: "524978239770",
appId: "1:524978239770:web:a80cf5be1b289aa90d54a3" };




firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");

room_name=localStorage.getItem("roomname");
function send(){
msg=document.getElementById("msg").value ;
firebase.database().ref(room_name).push({
username:username,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location="index.html";
    
    }
