import { useState } from "react";



export default function Search () {

const [type, setType] = useState("")
const [results, setResults] = useState([]);
const [query, setQuery] = useState("");
const [searched, setSearched] = useState(false);

const handleSearch = async () => {
const apiKey="98594a4eda50697575b42d75dc200b7f";
const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
const data = await response.json();

setSearched(true);

console.log(data.results);
setResults(data.results);
}

const openWikipedia = (title) => {
  const url=`https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(title)}`
  window.open(url, "_blank");
};

return (
  <>
  <div class="container">
  <div class="box">
      <form>
    <div className="searchDiv">
      <input
  type="text"
  placeholder="Search for your movie here"
  className="searchBar"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
/>


      <button onClick={handleSearch}>Search</button>

    </div>
    </form>
    </div>
    </div>


      {!searched && (
  <div className="introText">
    <h2 className="h2intro" style={{ marginTop: "6rem" }}>
      Here you can find all your favorite films.
    </h2>
    <h2>Now Get To Da Movie!</h2>
  </div>
)}

{searched && results.length === 0 && (
  <div className="introText">
    <h2 className="h2intro" style={{ marginTop: "6rem" }}>
      Sorry, we couldn't find your film!
    </h2>
  </div>
)}

       
       

<div className="results" style={{ paddingTop: results.length ? "1rem" : 0 }}>

  {results.map((movie) => (
    <div key={movie.id} className="movieCard">

      <div className="moviePoster">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            onClick={() => openWikipedia(movie.title)}
            style = {{cursor:"pointer"}}
          />
        )}
      </div>

      <div className="movieContent">
        
        <div className="movieTopRow">
          <h3 onClick={() => openWikipedia(movie.title)} style={{cursor:"pointer"}}>{movie.title}</h3>
          <span className="movieDate">{movie.release_date}</span>
        </div>

        <p className="movieOverview">{movie.overview}</p>

      </div>

    </div>
  ))}
</div>


  </>
);}
