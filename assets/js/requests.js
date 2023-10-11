


function getMovies(filter, genre = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => renderMovies(data, genre, filter))
}


function getOneMovie(id, booking = false, time = null, roomNumber = null, totalSeats = null, reservedSeats = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id == id))
        .then(newdata => (booking) ? bookMovie(newdata, time , roomNumber, totalSeats, reservedSeats) : showMovie(newdata))
}



function getCinemas(id = null) {
    fetch("assets/cinemas.json")
        .then(res => res.json())
        .then(data => renderCinemas(data, id))
}


function getOneCinema(id) {
    fetch("assets/cinemas.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id == id))
        .then(oneData => renderOneCinema(oneData))
}

