export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

export function toggleTheme() {
  localStorage.theme =
    localStorage.theme === Themes.DARK || !localStorage.theme
      ? Themes.LIGHT
      : Themes.DARK;
  loadTheme();
}

export function loadTheme() {
  if (!process.browser) {
    return;
  }

  if (localStorage.theme === Themes.DARK || !("theme" in localStorage)) {
    document.documentElement.classList.add(Themes.DARK);
  } else {
    document.documentElement.classList.remove(Themes.DARK);
  }
}

loadTheme();
