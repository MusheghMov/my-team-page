const lowElements = document.getElementsByClassName('image-container');
if (window.innerWidth > 855) {
    lowElements[1].classList.add('down');
    lowElements[4].classList.add('down')
} else if (window.innerWidth < 368) {
    lowElements[1].classList.remove('down');
    lowElements[3].classList.remove('down');
    lowElements[4].classList.remove('down');
    lowElements[5].classList.remove('down');
} else {
    lowElements[1].classList.add('down');
    lowElements[3].classList.add('down');
    lowElements[5].classList.add('down');
    lowElements[4].classList.remove('down')
}
window.addEventListener("resize", () => {
    if (window.innerWidth > 855) {
        lowElements[1].classList.add('down');
        lowElements[4].classList.add('down');
        lowElements[3].classList.remove('down');
        lowElements[5].classList.remove('down');
    } else if (window.innerWidth < 368) {
        lowElements[1].classList.remove('down');
        lowElements[3].classList.remove('down');
        lowElements[4].classList.remove('down');
        lowElements[5].classList.remove('down');
    } else {
        lowElements[1].classList.add('down');
        lowElements[3].classList.add('down');
        lowElements[5].classList.add('down');
        lowElements[4].classList.remove('down')
    }
})