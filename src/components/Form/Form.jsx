import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    plot: "",
    year: "",
    rating: "",
    genre: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="log-form">
      <h2>Add A New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onInput={(e) => setMovie({ ...movie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="director"
          onInput={(e) => setMovie({ ...movie, director: e.target.value })}
        />
        <input
          type="text"
          placeholder="plot"
          onInput={(e) => setMovie({ ...movie, plot: e.target.value })}
        />
        <input
          type="text"
          placeholder="genre"
          onInput={(e) => setMovie({ ...movie, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="release year"
          onInput={(e) => setMovie({ ...movie, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="rating"
          onInput={(e) => setMovie({ ...movie, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="image url"
          onInput={(e) => setMovie({ ...movie, imgSource: e.target.value })}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
