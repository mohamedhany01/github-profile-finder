import { useContext, useEffect } from "react";
import AppContext from "../../Contexts/AppContext";
import ProfileData from "./ProfileData";
import NotFound from "./NotFound";

const Result = () => {
  const { appState } = useContext(AppContext);

  switch (appState.responseCode) {
    case 200:
      return <ProfileData />;
    default:
      return <></>;
  }
};

export default Result;
