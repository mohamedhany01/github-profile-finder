import Cookies from "js-cookie";
import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

function ThemeChanger() {
  const { theme, setTheme } = useContext(AppContext);

  const changeTheme = () => {
    document.body.classList.remove(...document.body.classList);
    Cookies.set("theme", theme.nextTheme);
    document.body.classList.add(theme.nextTheme);
    setTheme({
      ...theme,
      currentTheme: theme.nextTheme,
      nextTheme: theme.themeList.filter((t) => t !== theme.nextTheme)[0],
    });
  };

  return (
    <section className="col-6 text-end">
      <button className="btn-app-primary text-capitalize" onClick={changeTheme}>
        {theme.nextTheme}
      </button>
    </section>
  );
}

export default ThemeChanger;
