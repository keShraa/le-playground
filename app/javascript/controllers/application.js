import { Application } from '@hotwired/stimulus';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

import Typed from 'typed.js';

const typedText = () => {
  new Typed('.typed-text', {
    strings: [
      'Le Playground',
      'La cour de récré',
      'Le Playground',
      'Le Playground',
      'La cour de récré',
      'Le Playground',
      'Le Playground',
      'La cour de récré',
      'Le Playground',
      'Le Playground',
      'La cour de récré',
      'Le Playground',
      'keShra is so cool ♥♥♥',
      'La cour de récré',
      'Le Playground',
      'La cour de récré',
      'Le Playground',
      'Le Playground',
      'La cour de récré',
      'Le Playground',
    ],
    typeSpeed: 90,
    loop: true,
  });
};

typedText();

const typedCreatif = () => {
  if (!document.querySelector('.typed-creatif')) return;
  new Typed('.typed-creatif', {
    strings: [
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'keShra is so cool ♥♥♥',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
      'Be creative!',
    ],
    typeSpeed: 120,
    loop: true,
  });
};

typedCreatif();

const toggleOnClick = (el) => el.classList.toggle('selected');
const elements = document.querySelectorAll('.collection-item');

elements.forEach((el) => {
  el.addEventListener('click', () => toggleOnClick(el));
});

export { application };
