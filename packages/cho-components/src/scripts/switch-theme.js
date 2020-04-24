/* eslint-disable */

function setTheme(theme) {
  if (theme) {
    localStorage.setItem('cho-theme', theme);
    document.body.style.backgroundColor = theme == 'light' ? 'initial' : '#000';
    document.body.dataset.choTheme = localStorage.getItem('cho-theme');
    return;
  }

  if (localStorage.getItem('cho-theme') === 'dark') {
    localStorage.setItem('cho-theme', 'light');
    document.body.style.backgroundColor = 'initial';
  } else {
    localStorage.setItem('cho-theme', 'dark');
    document.body.style.backgroundColor = 'black';
  }

  document.body.dataset.choTheme = localStorage.getItem('cho-theme');
}

const span = document.createElement('span');
span.style = `
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1rem;
  height: 1rem;
`;
span.innerHTML = '☀';

const button = document.createElement('cho-button');
button.style = `
  position: fixed;
  right: 0;
  bottom: 0;
`;

button.appendChild(span);
button.addEventListener('click', function() {
  setTheme();

  if (localStorage.getItem('cho-theme') === 'dark') {
    span.innerHTML = '☽';
  } else {
    span.innerHTML = '☀';
  }
});

document.body.appendChild(button);
document.body.dataset.choTheme = 'light';

if (localStorage.getItem('cho-theme')) {
  setTheme(localStorage.getItem('cho-theme'));
}
