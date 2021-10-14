

let btn = document.getElementById('registerbtn')

btn.addEventListener('click', (event)=>{


  event.preventDefault();


    let fullName = document.getElementById('fullName').value
    let email = document.getElementById('Email').value
    let password = document.getElementById('password').value

  const db = firebase.firestore()

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
   

    db.collection("users").doc(user.uid).set({
        fullName: fullName,
        email: email,
        password: password
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    // ...
  })

        
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
    // ..
  });
})


  