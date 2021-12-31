import SearchBtn from "./SearchBtn";

import { useContext } from "react";
import AppContext from "../../Contexts/AppContext";

function SearchForm() {
  const { appState, setAppState } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search-form-container p-2 row">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column p-3">
        <input
          type="text"
          name="profile"
          placeholder="Profile Name"
          autoFocus
          value={appState.query}
          onChange={(e) => setAppState({ ...appState, query: e.target.value })}
        />
        <p
          className={
            appState.responseCode === 404 ? "message active" : "message"
          }
        >
          {appState.responseCode === 404
            ? `${appState.responseCode} ${appState.APIData}`
            : null}
        </p>
        <SearchBtn />
      </form>
    </section>
  );
}

export default SearchForm;
