// let scrollbar = window.scrollY;
// const header = document.getElementById("headerAnimation")

// const scrollChange = 150

// window.addEventListener('scroll', function() {
//     scrollpos = this.window.scrollY;

//     if (scrollpos >= scrollbar) {
//         header.classList.add(".header-container__animation")
//         header.classList.remove(".header-container")
//     } else {
//         header.classList.remove(".header-container__animation")
//     }
// })

document.getElementById("openRegistrWindow").addEventListener("click", function() {
    document.getElementById("registrWindow").classList.add("open")
})

document.getElementById("closeRegistrWindow").addEventListener("click", function() {
    document.getElementById("registrWindow").classList.remove("open")
})

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("registrWindow").classList.remove("open")
    }
})

document.querySelector("#registrWindow .registrMenu__Modal").addEventListener("click", event => {
    event._isClickWithInModal = true
});
document.getElementById("registrWindow").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open")
})