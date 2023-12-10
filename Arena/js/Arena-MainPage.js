let scrollbar = window.scrollY;
const header = document.getElementById("headerAnimation")

const scrollChange = 150

window.addEventListener('scroll', function() {
    scrollpos = this.window.scrollY;

    if (scrollpos >= scrollbar) {
        header.classList.add(".header-container__animation")
        header.classList.remove(".header-container")
    } else {
        header.classList.remove(".header-container__animation")
    }
})