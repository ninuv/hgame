const categ = [
    "Amateur",
    "Anal",
    "BBW",
    "Big Ass",

    "Big Dick",
    "Big Tits",
    "Blonde",
    "Blowjob",
    "Bondage",

    "Brunette",
    "Bukkake",
    "Cartoon",

    "Compilation",
    "Cosplay",
    "Creampie",
    "Double Penetration",

    "European",
    "Fetish",
    "Fingering",

    "Fisting",
    "German",
    "Handjob",

    "Hentai",
    
    "Masturbation",
    
    "Orgy",
    "Parody",
    "Pissing",
    "POV",
    "Public",

    "Redhead",
    "Romantic",
    "Rough",

    "Squirting",

    "Toys"
]

let cc_num = categ.length
let random_number_category = Math.floor(Math.random() * cc_num)
let random_number_vid = Math.ceil(Math.random() * 30)

let final_category = categ[random_number_category]

let h3element = document.getElementById('title-category')

if (random_number_vid == 1 || random_number_vid == 21){
    h3element.textContent = "Watch the " + String(random_number_vid) + "st video in the category: '" + final_category + "'!"
}
else if (random_number_vid == 2 || random_number_vid == 22){
    h3element.textContent = "Watch the " + String(random_number_vid) + "nd video in the category: '" + final_category + "'!"
}
else if (random_number_vid == 3 || random_number_vid == 23){
    h3element.textContent = "Watch the " + String(random_number_vid) + "rd video in the category: '" + final_category + "'!"
}
else {
    h3element.textContent = "Watch the " + String(random_number_vid) + "th video in the category: '" + final_category + "'!"
}