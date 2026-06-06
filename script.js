const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const applyColorScheme = () => {
  let isDark = prefersDark.matches;
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "tokyonight-night" : "tokyonight-day",
  );
};
applyColorScheme();

prefersDark.addEventListener("change", applyColorScheme);
