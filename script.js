document.addEventListener('DOMContentLoaded', function() {
const popupOverlay = document.getElementById('popup-overlay');
const showPopupBtn = document.getElementById('show-popup');
const popupCloseBtn = document.querySelector('.popup-close');

showPopupBtn.addEventListener('click', () => {
    popupOverlay.classList.add('popup--show');
});

popupCloseBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('popup--show');
});

popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('popup--show');
    }
});

document.getElementById('popup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    popupOverlay.classList.remove('popup--show');
    e.target.reset();
});
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            if (isActive) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll(".tab-btn");

    tabBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            tabBtns.forEach(b => b.classList.remove("active"));
            document.querySelectorAll('.tab-content').forEach(content => 
                content.classList.remove('active')
            );
            event.target.classList.add("active");
            document.getElementById(event.target.dataset.tab).classList.add("active");
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const tooltipContainers = document.querySelectorAll('.tooltip');

    tooltipContainers.forEach((container) => {
        const tooltipText = container.querySelector('.tooltip-text');
        container.addEventListener('mouseover', ()=> {
            tooltipText.style.display = 'block';
        })
    })
    container.addEventListener('mouseout', ()=> {
        tooltipText.style.display = 'none';
    })
});


document.addEventListener('DOMContentLoaded', function() {

    const slider = document.querySelector('.slider');
    const prevArrow = document.querySelector('.slider-arrow-left');
    const nextArrow = document.querySelector('.slider-arrow-right');

    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(n) {
        if (n < 0 || n>= totalSlides) return;
        currentSlide = n;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

nextArrow.addEventListener('click', () => {
    showSlide(currentSlide + 1);
prevArrow.addEventListener('click', () => {
    showSlide(currentSlide -1);
})    
});
});
