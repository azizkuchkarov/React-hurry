import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data }) => {
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.h1}
          viewers={item.h2}
          favourite={item.favourite}
        />
      ))}
    </div>
  );
};

export default MovieList;
