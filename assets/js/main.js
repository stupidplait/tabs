'use strict';

const reviewsContent = document.querySelector('.reviews__content');
const reviewsTabs = document.querySelector('.reviews__tabs');
const tabsArray = Array.from(reviewsTabs.children);
const reviewsElements = Array.from(reviewsContent.querySelectorAll('.reviews__element'));
const reviewsBody = reviewsContent.querySelectorAll('.reviews__body');
const reviewsImage = reviewsContent.querySelector('.reviews__image');

let indexTab = tabsArray.indexOf(reviewsTabs.querySelector('.active'));

reviewsContent.querySelector('.active').classList.remove('active');
reviewsTabs.querySelector('.active').classList.remove('active');

reviewsElements.forEach(element => element.style.translate = `${-100 * indexTab}%`);
reviewsElements[indexTab].classList.add('active');
tabsArray[indexTab].classList.add('active');

if (window.innerWidth <= 900) {
    reviewsBody.forEach(body => body.style.maxHeight = '');
} else {
    reviewsBody.forEach(body => body.style.maxHeight = reviewsImage.offsetHeight + 'px');
}

window.addEventListener('resize', function () {
    if (window.innerWidth <= 900) {
        reviewsBody.forEach(body => body.style.maxHeight = '');
    } else {
        reviewsBody.forEach(body => body.style.maxHeight = reviewsImage.offsetHeight + 'px');
    }
});

reviewsTabs.addEventListener('click', function (event) {
    const targetTab = event.target.closest('.reviews__tab');
    if (!targetTab) return;

    if (targetTab.classList.contains('active')) return;

    event.preventDefault();

    indexTab = tabsArray.indexOf(targetTab);

    reviewsContent.querySelector('.active').classList.remove('active');
    reviewsTabs.querySelector('.active').classList.remove('active');

    reviewsElements.forEach(element => element.style.translate = `${-100 * indexTab}%`);
    reviewsElements[indexTab].classList.add('active');
    tabsArray[indexTab].classList.add('active');
});