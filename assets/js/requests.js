


function getMovies(filter , genre = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => renderMovies(data, genre , filter))
}