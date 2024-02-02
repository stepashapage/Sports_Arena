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
    if (event.target.tagName !== "LI") return false;

    let filterClass = event.target.dataset['filt'];
    console.log(filterClass);
    
    // filter.forEach( elem => {
    //     elem.classList.remove('hide')
    //     if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
    //         elem.classList.add('hide')
    //     }
    // });
})
