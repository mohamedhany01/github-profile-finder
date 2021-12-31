import logo from "../../image/search.png";

function Logo(props) {
  const { imgWidth } = props;
  const rem = 16;
  return (
    <figure className="logo-container d-flex justify-content-around algin-items-center">
      <div>
        <img className="d-inline-block" src={logo} alt="Header logo" width={parseInt(rem * imgWidth)} />
        <figcaption className="d-inline-block">GitHub Profile Finder</figcaption>
      </div>
    </figure>
  );
}

export default Logo;
