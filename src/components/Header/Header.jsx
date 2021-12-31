import Space from "./Space";
import ThemeChanger from "./ThemeChanger";

function Header() {
  return (
    <header className="row justify-content-between p-3">
      <Space />
      <ThemeChanger />
    </header>
  );
}

export default Header;
