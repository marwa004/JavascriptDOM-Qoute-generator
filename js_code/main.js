const button=document.querySelector('#new_quote');
/*button.addEventListener('click',function click(){
 //return  alert('It has been clicked');
 //return button.style.color='blue';
})*/
const newQuote=document.querySelector('.quote');
newQuote.addEventListener('click',function(e){
    const target = e.target;
    if(target.matches('#new_quote')){
        newStatement();
    }
})

function randomNumber(){
const number= Math.floor(Math.random()*10)
return number
} 


function newStatement(){
    const newText=document.querySelector('p');
    const statement=document.createElement('p');
    const oldperson=document.querySelector('h4');
    const newperson=document.createElement('h4');
 
 switch(randomNumber())
 {
    
    case 1:
        
        statement.innerText="Do the best you can until you know better. Then when you know better do better. ";
        newText.replaceWith(statement);
        
        newperson.innerText="MAYA ANGELOU";
        oldperson.replaceWith(newperson);
        break;

     case 2:
        
    statement.innerText="Nothing is impossible , the word itself says I'm possible";
    newText.replaceWith(statement);
    newperson.innerText="AUDREY HEPBURN";
    oldperson.replaceWith(newperson);   
    break;

    case 3:
        statement.innerText="The way I see it , if you want the rainbow, you gotta put up with the rain ";
    newText.replaceWith(statement);
    newperson.innerText="DOLLY PARTON";
    oldperson.replaceWith(newperson);   
    break;
    case 4:
        statement.innerText="When you have a dream ,you've got to grab it and never let it go";
    newText.replaceWith(statement);
    newperson.innerText="CAROL BURNETT";
    oldperson.replaceWith(newperson);   
    break;
    case 5:
        statement.innerText="All our dreams can come true, if we have the courage to pursue them ";
    newText.replaceWith(statement);
    newperson.innerText="WALT DISNEY";
    oldperson.replaceWith(newperson);   
    break;
    case 6:
        statement.innerText="Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time";
    newText.replaceWith(statement);
    newperson.innerText="THOMAS EDISON";
    oldperson.replaceWith(newperson);   
    break;
     
    case 7:
        statement.innerText="The man who has done his level best is a... success, even though the world might write him down as a failure ";
    newText.replaceWith(statement);
    newperson.innerText="B.C FORBES";
    oldperson.replaceWith(newperson);   
    break;

    case 8:
        statement.innerText="However difficult life may seem , there is always something you can do and succeed at. ";
    newText.replaceWith(statement);
    newperson.innerText="STEPHEN HAWKING";
    oldperson.replaceWith(newperson);   
    break;

    case 9:
        statement.innerText="Remember that the airplane takes off against the wind not with it";
    newText.replaceWith(statement);
    newperson.innerText="HENRY FORD";
    oldperson.replaceWith(newperson);   
    break;
      
    
         
 }

    
}
 