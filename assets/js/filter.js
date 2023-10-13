

function pickGenre(genre) {
    if (genre == "All") {
        event.target.classList.add("genreSelect")
        filteredGenre = []
        getMovies(filteredGenre, null);

    }
    else {
        event.target.classList.toggle("genreSelect")
        document.querySelector(".all").classList.remove("genreSelect")
        if (event.target.classList.value.includes('genreSelect')) {
            filteredGenre.push(genre)
        } else {
            filteredGenre.splice(filteredGenre.indexOf(genre), 1)
        }

        if (filteredGenre.length == 0) {
            document.querySelector(".all").classList.add("genreSelect")
            getMovies(filteredGenre, null);

        }
        else {
            getMovies(filteredGenre, null)
        }



    }


}