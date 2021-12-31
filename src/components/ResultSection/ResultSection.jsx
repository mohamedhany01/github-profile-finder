// Style
import { useContext, useEffect } from "react";
import AppContext from "../Contexts/AppContext";
import Spinner from "./Children/Spinner";
import Result from "./Children/Result";

const ResultSection = () => {
  const { spinner } = useContext(AppContext);

  return (
    <section className="result-area-container m-auto p-2">
      {spinner ? <Spinner /> : <Result />}
    </section>
  );
};

export default ResultSection;
