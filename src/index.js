import './style.css';
import Icon from './assets/pizza-box.jpeg';

function component () {
  const element = document.createElement('div');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
};

document.body.appendChild(component())