import { useContext } from "react";
import AppContext from "../../Contexts/AppContext";
import axios from "axios";

function SearchBtn() {
  const { appState, setAppState, setSpinner } = useContext(AppContext);

  const spinnerTime = 2000;

  const fireGETRequest = () => {
    setSpinner(true);

    setTimeout(() => {
      axios
        .get(`${process.env.GITHUB_API_USERS}${appState.query}`)
        .then((res) => {
          setAppState({
            ...appState,
            APIData: res.data,
            responseCode: res.status,
          });
        })
        .catch((err) => {
          setAppState({
            ...appState,
            APIData: err.response.data.message,
            responseCode: err.response.status,
          });
        })
        .then(() => {
          setSpinner(false);
        });
    }, spinnerTime);
  };

  return (
    <>
      <button
        className="btn-app-primary"
        type="submit"
        onClick={fireGETRequest}
      >
        Search
      </button>
    </>
  );
}

export default SearchBtn;
