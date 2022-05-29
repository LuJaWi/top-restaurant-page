import './style.css';
import Icon from './assets/pizza-box.jpeg';

function navBar () {
  const element = document.createElement('div');

  const homeButton = document.createElement('div');
  homeButton.innerText = 'Home';

  const menuButton = document.createElement('div');
  menuButton.innerText = 'Menu';

  const contactButton = document.createElement('div');
  contactButton.innerText = 'Contact';

  element.appendChild(homeButton);
  element.appendChild(menuButton);
  element.appendChild(contactButton);

  return element;
};

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

contentDivSelector.appendChild(navBar());
contentDivSelector.appendChild(homePage());