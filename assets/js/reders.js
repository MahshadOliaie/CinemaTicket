
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
        <div class="movies__movie__name">${item.name}</div>
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