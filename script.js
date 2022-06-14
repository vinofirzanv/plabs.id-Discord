const close = document.querySelectorAll('.close');
for( let i = 0;i<close.length;i++){
    close[i].addEventListener('click',function(e){
         e.target.parentElement.parentElement.style.display = "none";
    }); 
}

// const sideBar = document.querySelector('.side-bars');

// sideBar.addEventListener('click',function(e){
//     if(e.target.className == 'close'){
//         e.target.parentElement.style.display='none';
//         e.preventDefault();
//     }
// });