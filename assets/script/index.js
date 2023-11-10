'use strict';

const knowMoreButton = document.querySelector('.center section div a');
const aboutMeSection = document.querySelector('.center h2');
const contents = [
    "Currently studying software developer at MITT, Winnipeg",
    "I am passionate about learning and creating awesome websites!",
    "Do you want to know more? Get in touch. I look forward to hearing from you"
];

document.addEventListener('DOMContentLoaded', function () {

    let currentState = 0;
    let clickCount = 0;

    knowMoreButton.addEventListener('click', function () {
        aboutMeSection.textContent = contents[currentState];
        currentState = (currentState + 1) % contents.length;
        
        clickCount++;

        if (clickCount === 3) {
            knowMoreButton.textContent = 'Again?';
        } else if (clickCount === 4) {
            clickCount = 0;
            knowMoreButton.textContent = 'Know more';
        }
    });
});