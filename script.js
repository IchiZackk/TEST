document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const parentItem = this.parentElement;
        const isActive = parentItem.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
        });

        if (!isActive) {
            parentItem.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicators = document.querySelector(".indicators");
    let currentIndex = 0;
    const slideInterval = 9000;
    let startX = 0;
    let endX = 0;

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        if (index === 0) dot.classList.add("active");
        indicators.appendChild(dot);
    });

    const dots = document.querySelectorAll(".indicators div");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

    setInterval(nextSlide, slideInterval);

    // GESTION DU SWIPE TACTILE
    const sliderContainer = document.querySelector(".custom-slider");

    sliderContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener("touchend", () => {
        if (startX - endX > 50) {
            nextSlide();
        } else if (endX - startX > 50) {
            prevSlide();
        }
    });
});

$(window).on('load', function() {
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".heraultphone-service");

    function checkVisibility() {
        services.forEach(service => {
            const rect = service.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.85) {
                service.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const storeSection = document.querySelector('.store-section');

    function checkVisibility() {
        const rect = storeSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            storeSection.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const sectionReparation = document.querySelector('.section-reparation');

    function checkVisibility() {
        const rect = sectionReparation.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            sectionReparation.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const imageWrapper = document.querySelector('.image-wrapper');
    const horairesContainer = document.querySelector('.horaires-container');

    function checkVisibility() {
        const rectImageWrapper = imageWrapper.getBoundingClientRect();
        const rectHorairesContainer = horairesContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rectImageWrapper.top < windowHeight * 0.85) {
            imageWrapper.classList.add("active");
        }

        if (rectHorairesContainer.top < windowHeight * 0.85) {
            horairesContainer.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const middleImageContainer = document.querySelector('.middle-image-container');

    function checkVisibility() {
        const rect = middleImageContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            middleImageContainer.classList.add("active");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector('.accessories-section');

    function checkVisibility() {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const repairTitle = document.querySelector('.repair-process-title');
    const repairSubtitle = document.querySelector('.repair-process-subtitle');
    const repairSteps = document.querySelectorAll('.repair-step');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        if (repairTitle.getBoundingClientRect().top < windowHeight * 0.85) {
            repairTitle.classList.add('visible');
        }

        if (repairSubtitle.getBoundingClientRect().top < windowHeight * 0.85) {
            repairSubtitle.classList.add('visible');
        }

        repairSteps.forEach(step => {
            if (step.getBoundingClientRect().top < windowHeight * 0.85) {
                step.classList.add('visible');
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const brandsSection = document.querySelector('.brands-section');
    const brandCards = document.querySelectorAll('.brand-card');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        if (brandsSection.getBoundingClientRect().top < windowHeight * 0.85) {
            brandsSection.classList.add('visible');
        }

        brandCards.forEach(card => {
            if (card.getBoundingClientRect().top < windowHeight * 0.85) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});




const carrousel = document.querySelector('.carrousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    nextBtn.addEventListener('click', () => {
        carrousel.scrollBy({ left: 600, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carrousel.scrollBy({ left: -600, behavior: 'smooth' });
    });




