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

const choThemeSpan = document.createElement('span');
choThemeSpan.style = `
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1rem;
  height: 1rem;
`;
choThemeSpan.innerHTML = '☀';

const choThemeButton = document.createElement('cho-button');
choThemeButton.style = `
  position: fixed;
  right: 0;
  bottom: 0;
`;

choThemeButton.appendChild(choThemeSpan);
choThemeButton.addEventListener('click', function() {
  setTheme();

  if (localStorage.getItem('cho-theme') === 'dark') {
    choThemeSpan.innerHTML = '☽';
  } else {
    choThemeSpan.innerHTML = '☀';
  }
});

document.body.appendChild(choThemeButton);
document.body.dataset.choTheme = 'light';

if (localStorage.getItem('cho-theme')) {
  setTheme(localStorage.getItem('cho-theme'));
}
