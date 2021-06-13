var firebaseConfig = {
      apiKey: "AIzaSyAcF7xeLLWLNavKAlT2hIyJafrCKp0mCiQ",
      authDomain: "we-wo-8538e.firebaseapp.com",
      databaseURL: "https://we-wo-8538e-default-rtdb.firebaseio.com",
      projectId: "we-wo-8538e",
      storageBucket: "we-wo-8538e.appspot.com",
      messagingSenderId: "1092488169326",
      appId: "1:1092488169326:web:0fa428183259dfaf7c637f",
      measurementId: "G-7ZBSZP61Q6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room Name - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)'>#" + room_name + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwiiter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html"
}
