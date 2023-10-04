

function showMovie(movie) {
    const {name , id , image} = movie;

    document.body.innerHTML = `<img src="${image}">`
}