const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const themeButton = document.getElementById("themeButton");

const applyColorScheme = () => {
  let isDark = prefersDark.matches;
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "tokyonight-night" : "tokyonight-day",
  );
  themeButton.innerText = isDark ? "Light Theme" : "Dark Theme";
};
applyColorScheme();

prefersDark.addEventListener("change", applyColorScheme);

// TODO: refactor this to merge with applyColorScheme() somehow
themeButton.addEventListener("click", () => {
  let isDark =
    document.documentElement.getAttribute("data-theme") === "tokyonight-night";
  document.documentElement.setAttribute(
    "data-theme",
    !isDark ? "tokyonight-night" : "tokyonight-day",
  );
  themeButton.innerText = !isDark ? "Light Theme" : "Dark Theme";
});
