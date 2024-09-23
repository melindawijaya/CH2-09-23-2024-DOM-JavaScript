// document.querySelector("button").addEventListener("click",()=> handleClick("Hai"));

// function handleClick(greet) {
//     alert(`Hello FSW 2  $(greet)`);
// }

// handleClick();

console.log(document.querySelectorAll("button")[3]);

//Array.length()

let totalButton = document.querySelectorAll("button").length;


for(let i=0; i<totalButton; i++){
    console.log(i)
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // alert("Hello FSW 2 dari button index " + i);

        let button = document.querySelectorAll("button")[i];

        button.style.color = "red";

        setTimeout(function () {
            button.style.color = "";
        }, 2000);
        


        switch(button.innerHTML) {
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            
        }
    });
}

document.addEventListener("keydown", event=>{
    // if (event.key.startsWith("a")){
    //     console.log("ini a");
    // }
    
    // let button = document.querySelectorAll("button");

    // button.style.color = "red";

    setTimeout(function () {
        button.style.color = "";
    }, 2000);

    if (event.key.startsWith("w")){
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
    }
    else if (event.key.startsWith("a")){
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
    }
    else if (event.key.startsWith("s")){
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
    }
    else if (event.key.startsWith("d")){
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
    }
    else if (event.key.startsWith("j")){
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
    }
    else if (event.key.startsWith("k")){
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
    }
    else if (event.key.startsWith("l")){
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
    }
        
});







