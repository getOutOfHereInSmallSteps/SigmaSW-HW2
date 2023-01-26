'use strict';

// Adding 'animationend' event trigger so the animation triggers on hover till the end

const plane = document.querySelector('.plane');

const [plane1, plane2] = document.querySelectorAll('.plane');

console.log(plane1, plane2);

plane1.addEventListener('animationend', () => {
  plane1.classList.remove('animated');
  plane2.classList.remove('animated');
  plane1.classList.add('get-back');
  plane2.classList.add('get-back');
});

plane.addEventListener('mouseover', () => {
  plane1.classList.remove('get-back');
  plane2.classList.remove('get-back');
  plane1.classList.add('animated');
  plane2.classList.add('animated');
});
