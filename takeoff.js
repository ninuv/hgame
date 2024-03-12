

const cloths = []
let sweatshirt = localStorage.getItem('sweatshirt')
if (sweatshirt == 'yes'){
    cloths.push('sweatshirt')
}

let tshirt = localStorage.getItem('tshirt')
if (tshirt == 'yes' && sweatshirt == 'no'){
    cloths.push('T-shirt')
}

let pants = localStorage.getItem('pants')
if (pants == 'yes'){
    cloths.push('pants')
}

let underwear = localStorage.getItem('underwear')
if (underwear == 'yes' && pants == 'no'){
    cloths.push('underwear')
}

let socks = localStorage.getItem('socks')
if (socks == 'yes'){
    cloths.push('socks')
}

console.log(cloths)

random_clothes = Math.floor(Math.random() * cloths.length)


let cloth = cloths[random_clothes]
if (cloth == "T-shirt"){
    cloth = "tshirt";
}
localStorage.setItem(cloth, 'no')

let h3element_clothing = document.getElementById('title-clothing')
if (cloths.length != 0){
    if (cloth == "tshirt"){
        cloth = "T-shirt"
    }
    h3element_clothing.textContent = "Take off your " + cloth
}else{
    h3element_clothing.textContent = "You are completely nude already!"
}