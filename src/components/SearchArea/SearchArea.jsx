import Header from "./Children/Header";
import SearchForm from "./Children/SearchForm";

function SearchArea() {
  return (
    <section className="search-area-container row justify-content-center align-items-center p-2">
      <Header />
      <SearchForm/>
    </section>
  );
}

export default SearchArea;
