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




const sideBar = document.getElementsByClassName("side-bars");
const add = document.querySelectorAll('.add');
add.addEventListener('click',function(e){
    const aBaru = document.createElement('a');
    const buttonBaru = document.createElement('button');
    const textBaru = document.createTextNode('Adol');
    aBaru.appendChild(buttonBaru);
    buttonBaru.appendChild(textBaru);
    
    e.target.appendChild(aBaru);
});
