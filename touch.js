let random_num = 10 + Math.floor(Math.random() * 11)
let random_num_fingers = Math.ceil(Math.random() * 4)

let h3element_touch = document.getElementById('touch-title')
h3element_touch.textContent = "Touch yourself for " + String(random_num) + " seconds without cumming"

let h3element_fingers = document.getElementById('touch-fingers')
if (random_num_fingers == 1){
    h3element_fingers.textContent = "Finger your ass with " + random_num_fingers + " finger for " + random_num + " seconds!"
} else {
    h3element_fingers.textContent = "Finger your ass with " + random_num_fingers + " fingers for " + random_num + " seconds!"
}

let finishedbutton = document.getElementById('finishedbtn')
let startbutton = document.getElementById('startbtn')
finishedbutton.style.display = 'none'
var elem = document.getElementById('counter');




function counting(){
    var timeLeft = random_num;

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
        clearTimeout(timerId);
        finishedbutton.style.display = 'block'
        elem.style.display = 'none'
        } else {
        startbutton.style.display = 'none'
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;

        }
    }
}

startbutton.addEventListener("click", counting)