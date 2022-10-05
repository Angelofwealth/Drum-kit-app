const buttons = document.querySelectorAll('.drum');


// for (let index = 0; index < buttons.length; index++){
//     buttons[index].addEventListener('click', () => {alert('clicked')

// })
// }

document.addEventListener("keydown", handleKeyboardEvent)

function handleKeyboardEvent(event){
const key = event.key
makeSound (key);
addAnimation(key)

}


function makeSound(drumkey)
{

switch(drumkey){

    case 'w':
        const tom1Sound = new Audio('sounds/tom-1.mp3')
        tom1Sound.play()
        break;
    case 'a': 
        const tom2Sound = new Audio('sounds/tom-2.mp3')
        tom2Sound.play()
        break;
    case 's': 
        const tom3Sound = new Audio('sounds/tom-3.mp3')
        tom3Sound.play()
        break;

    case 'd': 
        const tom4Sound = new Audio('sounds/tom-4.mp3')
        tom4Sound.play()
        break;

    case 'j': 
        const tom5Sound = new Audio('sounds/snare.mp3')
        tom5Sound.play()
        break;

    case 'k': 
        const tom6Sound = new Audio('sounds/crash.mp3')
        tom6Sound.play()
        break;

    case 'l':
        const tom7Sound = new Audio('sounds/kick-bass.mp3')
        tom7Sound.play()
        break;
    default:
        console.error(error)
        break;
    
}

}

buttons.forEach(buttonElement => {
    buttonElement.addEventListener('click', handleClickEvent)

})

function handleClickEvent(){
 const drum = this.textContent
 makeSound(drum);
 addAnimation(drum);


switch(drum){
    case 'w':
        const tom1Sound = new Audio('sounds/tom-1.mp3')
        tom1Sound.play()
        break;
    case 'a': 
        const tom2Sound = new Audio('sounds/tom-2.mp3')
        tom2Sound.play()
        break;
    case 's': 
        const tom3Sound = new Audio('sounds/tom-3.mp3')
        tom3Sound.play()
        break;

    case 'd': 
        const tom4Sound = new Audio('sounds/tom-4.mp3')
        tom4Sound.play()
        break;

    case 'j': 
        const tom5Sound = new Audio('sounds/snare.mp3')
        tom5Sound.play()
        break;

    case 'k': 
        const tom6Sound = new Audio('sounds/crash.mp3')
        tom6Sound.play()
        break;

    case 'l':
        const tom7Sound = new Audio('sounds/kick-bass.mp3')
        tom7Sound.play()
        break;
    default:
        console.error(error)
        break;
    
}
}

function addAnimation(drumkey){
const activeDrum = document.querySelector(`.${drumkey}`)
activeDrum.classList.add('pressed')

setTimeout(() => {
    activeDrum.classList.remove('pressed')
},
    100);

}


//  if (drum ==='w'){
// const tom1Sound = new Audio('sounds/tom-1.mp3')
// tom1Sound.play()

//  }
// if (drum ==='a'){
// const tom1Sound = new Audio('sounds/tom-2.mp3')
// tom1Sound.play()

//  }
//  if (drum ==='s'){
// const tom1Sound = new Audio('sounds/tom-3.mp3')
// tom1Sound.play()

//  }
// if (drum ==='d'){
// const tom1Sound = new Audio('sounds/tom-4.mp3')
// tom1Sound.play()

//  }
//  if (drum ==='j'){
// const tom1Sound = new Audio('sounds/crash.mp3')
// tom1Sound.play()

//  }
//  if (drum ==='k'){
// const tom1Sound = new Audio('sounds/kick-bass.mp3')
// tom1Sound.play()

//  }
//  if (drum ==='l'){
// const tom1Sound = new Audio('sounds/snare.mp3')
// tom1Sound.play()

//  }
// }





