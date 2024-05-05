let names = localStorage.getItem('name')


const bodyparts = ["ass", "chest", "mouth", "bits"]

let random_time = 7 + Math.ceil(Math.random() * 8)

let bodyTime = document.getElementById('bodypart-time')

let num_bodypart = Math.floor(Math.random() * bodyparts.length)


bodyTime.textContent = "Show your " + bodyparts[num_bodypart] + " for " + random_time + " seconds!"

let startbutton = document.getElementById('startbtn')
let finishedbtn = document.getElementById('finishedbtn')
finishedbtn.style.display = 'none'

let elem = document.getElementById('counter')

function counting(){
    var timeLeft = random_time;

    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
        clearTimeout(timerId);
        finishedbtn.style.display = 'block'
        elem.style.display = 'none'
        } else {
        startbutton.style.display = 'none'
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;

        }
    }
}

startbutton.addEventListener("click", counting)