
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
        return ` <div class="movies__movie">
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

    if (genre) {
        renderHome(data, genre)
    } else {
        let template = data.map((item , index) => {
            return ` <div>
            <div class="hoverLayer" onclick="getOneMovie(${index})"><img src="${item.image}" alt=""></div>
            <div>
            <h4>${item.name}</h4>
            <p class="genreName">${item.genre[0]}</p>
            <p><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f8c24f}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>${item.rate}</p>
            </div>

        </div>`
        }).join("");


        root.innerHTML = template;
        root.classList.add("allMovies")
        document.querySelector(".menu").classList.add("dnone");
    }
}


