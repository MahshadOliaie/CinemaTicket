


function getMovies(filter, genre = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => renderMovies(data, genre, filter))
}


function getOneMovie(id, booking = false, cinemaName, time = null, roomNumber = null, totalSeats = null, reservedSeats = null) {
    fetch("assets/movies.json")
        .then(res => res.json())
        .then(data => data.filter(item => item.id == id))
        .then(newdata => (booking) ? bookMovie(newdata, cinemaName , time, roomNumber, totalSeats, reservedSeats) : showMovie(newdata))
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





// const update = {
//     movies: [
//         {
//             movieid: "1",
//             name: "Barbie",
//             showTime: {
//                 time: "10 AM",
//                 roomNumber: "A",
//                 totalSeats: 40,
//                 reservedSeats: [1, 2, 3]
//             }
//         }]
// }

// const updateStr = JSON.stringify(update);

// const options = {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: updateStr
// }


// fetch("assets/cinemas.json", options)
//     .then(res => res.json())
//     .then(data => console.log(data))