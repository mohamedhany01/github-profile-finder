import { useEffect, useState } from "react";
import Header from "./Header/Header";
import SearchArea from "./SearchArea/SearchArea";
import ResultSection from "./ResultSection/ResultSection";
import AppContext from "./Contexts/AppContext";

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/app.scss";
import Cookies from "js-cookie";

const App = () => {
  const [appState, setAppState] = useState({
    query: "",
    APIData: {},
    displaySpinner: false,
    responseCode: null,
  });

  const [theme, setTheme] = useState({
    currentTheme: "light",
    nextTheme: "",
    themeList: ["light", "dark"],
  });

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (!Cookies.get("theme")) {
      document.body.classList.remove(...document.body.classList);
      Cookies.set("theme", theme.currentTheme);
      document.body.classList.add(theme.currentTheme);
      setTheme({
        ...theme,
        nextTheme: theme.themeList.filter((t) => t !== theme.currentTheme)[0],
      });
    } 
    else {
      document.body.classList.add(Cookies.get("theme"));
      setTheme({
        ...theme,
        currentTheme: Cookies.get("theme"),
        nextTheme: theme.themeList.filter((t) => t !== Cookies.get("theme"))[0],
      });
    }
  }, []);
  
  return (
    <AppContext.Provider
      value={{ appState, setAppState, spinner, setSpinner, theme, setTheme }}
    >
      <div className="container">
        <Header />
        <main>
          <SearchArea />
          <ResultSection />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
