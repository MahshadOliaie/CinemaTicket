
function renderHome(data, genre) {
    if (genre == "Drama") {
        data = data.filter(item => {
            return item.genre.includes("Drama") || item.genre.includes("Romance")
        })
    } else
        if (genre == "Action") {
            data = data.filter(item => {
                return item.genre.includes("Action") || item.genre.includes("Adventure")
            })
        } else
            if (genre == "Comedy") {
                data = data.filter(item => item.genre.includes("Comedy"))
            }

    let template = data.map(item => {
        return ` <div class="movies__movie" onclick="getOneMovie(${item.id})">
        <div class="movies__movie__img"><img src="${item.image}" alt=""></div>
        <div class="movies__movie__name"><p>${item.name}</p></div>
    </div>`
    }).join("");



    if (genre == "Drama") {
        dramaSection.innerHTML = template
    }
    if (genre == "Action") {
        ActionSection.innerHTML = template
    }
    if (genre == "Comedy") {
        comedySection.innerHTML = template
    }
}


function renderMovies(data, genre, filter) {

    allMovies = data;
    filteredGenre = filter;

    if (genre) {
        renderHome(data, genre)
    } else {

        if (location.pathname !== "/Movies") {
            history.pushState({}, "", "/Movies")
        }

        if (filter.length > 0) {
            data = [];
            allMovies.filter(movie => {
                filter.map(item => {
                    if (movie.genre.includes(item)) {
                        if (!data.includes(movie))
                            data.push(movie)
                    }
                })
            })

        }

        let template = data.map(item => {

            item.genre.map(genre => {
                if (!allGenres.includes(genre))
                    allGenres.push(genre)
            })

            return ` <div>
            <div class="hoverLayer" onclick="getOneMovie(${item.id})"><img src="${item.image}" alt=""></div>
            <div>
            <h4>${item.name}</h4>
            <p class="genreName">${item.genre[0]}</p>
            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f8c24f}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>${item.rate}</p>
            </div>

        </div>`
        }).join("");


        root.innerHTML = `<div class="genrePicker" onclick="show()">GENRES <span class="filteredCounter">${filteredGenre.length} genre filtered</span></div> <div class="genreFilter"></div>` + template;

        let genresTemplate = allGenres.map(genre => {
            return `<p class="genreFilter__genre ${(filteredGenre.length == 0) ? "" : (filteredGenre.includes(String(genre))) ? "genreSelect" : ""}" onclick="pickGenre('${genre}')">${genre}</p>`
        }).join("")
        document.querySelector(".genreFilter").innerHTML = `<p class="genreFilter__genre all ${(filteredGenre.length == 0) ? "genreSelect" : ""} " onclick="pickGenre('All')">All</p>` + genresTemplate

        root.classList.add("allMovies")
        root.classList.remove("cinemas")
        root.classList.remove("showCinema")
        document.querySelector(".menu").classList.add("dnone");
    }
}



function renderCinemas(data, id) {

    if (id) {

        if (location.pathname !== `/${id}Cinemas`) {
            history.pushState({}, "", `/${id}Cinemas`)
        }

        let newData = [];
        data.map(item => {
            let contains = [];
            item.movies.map(movie => {
                if (movie.movieid == id)
                    contains.push(movie)
            })

            if (contains.length > 0)
                newData.push(item)
        })


        data = newData;
    } else {

        if (location.pathname !== "/Cinemas") {
            history.pushState({}, "", "/Cinemas")
        }

    }

    let template = data.map(item => {

        const { name, image, address, rate, id } = item;

        return `<div class="cinemas__cinema" onclick="getOneCinema(${id})">
            <div class="cinemas__cinema__img"><img
                    src="${image}"
                    alt=""></div>
            <div class="cinemas__cinema__about">
                <h2 class="cinemas__cinema__about__title">${name}</h2>
                <p class="cinemas__cinema__about__address">${address}</p>
                <p class="cinemas__cinema__about__rate"><span><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <style>
                                svg {
                                    fill: #f8c24f
                                }
                            </style>
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg></span> ${rate}</p>
    
            </div>
        </div>`
    }).join("");

    root.innerHTML = template;
    root.classList.add("cinemas");
    root.classList.remove("allMovies")
    root.classList.remove("showCinema")
    document.querySelector(".menu").classList.add("dnone");

}






