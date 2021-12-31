import Logo from "../../Reusable/Logo";


function Header() {
  return (
    <section className="search-header row">
      <Logo imgWidth={4} />
      <p className="fs-700-style-italic text-center my-1">&ldquo;Find a Github profile, at any time&rdquo;</p>
    </section>
  );
}

export default Header;
