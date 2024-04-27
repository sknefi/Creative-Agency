// funkcia nás presmeruje na začiatok stránky (top=0)
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    })
}

// nastavíme eventlistener, keď user klikne, zavolá sa funkcia scrollToTop, ktorá nás
// presmeruje na začiatok stránky (top=0)
// prečo zero? lebo máme sekcie first, second, .., n-th. Tak zero predstavuje najvyššiu časť stránky
document.getElementById("logo-zero").addEventListener("click", scrollToTop)


// -------------------------------------------------------------------------------------------------


// pri scrollovaní dole sa skryje header, pri scrollovaní hore sa nám ukáže
// vždy sa zoberú 2 hodnoty, jedna pred (prevScrollPos) a druhá po (currentScroll)
// teraz sa tie dve hodnoty porovnajú a vyhodnotí sa situácia (či scrollujeme dole abo hore)
let prevScrollPos = window.scrollY; 

window.onscroll = function() {
    const currentScrollPos = window.scrollY

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header-show").style.top = "0"
    } else {
        document.getElementById("header-show").style.top = "-150px" // Adjust as needed
    }

    prevScrollPos = currentScrollPos
}

const cursor = document.querySelector('.custom-cursor')

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', `top: ${(e.pageY - 10)}px; left: ${(e.pageX - 10)}px`)
})