function renderOneCinema(data) {

    const { id, name, rate, image, address, phone, geo, movies } = data[0];
    const { lat, lng } = geo;

    if (location.pathname !== `/cinema${id}`) {
        history.pushState({}, "", `/cinema${id}`)
    }


    root.innerHTML = `<div class="showCinema__map" id="map"></div>
    <a href="https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}" class="googleMap">Find in Google Map</a>
    <div class="showCinema__about">
        <div class="showCinema__about__img"><img
                src="${image}"
                alt=""></div>
        <div class="showCinema__about__text">
            <h1 class="showCinema__about__text__title">${name}</h1>
            <p class="showCinema__about__text__address"><span>Address:</span> ${address}</p>
            <p class="showCinema__about__text__rate"><span><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <style>
                            svg {
                                fill: #f8c24f
                            }
                        </style>
                        <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg></span> ${rate}</p>

            <p class="showCinema__about__text__phone">Phone number: <span>${phone}</span></p>
        </div>
    </div>
    <div class="date"></div>
    <h2 class="seperator">MOVIES</h2>
    <div class="showCinema__movies">
 </div>`;


    var map = L.map('map').setView([lat, lng], 15);
    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);
    var marker = L.marker([lat, lng]).addTo(map);
    marker._icon.classList.add("huechange");



    let moviesTemplate = movies.map(item => {

        const { movieid, name, showTime } = item;
        const { time, roomNumber, totalSeats, reservedSeats } = showTime;

        let movieImage = allMovies.find(item => item.id == movieid).image;

        return `<div class="showCinema__movies__movie" onclick="routBookMovie(${movieid}, true ,'${data[0].name}', '${time}','${roomNumber}','${totalSeats}','${reservedSeats}')">
        <div class="showCinema__movies__movie__img"><img
                src="${movieImage}"
                alt=""></div>
        <div class="showCinema__movies__movie__about">
            <h3 class="showCinema__movies__movie__about__name">${name}</h3>
            <p class="showCinema__movies__movie__about__time">${time}</p>
        </div>
    </div>`

    }).join("")

    document.querySelector(".showCinema__movies").innerHTML = moviesTemplate;

    root.classList.remove("cinemas");
    root.classList.remove("allMovies");
    root.classList.add("showCinema")
}




