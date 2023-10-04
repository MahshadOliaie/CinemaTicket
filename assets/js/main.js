
// header actions
function showbar() {
    document.querySelector(".menu").classList.toggle("dnone");
}



function reload() {
    window.location.reload(true);
}



window.addEventListener("load", function () {
    getMovies(null, "Drama");
    getMovies(null, "Action");
    getMovies(null, "Comedy");
})



