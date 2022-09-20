
var length = document.querySelectorAll(".drum").length

for(var num = 0; num<length; num++){
    document.querySelectorAll("button")[num].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    },1000);       
};

document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
},1000);

function makeSound(key){
        switch(key){
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
            break;
            case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            break;
            case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            break;
            case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            break;
            case "j":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
            break;
            case "k":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
            break;
            case "l":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            break;
            default:console.log(buttonInnerHTML);
        }     
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(()=>{
    activeButton.classList.remove("pressed");
   },300);
}
