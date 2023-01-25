import "./movies-add-form.css";
const MoviesAddForm = () => {
  return (
    <div className="movies-add-form">
      <h3>Yangi kino qushish</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday Kino"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechchi marotoba kurilgan"
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
