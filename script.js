
var usernum = parseInt(document.getElementById("userguess").value);
var para = document.getElementById("showpara")
var chances = document.getElementById("showchance")

var correctnum ;
var attempts ;
var number ; 
 
function resett() {
var levi = document.getElementById("levi").value

if(levi === 'easy'){
   number = 10;
}
else if(levi === 'meduim'){
    number = 50;
}
else if(levi === 'hard'){
   number = 100;
 }


correctnum =  Math.floor(Math.random() * number) + 1;
 attempts = 3
   
para.innerHTML = "Start";
chances.innerHTML = "Attempts " + attempts;
usernum.innerHTML = '';

}

resett()


function enterr(){
 var usernum = parseInt(document.getElementById("userguess").value);
 var levi = document.getElementById("levi").value

    if(levi === 'easy'){
        number = 10;
    }else if(levi === 'meduim'){
        number = 50;
    }else if(levi === 'hard'){
        number = 100;
    }

 correctnum =  Math.floor(Math.random() * number) + 1;
 
if(usernum == correctnum){
    para.innerHTML = "Conguratulation YOU WON! " + correctnum;
    chances.innerHTML = attempts + " Attempts left"
    return;
}
else if(usernum == correctnum + 1 || usernum == correctnum -1){
    para.innerHTML = "Almost close " + correctnum
    chances.innerHTML = attempts + " Attempts left"
    return;
}

else if( usernum  < 1 || usernum > number ){
    para.innerHTML = "Please put valid number between 1 to  " + number
}
else{
    para.innerHTML = "Guest wins! " + correctnum
    chances.innerHTML = attempts + " Attempts left"
}

attempts--;


if(attempts > 0 ){
    chances.innerHTML = attempts + " Attempts left"
}

else{

    para.innerHTML = "sorry you lose the game try again"
    chances.innerHTML = ""
}

}
