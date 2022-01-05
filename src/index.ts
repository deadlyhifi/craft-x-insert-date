import init from "./App";
import "./style.css";

craft.env.setListener((env) => {
  switch (env.colorScheme) {
    case "dark":
      document.body.classList.add("dark");
      break;
    case "light":
      document.body.classList.remove("dark");
      break;
  }
});

window.addEventListener("load", () => {
  init();
});
