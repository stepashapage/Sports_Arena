new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    speed: 800,
    effect: 'cowerflow',
    slidersPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 1500
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    }
});

new Swiper('.Product-wrapper', {

    direction: 'horizontal',
    loop: false,
    speed: 800,
    spaceBetween: 30,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});


function init() {
    new ymaps.Map('map', {
        center: [46.35513944139531,48.073751633088044],
        zoom: 17,
    })

    let placemark = new ymaps.Placemark([46.35513944139531,48.073751633088044], {}, {

    });

    map.geoObjects.add(placemark);
}


ymaps.ready(init);