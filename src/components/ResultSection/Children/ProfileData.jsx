import { useContext } from "react";
import AppContext from "../../Contexts/AppContext";

const ProfileData = () => {
  const { appState } = useContext(AppContext);
  const defaultPlaceholder = "Unknown";
  return (
    <section className="response-data row">
      <h2 className="text-center">
        <a
          href={appState.APIData.html_url}
          target="_blank"
        >{`${appState.APIData.login}'s Profile`}</a>
      </h2>
      <details open className="p-0">
        <summary>Abstraction Information</summary>
        <section className="abstraction-information row p-2">
          <figure className="col-md-6 col-sm-12 my-2 d-flex justify-content-center align-items-center">
            <img
              src={appState.APIData.avatar_url}
              alt={`${appState.APIData.login} image`}
              width={100}
              className="img-thumbnail"
            />
          </figure>
          <div className="offset-1 col-5 my-2">
            <div className="row">
              <span className="fw-700 mb-1">Login Name:</span>
              <p className="ms-2">
                {appState.APIData?.login ?? defaultPlaceholder}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Real Name:</span>
              <p className="ms-2">
                {appState.APIData?.name ?? defaultPlaceholder}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Profile ID:</span>
              <p className="ms-2">
                {appState.APIData?.id ?? defaultPlaceholder}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Created At:</span>
              <p className="ms-2">
                {new Date(appState.APIData.created_at).toDateString()}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Last Update:</span>
              <p className="ms-2">
                {new Date(appState.APIData.updated_at).toDateString()}
              </p>
            </div>
          </div>
        </section>
      </details>

      <details open className="p-0">
        <summary>Social Information</summary>
        <section className="social-information row p-2">
          <div className="offset-1 col-md-5 col-sm-11 my-2">
            <div className="row">
              <span className="fw-700 mb-1">GitHub:</span>
              <p className="ms-2">
                <a
                  className="text-decoration-none"
                  href={appState.APIData.html_url}
                  target="_blank"
                >{`@${appState.APIData.login}`}</a>
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Email:</span>
              <p className="ms-2">
                {appState.APIData.email ? (
                  <a
                    className="text-decoration-none"
                    href={`emailto:${appState.APIData.email}`}
                  >
                    {appState.APIData.email}
                  </a>
                ) : (
                  defaultPlaceholder
                )}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Twitter:</span>
              <p className="ms-2">
                {appState.APIData.twitter_username ? (
                  <a
                    className="text-decoration-none"
                    href={`https://twitter.com/${appState.APIData.twitter_username}`}
                    target="_blank"
                  >{`@${appState.APIData.twitter_username}`}</a>
                ) : (
                  defaultPlaceholder
                )}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Blog:</span>
              <p className="ms-2">
                {appState.APIData ? (
                  <a
                    className="text-decoration-none"
                    href={appState.APIData.blog}
                    target="_blank"
                  >{`@blog`}</a>
                ) : (
                  defaultPlaceholder
                )}
              </p>
            </div>
          </div>
          <div className="offset-1 col-md-5 col-sm-11 my-2">
            <div className="row">
              <span className="fw-700 mb-1">Company:</span>
              <p className="ms-2">
                {appState.APIData?.company ?? defaultPlaceholder}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Real Name:</span>
              <p className="ms-2">
                {appState.APIData?.name ?? defaultPlaceholder}
              </p>
            </div>
            <div className="row">
              <span className="fw-700 mb-1">Location:</span>
              <p className="ms-2">
                {appState.APIData?.location ?? defaultPlaceholder}
              </p>
            </div>
          </div>
          <div className="col-1 my-2"></div>
          <div className="col-10">
            <span className="fw-700 mb-1">Biography:</span>
            <p className="ms-2">
              {appState.APIData?.bio ?? defaultPlaceholder}
            </p>
          </div>
          <div className="col-1 my-2"></div>
        </section>
      </details>
    </section>
  );
};

export default ProfileData;
