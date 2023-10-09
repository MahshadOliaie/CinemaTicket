


function getMovies(filter, genre = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => renderMovies(data, genre, filter))
}

function getOneMovie(id) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id==id))
        .then(newdata => showMovie(newdata))
}


function getCinemas() {
    fetch("assets/cinemas.json")
        .then(res => res.json())
        .then(data => renderCinemas(data))
}


function getOneCinema(id) {
    fetch("assets/cinemas.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id==id))
        .then(oneData=>renderOneCinema(oneData))
}

