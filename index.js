let postModalWrapper = document.querySelector('#post-modal-wrapper');
let inputPost = document.querySelector('#input-post')
let postModal = document.querySelector('#post-modal')
let closeButton = document.querySelector('#close-btn')

inputPost.addEventListener('click', ()=>{
    postModalWrapper.style.display = 'block'
    postModal.style.display = 'block'
    
})

closeButton.addEventListener('click', ()=>{
    postModalWrapper.style.display = 'none'
    postModal.style.display = 'none'
})