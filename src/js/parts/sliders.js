import Swiper from 'swiper';
import { Pagination, Autoplay, Thumbs, Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let prev = section.querySelector('.prev')
        let next = section.querySelector('.next')

        if (slider.closest('.advantages')) {
            new Swiper(slider, {
                modules: [Autoplay, Navigation],
                slidesPerView: 'auto',
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true
                },
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                grabCursor: true,
                breakpoints: {
                    300: {
                        slidesPerView: 1.2,
                        spaceBetween: 20
                    },
                    769: {
                        slidesPerView: 2.2,
                        spaceBetween: 30
                    },
                }
            })
        }
    })
}


