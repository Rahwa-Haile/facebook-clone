firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    //   var uid = user.uid;
    //   console.log(user.email)
    //   document.querySelector('#userName').innerHTML = user.firstName;
    //   document.querySelector('#email').innerHTML = user.email;
      // ...

      console.log(user.uid)
      
      firebase.firestore().collection("post").where('userId', '==' , user.uid).get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
               

            console.log(doc.data())
            // if(user.uid==doc.id){
            //   // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
            //   console.log(doc.data().firstName)
            //   console.log(doc.data().email)
              

            //   document.getElementById('userName').innerHTML = doc.data().firstName
            //   document.getElementById('email').innerHTML = doc.data().email

            
            
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });


    } else {
      // User is signed out
      // ...
    }
  });