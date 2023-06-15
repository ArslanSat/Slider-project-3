const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');

const container = document.querySelector('.container')

const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length;

console.log(slidesCount)

let activSlideIndex = 0; // для отработки кнопок, покадывает какой слайд активный

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; // колличество слайдов за исключением одногоб который уже отображен на экране 

// =================================



upBtn.addEventListener('click', () => {
    changesSlides('up')
});

downBtn.addEventListener('click', () => {
    changesSlides('down')
});

function changesSlides(direction) {
    if (direction === 'up') {
        activSlideIndex++;
        if(activSlideIndex === slidesCount) {
            activSlideIndex = 0;
        }            
    } else if (direction === 'down') {
        activSlideIndex--;
        if(activSlideIndex < 0) {
            activSlideIndex = slidesCount-1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activSlideIndex * height}px)`;

};

