


function getMovies(filter, genre = null) {
    topFunction()
    if (menu) {
        menu.classList.add("dnone");
    }
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => renderMovies(data, genre, filter))
}


function getOneMovie(id, booking = false, cinemaName, time = null, roomNumber = null, totalSeats = null, reservedSeats = null) {
    topFunction()
    if (menu)
        menu.classList.add("dnone");
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id == id))
        .then(newdata => (booking) ? bookMovie(newdata, cinemaName, time, roomNumber, totalSeats, reservedSeats) : showMovie(newdata))
}



function getCinemas(id = null) {
    topFunction()
    if (menu)
        menu.classList.add("dnone");
    fetch("assets/cinemas.json")
        .then(res => res.json())
        .then(data => renderCinemas(data, id))
}


function getOneCinema(id) {
    topFunction()
    if (menu)
        menu.classList.add("dnone");
    fetch("assets/cinemas.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id == id))
        .then(oneData => renderOneCinema(oneData))
}



