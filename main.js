function openNav() {
    let x = document.getElementById('navbar')

    if (x.className === 'nav-links') {
        x.className += ' responsive'
    } else {
        x.className = 'nav-links'
    }
}