function bookMovie(movieData, cinema, time, roomNumber, totalSeats, reservedSeats) {

    const { trailer, name, image, director, about, language, genre } = movieData[0];

    root.innerHTML = `<div class="videoBox">
    <video width="100%" height="100%" controls autoplay muted>
        <source
            src="${trailer}"
            type="video/mp4">
    </video>
</div>

<div class="movieBox">
    <div class="movieBox__movie">
        <div class="movieBox__movie__img"><img src="${image}" alt=""></div>
        <div class="movieBox__movie__text">
            <h3 class="movieBox__movie__text__name">${name} <span class="showtime">${time}</span></h3>
            <p class="movieBox__movie__text__director">${director}</p>
            <p class="movieBox__movie__text__room"><span>Room: </span>${roomNumber}</p>
            <div class="movieBox__movie__text__genres"></div>
            <p class="movieBox__movie__text__time">${movieData[0].time}</p>
            <p class="movieBox__movie__text__about"><span>About: </span>${about}</p>
            <p class="movieBox__movie__text__lang"><span>Language: </span>${language}</p>
        </div>
    </div>


    <div class="seatsContainer">

    <div class="date"></div>

        <div class="movieBox__seats ${(totalSeats == 40) ? 'num40' : (totalSeats == 30) ? 'num30' : ''}">
          
        </div>

        <div class="guide">
            <p><span class="reserved"></span>reserved</p>
            <p><span class="available"></span>Available</p>
            <p><span class="select"></span>Selected</p>
        </div>

        <div class="doneBtn disablesDoneBtn" onclick="chooseSeat('${image}', '${name}', '${time}' ,'${roomNumber}' , '${cinema}')">DONE</div>
    </div>
</div>`;




    moviesTicket.map(item => {
        if (item.cinema == cinema && item.movieName == name)
            resevedSeatNumber.push(+item.seatNumber)

    })


    for (let i = 1; i <= totalSeats; i++) {
        document.querySelector(".movieBox__seats").innerHTML += `<p class="movieBox__seats__seat ${(reservedSeats.includes(i) || resevedSeatNumber.includes(i)) ? 'reserved' : 'available'}"  onclick="doneBtnState()">${i}</p>`
    }

    let genretemplate = genre.map(genre => {
        return `<p class="movieBox__movie__text__genres__genre">${genre}</p>`
    }).join("")

    document.querySelector(".movieBox__movie__text__genres").innerHTML = genretemplate

    root.classList.add("bookingPage");
    root.classList.remove("cinemas");
    root.classList.remove("allMovies");
    root.classList.remove("showCinema")
}



function doneBtnState(){
    event.target.classList.toggle('selected')
    if([...document.querySelectorAll(".selected")].length>0){
        document.querySelector(".doneBtn").classList.remove("disablesDoneBtn")
    }else{
        document.querySelector(".doneBtn").classList.add("disablesDoneBtn")
    }
}



function chooseSeat(image, name, time, roomNumber, cinema) {
    let res = confirm("are you sure?");
    if (res) {
        let seats = [...document.querySelectorAll(".selected")];

        for (const seat of seats) {
            moviesTicket.push({
                "seatNumber": seat.textContent,
                "movieName": name,
                "cinema": cinema,
                "image": image,
                "time": time,
                "room": roomNumber
            })

            localStorage.setItem("ticket", JSON.stringify(moviesTicket))
            seat.classList.add("reserved")
            seat.classList.remove("selected")
        }
    }

}





function renderTicket() {
    if (location.pathname !== "/MyTickets") {
        history.pushState({}, "", "/MyTickets")
    }

    document.querySelector(".menu").classList.add("dnone");
    let i = 0;

    root.innerHTML = ` <div class="container">
    <div class="card-carousel"></div>
    <a href="#" class="visuallyhidden card-controller">Carousel controller</a>
</div>`;


    if (moviesTicket.length == 0) {
        document.querySelector(".container").innerHTML = "<h1 class='empty'>no ticket for today</h1>"
    }

    else {

        let template = moviesTicket.map(item => {
            const { seatNumber, movieName, cinema, image, time, room } = item
            i++
            return `<div class="card" id="${i}">
                <div class="image-container"><img
                        src="${image}"
                        alt=""></div>
                <h3 class="card__title">${movieName}</h3>
                <p class="card__time">${time}</p>
                <p class="card__cinema">${cinema}</p>
                <div class="line">
                    <p class="card__room"><span>Room: </span>${room}</p>
                    <p class="card__seat"><span>Seat Number: </span>${seatNumber}</p>
                </div>
    
                <div class="barcode">
                    <svg id="barcode"></svg>
                </div>
    
            </div>`
        }).join("");

        document.querySelector(".card-carousel").innerHTML = template;

        root.classList.remove("cinemas");
        root.classList.remove("allMovies")
        root.classList.remove("showCinema")

        carousel();
        JsBarcode("#barcode", "82516590534", {
            background: "whitesmoke",
            margin: 0,
            height: 60,
            text: "  "
        });

    }

}