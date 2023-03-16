const firebaseConfig = { apiKey: "AIzaSyBI7gTmoN1C7VGyciSybtUKV5nwoCtFRGA",
authDomain: "kwitterdessvin.firebaseapp.com",
databaseURL: "https://kwitterdessvin-default-rtdb.firebaseio.com",
projectId: "kwitterdessvin",
storageBucket: "kwitterdessvin.appspot.com",
messagingSenderId: "524978239770",
appId: "1:524978239770:web:a80cf5be1b289aa90d54a3" };




firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



