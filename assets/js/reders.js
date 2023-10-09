
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

    if (genre) {
        renderHome(data, genre)
    } else {
        let template = data.map(item => {
            return ` <div>
            <div class="hoverLayer" onclick="getOneMovie(${item.id})"><img src="${item.image}" alt=""></div>
            <div>
            <h4>${item.name}</h4>
            <p class="genreName">${item.genre[0]}</p>
            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f8c24f}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>${item.rate}</p>
            </div>

        </div>`
        }).join("");


        root.innerHTML = template;
        root.classList.add("allMovies")
        root.classList.remove("cinemas")
        root.classList.remove("showCinema")
        document.querySelector(".menu").classList.add("dnone");
    }
}



function renderCinemas(data, id) {

    if (id) {

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

    root.innerHTML = `<div class="showCinema__map"></div>

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
    <h2 class="seperator">MOVIES</h2>
    <div class="showCinema__movies">
 </div>`;



    let moviesTemplate = movies.map(item => {

        const { movieid, name, showTime } = item;
        const { time, roomNumber, totalSeats, reservedSeats } = showTime;

        let movieImage = allMovies.find(item => item.id == movieid).image;

        return `<div class="showCinema__movies__movie">
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