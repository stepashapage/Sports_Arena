// document.getElementById("link").addEventListener("click", function() {
//     document.getElementById("btn").classList.add("active")
// })

// document.getElementById("link").addEventListener("click", function() {
//     document.getElementById("btn").classList.remove("active")
// })



// document.querySelector(".filter__item").addEventListener("click", function() {
//     document.querySelector(".filter__item-link").classList.remove("active")
// })


// document.querySelector(".filter__item").addEventListener("click", function() {
//     document.querySelector(".filter__item-link").classList.add("active")
// })

const filter = document.querySelectorAll('.box')

document.querySelector('.filter').addEventListener('click', event => {
    if (event.target.tagName !== "BUTTON") return false;

    // if (event.target.tagName !== "LI" || "BUTTON") event.target.classList.remove("active")
    //     else event.target.classList.add("active");

    let filterClass = event.target.dataset['filt'];
    
    filter.forEach( elem => {
        elem.classList.remove('hide')
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide')
        }
    });
})

