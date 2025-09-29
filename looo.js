const popup = document.querySelector(".popup")

popup.classList.add("popup--show")

const accordionHeaders = document.querySelectorAll('.accordion-header')

accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        if (header.classList.contains('active')) {

            header.classList.remove('active')
            content.style.maxHeight = null
        } else {

            header.classList.add('active')
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.slider-arrow-left');
const rightArrow = document.querySelector('.slider-arrow-right');
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

if (leftArrow && rightArrow && slides.length > 0) {
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    updateSlider();
}

const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');



tabContent.forEach((content) => {
    content.style.display = 'none';
});
if (tabContent[0]) tabContent[0].style.display = 'block';

function updateContent(index) {
    tabContent.forEach((content) => {
        content.style.display = 'none';
    });
    if (tabContent[index]) tabContent[index].style.display = 'block';
}

if (tabs.length > 0) {
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            updateContent(index);
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });
    tabs[0].classList.add("active");
    updateContent(0);
}



const tooltipContainer = document.querySelector('.tooltip-container')
function showTooltip(event) {

    const tooltip = tooltipContainer.querySelector('.tooltip')
    if (tooltip) tooltip.style.display = 'block'
}
tooltipContainer.addEventListener("mouseover", showTooltip)