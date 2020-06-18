/* eslint-disable */

function setTheme(theme) {
  if (theme) {
    localStorage.setItem('cho-theme', theme);
    if (theme == 'light') {
      document.body.style.backgroundColor = 'transparent';
    } else {
      document.body.style.backgroundColor = '#000';
    }

    document.body.dataset.choTheme = localStorage.getItem('cho-theme');
    return;
  }

  if (localStorage.getItem('cho-theme') === 'dark') {
    localStorage.setItem('cho-theme', 'light');
    document.body.style.backgroundColor = 'transparent';
  } else {
    localStorage.setItem('cho-theme', 'dark');
    document.body.style.backgroundColor = '#000';
  }

  document.body.dataset.choTheme = localStorage.getItem('cho-theme');
}

var choThemeSpan = document.createElement('span');
choThemeSpan.style =
  '\
  align-items: center;\
  display: flex;\
  flex-direction: row;\
  justify-content: center;\
  width: 1rem;\
  height: 1rem;\
';
choThemeSpan.innerHTML = '☀';

var choThemeButton = document.createElement('cho-button');
choThemeButton.style = '\
  margin: 1rem;\
  position: fixed;\
  right: 0;\
  bottom: 0;\
';

choThemeButton.appendChild(choThemeSpan);
choThemeButton.addEventListener('click', function () {
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
