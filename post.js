let post = document.querySelector('#post')
let postBtn = document.querySelector('#postBtn')


firebase.auth().onAuthStateChanged((user) => {

    var uid = user.uid;

    if (user) {
        console.log(user)
        postBtn.addEventListener('click', ()=>{
          if(post.value !==""){
            firebase.firestore().collection("post").doc().set({
                post: post.value,
                date: new Date().toLocaleString(),
                userId: uid
            })
            .then(() => {
                console.log("Document successfully written!");
                post.value = ''
                window.location.reload()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
          }
          else{
              alert('Write Something')
          }
        })



        firebase.firestore().collection('users').get().then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
            console.log(doc.data())


            var userIdUser = doc.id;
            let userName = doc.data().fullName

            console.log(userIdUser)
            console.log(userName)
        


            firebase.firestore().collection("post").get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                let postId = doc.data().userId;

                if(userIdUser == postId){

                
          
                  let mainPost = document.querySelector('#post-main');
                  let profileContainer = document.createElement('img')
                  let postDiv = document.createElement('div');
                  let dateDiv = document.createElement('div');
                  let dateAndUsernameDiv = document.createElement('div')
                   
                  let menu = document.createElement('img')
                  let editPostDiv = document.createElement('div')
                  let dateContainer = document.createElement('div')
                  let userNameContainer = document.createElement('div')

                  let editSpan = document.createElement('span')
                  let deleteSpan = document.createElement('div')
               

                  editSpan.innerText = 'Edit post'
                  deleteSpan.innerText = 'Delete post'

                  dateDiv.append(userNameContainer)
                  dateDiv.append(dateContainer)

                  userNameContainer.append(userName)
                  dateContainer.append(doc.data().date)
                   
                  dateDiv.setAttribute('class','date-div')

                profileContainer.setAttribute('src', 'images/martin.png')

                profileContainer.style.borderRadius = '50%'
                profileContainer.style.width = '30px'
                profileContainer.style.height = '30px'


                  postDiv.setAttribute('id', 'post')
                  dateAndUsernameDiv.append(profileContainer)
                  dateAndUsernameDiv.append(dateDiv)
                  mainPost.append(postDiv)
                  postDiv.append(dateAndUsernameDiv)
                  
                  postDiv.append(doc.data().post)
                  
                
                  menu.setAttribute('docId', doc.id)
                  menu.setAttribute('src', 'images/menu.png')
                  dateAndUsernameDiv.append(menu)




                  menu.addEventListener('click', ()=>{
                    let docId = menu.getAttribute('docId');
                    console.log(docId)

                    let editPostId = editPostDiv.getAttribute('id')
                    document.getElementById(editPostId).style.display = 'block'

                  })

                  editPostDiv.setAttribute('id', doc.id)
                  editSpan.setAttribute('id', doc.id)

                  postDiv.append(editPostDiv)
                  editPostDiv.append(editSpan)
                  editPostDiv.append(deleteSpan)

                  editSpan.addEventListener('click', ()=>{
                    let editSpanId = editSpan.getAttribute('id')
                    document.getElementById(editSpanId).style.display = 'none'
                    editPostModal.style.display = 'block'
                  })

                
                
                 let editPostModal = document.getElementById('editPostModal')
      
      
                  //styling
                  dateContainer.style.fontSize = '10px'
                  dateAndUsernameDiv.style.display = 'flex'
                  dateAndUsernameDiv.style.marginBottom = '30px'
                  postDiv.style.margin = '20px';
                  postDiv.style.backgroundColor ='white';
                  postDiv.style.height = 'fit-content';
                  postDiv.style.marginLeft = '70px';
                  postDiv.style.marginTop = '50px'
                  postDiv.style.borderRadius = '5px';
                  postDiv.style.fontSize = '30px';
                  postDiv.style.padding = '20px'
                  dateAndUsernameDiv.style.positon = 'relative'

                  menu.style.height = "20px"
                  menu.style.width  = '20px'
                  menu.style.position = 'absolute'
                  menu.style.right = '330px'
                  

                  editPostDiv.style.width = '150px'
                  editPostDiv.style.height = '70px'
                  editPostDiv.style.backgroundColor = 'gray'
                  editPostDiv.style.position = 'relative'
                  editPostDiv.style.top = '-105px'
                  editPostDiv.style.right = '-380px'
                  editPostDiv.style.display = 'none'

                  editPostModal.style.position = 'absolute';
                  editPostModal.style.backgroundColor ='gray';
                  editPostModal.style.height = '250px';
                  editPostModal.style.width = '250px';
                  editPostModal.style.borderRadius = '10px';
                  editPostModal.style.zIndex = '1';
                  editPostModal.style.border= '10px solid black'
                  editPostModal.style.left = '450px';
                  editPostModal.style.top = '200px'
                  editPostModal.style.display = 'none'

                  
                  dateAndUsernameDiv.style.positon = 'relative'

                 
                }
              });
          
          });
        });
          
      });
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      
      

        
     
     
     
     
     
     
     
     
     
     
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
      

// Add a new document in collection "cities"

// postBtn.addEventListener('click', ()=>{
//     firebase.firestore().collection("post").doc().set({
//         post: post.value,
//         date: new Date().toLocaleString()
//     })
//     .then(() => {
//         console.log("Document successfully written!");
//         post.value = ''
//         window.location.reload()
//     })
//     .catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// })
    
//get posts

// var docRef = firebase.firestore().collection("post").doc();

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });






        


  