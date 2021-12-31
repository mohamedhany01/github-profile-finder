import { useContext } from "react";
import AppContext from "../../Contexts/AppContext";

const NotFound = () => {
  const { appState } = useContext(AppContext);

  return (
    <section className="not-found">
      <p>{appState.responseCode}</p>
      <p>{appState.APIData}</p>
    </section>
  );
};

export default NotFound;
