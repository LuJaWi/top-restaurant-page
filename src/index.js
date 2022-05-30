import './style.css';
import Icon from './assets/pizza-box.jpeg';

function navBar () {
  const element = document.createElement('div');

  // Page Title
  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('page-title')
  pageTitle.innerText = "We Eatsa Da Pizza";

  element.appendChild(pageTitle);
  
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  element.appendChild(navBar);

  const homeButton = document.createElement('div');
  homeButton.classList.add('nav-button');
  homeButton.innerText = 'Home';

  const menuButton = document.createElement('div');
  menuButton.classList.add('nav-button');
  menuButton.innerText = 'Menu';

  const contactButton = document.createElement('div');
  contactButton.classList.add('nav-button');
  contactButton.innerText = 'Contact';

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  const pageContent = document.createElement('div');
  pageContent.classList.add('page-content');

  element.appendChild(pageContent);

  homeButton.addEventListener('click', () => {});
  menuButton.addEventListener('click', () => {});
  contactButton.addEventListener('click', () => {});

  return element;
};

function homePage () {
  const element = document.createElement('div');
  element.classList.add('home-page');

  // Page image
  const myIcon = new Image(300, 300);
  myIcon.src = Icon;

  element.appendChild(myIcon);
  
  // Page Content
  const pageDescription = document.createElement('p');
  pageDescription.innerText = "Lorem Ipsum? Uhhhhh, put it on the pizza.";

  element.appendChild(pageDescription);

  return element;
};

function menuPage () {
  const element = document.createElement('div');
  element.innerText = "Test"
  return element;
};

const contentDivSelector = document.getElementById('content');
contentDivSelector.appendChild(navBar());

const pageContentSelector = document.querySelector('.page-content');
pageContentSelector.appendChild(homePage());