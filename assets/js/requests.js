


function getMovies(filter , genre = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => renderMovies(data, genre , filter))
}

function getOneMovie(index){
    fetch("assets/movies.json")
    .then(res => res.json())
    .then(data => showMovie(data[index]))
}


function getCinemas(){
    fetch("assets/cinemas.json")
    .then(res=> res.json())
    .then(data=> renderCinemas(data))
}