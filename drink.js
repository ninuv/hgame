let random_time = 3 + Math.floor(Math.random()*8)

let chug_title = document.getElementById('title-chugging');
chug_title.textContent = "Chug a drink for " + random_time + " seconds!";