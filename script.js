let allmenu=document.querySelectorAll('.menu');
let affter=document.querySelector('.affter')
let beffor=document.querySelector('.beffor')
let randomBtn=document.querySelector('.random')
let index=0;


// next menu
affter.addEventListener('click',()=>{
    if(index < allmenu.length-1){
        allmenu[index].style.display="none"
        index++;
        allmenu[index].style.display="flex"
    }
    
})
//beffor menu
beffor.addEventListener('click',()=>{
    if(index <= allmenu.length-1 && index!=0){
        allmenu[index].style.display="none"
        index--;
        allmenu[index].style.display="flex"
    }
})
 // random menu
randomBtn.addEventListener('click',()=>{
    allmenu[index].style.display="none";
    index=Math.floor(Math.random() * allmenu.length);
    allmenu[index].style.display="flex";
})

