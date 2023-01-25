import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data }) => {
  console.log(data);
  return (
    <div className="movie-list">
      <MovieListItem name="Empire of Osman" viewers={989} />
      <MovieListItem name="Titanic" viewers={989} />
      <MovieListItem name="Usman" viewers={989} />
    </div>
  );
};

export default MovieList;
