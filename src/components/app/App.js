import "./App.css";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

const App = () => {
  const data = [
    { h1: "Empire of Titanic", h2: 233, favourite: false, id: 1 },
    { h1: "Empire of Titanic", h2: 233, favourite: false, id: 2 },
    { h1: "Titanic", h2: 233, favourite: true, id: 3 },
  ];

  return (
    <div className="App font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel className="search-panel" />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
