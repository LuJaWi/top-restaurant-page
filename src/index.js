import './style.css';
import Icon from './assets/pizza-box.jpeg';

function homePage () {
  const element = document.createElement('div');

  // Page image
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // Page Title
  const pageTitle = document.createElement('h1');
  pageTitle.innerText = "We Eatsa Da Pizza";

  element.appendChild(pageTitle);

  // Page Content
  const pageContent = document.createElement('p');
  pageContent.innerText = "Lorem Ipsum? Uhhhhh, put it on the pizza.";

  element.appendChild(pageContent);

  return element;
};

const contentDivSelector = document.getElementById('content');

contentDivSelector.appendChild(homePage());