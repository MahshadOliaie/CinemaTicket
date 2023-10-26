

function handleLocation() {
    const pathname = location.pathname;

    if (pathname == "/" || pathname == "") {
        window.location.reload(true);
    }

    if (pathname == "/MyTickets") {
        renderTicket()
    }

    if (pathname == "/Movies") {
        getMovies(filteredGenre)
    }

    if (pathname == "/Cinemas") {
        getCinemas()
    }

    if (pathname.includes("Cinemas") && pathname !== "/Cinemas") {
        let newPathname = pathname.replaceAll("Cinemas", "").replaceAll("/", "")
        getCinemas(newPathname)
    }

    if (pathname.includes("cinema")) {
        let newPathname = pathname.replaceAll("cinema", "").replaceAll("/", "")
        getOneCinema(newPathname)
    }

    if (pathname.includes("BookMovie")) {
        let newPathname = pathname.replaceAll("BookMovie", "").replaceAll("/", "")
        const { booking, cinemaName, time, roomNumber, totalSeats, reservedSeats } = currentBookMovie;
        routBookMovie(newPathname, booking, cinemaName, time, roomNumber, totalSeats, reservedSeats)
    }

    if (pathname == "/login") {
        login();
    }


    else {
        let newPathname = pathname.replaceAll("/", "")
        getOneMovie(newPathname)
    }


}

let currentBookMovie = {
    "booking": false,
    "cinemaName": "",
    "time": null,
    "roomNumber": null,
    "totalSeats": null,
    "reservedSeats": null
}


function routBookMovie(id, booking = false, cinemaName, time = null, roomNumber = null, totalSeats = null, reservedSeats = null) {

    currentBookMovie.booking = booking;
    currentBookMovie.cinemaName = cinemaName;
    currentBookMovie.time = time;
    currentBookMovie.roomNumber = roomNumber;
    currentBookMovie.totalSeats = totalSeats;
    currentBookMovie.reservedSeats = reservedSeats;

    if (location.pathname !== `/BookMovie${id}`) {
        history.pushState({}, "", `/BookMovie${id}`)
    }

    getOneMovie(id, booking, cinemaName, time, roomNumber, totalSeats, reservedSeats)
}




window.addEventListener("popstate", handleLocation)
