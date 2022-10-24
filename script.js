const vertical=document.querySelector(".bar");
const input=document.querySelector(".input");
const maxinput=document.querySelector(".maxinput");
const show= document.querySelector(".h");

let value=0;
let max=0;

function changeValue(){
    if(value<=max){
        vertical.style.height=`${(value/max)*100}%`;
    vertical.innerText=`${Math.ceil((value/max)*100)}%`;
    
    }
    else{
        alert("Wrong Input! Don't Enter more than max input")
    }
  
   
}



input.addEventListener("keyup", function(){
    value=parseInt(input.value,10);
    changeValue();
    
})

maxinput.addEventListener("keyup", function(){
    max=parseInt(maxinput.value, 10);
    changeValue();
    
})