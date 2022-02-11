import * as React from "react";
import * as ReactDOM from "react-dom";
import Calendar from "./components/Calendar";
import useDarkMode from "./hooks/useDarkMode";
import insertDateBlock from "./utils/insertDateBlock";

const App: React.FC<{}> = () => {
  const isDarkMode = useDarkMode();

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <Calendar onSelectDate={(date) => insertDateBlock(date)} />;
};

export function initApp() {
  ReactDOM.render(<App />, document.getElementById("react-root"));
}
