let mainFrame = document.getElementById('main')

function refresh(){
    //localStorage.clear()
    localStorage.setItem('sweatshirt', 'yes')
    localStorage.setItem('tshirt', 'yes')
    localStorage.setItem('pants', 'yes')
    localStorage.setItem('underwear', 'yes')
    localStorage.setItem('socks', 'yes')

    mainFrame.style.display = 'none'

    setTimeout(function(){
        mainFrame.style.display = 'block'
    }, 1000)
}

