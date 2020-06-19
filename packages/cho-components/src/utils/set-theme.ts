export const setTheme = (theme?: 'dark' | 'light') => {
  if (theme != null) {
    localStorage.setItem('cho-theme', theme);
    document.body.dataset.choTheme = localStorage.getItem('cho-theme');
    return;
  }

  if (localStorage.getItem('cho-theme') === 'dark') {
    localStorage.setItem('cho-theme', 'light');
  } else {
    localStorage.setItem('cho-theme', 'dark');
  }

  document.body.dataset.choTheme = localStorage.getItem('cho-theme');
};

document.body.dataset.choTheme = localStorage.getItem('cho-theme');
