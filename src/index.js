import './style.css';
import Icon from './assets/pizza-box.jpeg';

function navBar () {
  const element = document.createElement('div');
  element.classList.add('nav-bar')

  const homeButton = document.createElement('div');
  homeButton.classList.add('nav-button');
  homeButton.innerText = 'Home';

  const menuButton = document.createElement('div');
  menuButton.classList.add('nav-button');
  menuButton.innerText = 'Menu';

  const contactButton = document.createElement('div');
  contactButton.classList.add('nav-button');
  contactButton.innerText = 'Contact';

  element.appendChild(homeButton);
  element.appendChild(menuButton);
  element.appendChild(contactButton);

  return element;
};

function homePage () {
  const element = document.createElement('div');

  // Page Title
  const pageTitle = document.createElement('h1');
  pageTitle.innerText = "We Eatsa Da Pizza";

  element.appendChild(pageTitle);

  // Page image
  const myIcon = new Image(300, 300);
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
  // Page Content
  const pageContent = document.createElement('p');
  pageContent.innerText = "Lorem Ipsum? Uhhhhh, put it on the pizza.";

  element.appendChild(pageContent);

  return element;
};

const contentDivSelector = document.getElementById('content');

contentDivSelector.appendChild(navBar());
contentDivSelector.appendChild(homePage());